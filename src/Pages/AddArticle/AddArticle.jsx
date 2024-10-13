import { FileInput, Label } from "flowbite-react";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";
import Select from "react-select";
import { useState } from "react";
import makeAnimated from 'react-select/animated';
import useAuth from "../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAllPublisher from "../../Hooks/useAllPublisher";
import LoadingSpinner from "../../Components/LoadingSpinner";

const AddArticle = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const {user}=useAuth();
  const [loading, setLoading] = useState(false)
  const axiosSecure=useAxiosSecure()
  const [publishers,isLoading] = useAllPublisher()

  const { mutateAsync } = useMutation({
    mutationFn: async articleData => {
      const { data } = await axiosSecure.post(`/article`, articleData)
      return data
    },
    onSuccess: () => {
      toast.success('Article Added Successfully!')
      setLoading(false)
    },
  })

  console.log(publishers)

  const handleAddArticle = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const publisher = form.publisher.value;
    const image = form.image.files[0];
    let tags=[]
    selectedOption.map(tag=>tags.push(tag.value))

    try {
      const image_url = await imageUpload(image);
      const articleData = {
        authorName:user?.displayName,
        authorPhoto:user?.photoURL,
        authorEmail:user?.email,
        title,
        publisher,
        description,
        tags,
        image: image_url,
        postedDate: new Date().toLocaleDateString(),
        isPremium:'no',
        status:'pending',
        views: 0
      };
      await mutateAsync(articleData)

    } catch (err) {
      setLoading(false)
      toast.error(err.message);
    }
  };

  const animatedComponents = makeAnimated();
  const options = [
    { value: "sports", label: "Sports" },
    { value: "entertainment", label: "Entertainment" },
    { value: "Science", label: "Science" },
    { value: "politics", label: "Politics" },
    { value: "education", label: "Education" },
    { value: "international", label: "International" },
  ];

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="flex justify-center rounded-lg p-4 md:p-12 bg-gray-100 items-center">
      <div className="w-full p-10 bg-white rounded-xl shadow">
          <h2 className="text-3xl md:text-4xl mb-5 text-center font-semibold">Add Article</h2>

          <form onSubmit={handleAddArticle}>
            <div className="mb-4">
              <label className="block mb text-sm">Title</label>
              <div className="mt-2">
                <input
                  type="name"
                  name="title"
                  required
                  placeholder="Enter Title Name"
                  className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                 />
               </div>
            </div>

            <div className="md:flex items-center gap-4 mb-4">
               <div className="md:w-1/2">
                <label className="block mb text-sm">Tags</label>
                 <div className="mt-2">
                  <Select
                    components={animatedComponents}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                   />
                 </div>
               </div>

               <div className="md:w-1/2">
                 <label className="block mb text-sm">Publisher</label>
                 <div className="mt-2">
                   <select name="publisher" className="w-full p-3 border rounded-md border-gray-400 text-gray-900">
                     {
                      publishers?.map(item =>
                        <option value={item?.publisher} key={item?._id}>{item?.publisher}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-4">
               <label className="block mb text-sm">Description</label>
              <div className="mt-2">
                <input
                  type="name"
                  name="description"
                  required
                  placeholder="Enter Description"
                   className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                />
               </div>
            </div>

            <div className="mb-4">
              <div className="mb-2 block">
                <Label value="Upload Image" />
              </div>
              <FileInput name="image" />
            </div>
    
            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-700 font-semibold w-full rounded-md text-center py-3 text-white"
              >
                 Add Article
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default AddArticle;
