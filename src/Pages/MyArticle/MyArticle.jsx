import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";
import SmallButton from "../../Components/SmallButton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "flowbite-react";

const MyArticle = () => {
  const axiosSecure=useAxiosSecure();
  const {user}=useAuth()

  const { data: articles = [], isLoading , refetch } = useQuery({
    queryKey: ["my-articles"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/my-article/${user?.email}`);
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
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/article/${article._id}`)
            .then(res => {
                if(res.data.deletedCount>0){
                    refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Article has been deleted.",
                    icon: "success"
                   });
                }
            })
        }
    });
  }

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
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    isPremium
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
                    Update
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
                {
                  articles.map((article,index) => <tr key={article._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{index+1}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{article.title}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.status==='decline' ? <>
                          <Tooltip content={article.decMessage}>
                              <p>Declined</p>
                          </Tooltip>
                        </>      
                        :<p>{article.status}</p>}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{article.isPremium}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={`/article/${article._id}`}>
                        <SmallButton value={"Details"}></SmallButton>
                      </Link>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={`/update/${article._id}`}>
                        <SmallButton value={"Update"}></SmallButton>
                      </Link>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button onClick={() => handleDelete(article)}>
                        <SmallButton value={"Delete"}></SmallButton>
                      </button>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticle;
