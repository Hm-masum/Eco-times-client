import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import SmallButton from "../../Components/SmallButton";
import { Avatar } from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { NavLink } from "react-router-dom";

const AllArticles = () => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false)
  let [value, setValue] = useState([])


  const {
    data: articles = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-articles"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/article`);
      return data;
    },
  });

  const handleDelete = (article) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/article/${article._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Article has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDecline = (e) => {
    e.preventDefault();
    const form=e.target;
    const decMessage=form.decMessage.value
    console.log(decMessage);
    axiosSecure.patch(`/article/decline/${value._id}`,{message:decMessage}).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${value.title} is declined now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  };

  const handlePremium = (article) => {
    axiosSecure.patch(`/article/premium/${article._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${article.title} is premium now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleApprove = (article) => {
    axiosSecure.patch(`/article/approve/${article._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${article.title} is approve now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Author Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Author Email
                  </th>
                  
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    publisher
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Details
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Approve
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Premium
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Decline
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Room row data */}
                {articles.map((article) => (
                  <tr key={article._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex flex-wrap gap-2">
                        <Avatar img={article.authorPhoto} rounded bordered/>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.authorName}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.authorEmail}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.publisher}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <NavLink to={`/article/${article._id}`}>
                          <SmallButton value={"Details"} />
                      </NavLink>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.status}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {article.status === "approved" ? (
                        <p>approved</p>
                      ) : (
                        <button onClick={() => handleApprove(article)}>
                          <SmallButton value={"approve"} />
                        </button>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {article.isPremium === "yes" ? (
                        <p>Premium</p>
                      ) : (
                        <button onClick={() => handlePremium(article)}>
                          <SmallButton value={"premium"} />
                        </button>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {
                        article.status === "decline" ? <p>decline</p> :
                        <>
                           <button onClick={() => { setValue(article); setIsOpen(true); }}>
                              <SmallButton value={"Decline"} />
                           </button>
                        </>
                      }
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button onClick={() => handleDelete(article)}>
                        <SmallButton value={"Delete"} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          

      
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Enter decline reason..</DialogTitle>

            <form onSubmit={handleDecline} className="space-y-3">
              <div className="mt-2">
                <textarea
                  type="text"
                  name="decMessage"
                  required
                  placeholder="Please write"
                  className="w-full rounded-md text-gray-900"
                />
              </div>
               <div className="flex gap-4 justify-center">
                 <button onClick={() => setIsOpen(false)}><SmallButton value={"cancel"}/></button>
                 <button type="submit"><SmallButton value={"Decline"}/></button>
               </div>   
            </form>
          </DialogPanel>
        </div>
      </Dialog>

        
      </div>
    </div>
  );
};

export default AllArticles;
