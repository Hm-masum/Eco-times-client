import { FileInput, Label} from "flowbite-react";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";
import makeAnimated from 'react-select/animated';
import { useLoaderData } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Select from "react-select";
import useAllPublisher from "../../Hooks/useAllPublisher";
import LoadingSpinner from "../../Components/LoadingSpinner";

const UpdateArticle = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [loading, setLoading] = useState(false)
    const axiosSecure=useAxiosSecure()
    const loadedData=useLoaderData()
    const [publishers,isLoading] = useAllPublisher()

    const { mutateAsync } = useMutation({
      mutationFn: async articleData => {
        const { data } = await axiosSecure.put(`update-article/${loadedData._id}`, articleData)
        return data
      },
      onSuccess: () => {
        toast.success('Article updated Successfully!')
        setLoading(false)
      },
    })

    const handleUpdateArticle = async (e) => {
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
            title,
            publisher,
            description,
            tags,
            image: image_url,
          };
          //Post request to server
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
        <h2 className="text-3xl md:text-4xl mb-5 text-center font-semibold">Update Article</h2>

        <form onSubmit={handleUpdateArticle}>
          <div className="mb-4">
           <label className="block mb text-sm">Title</label>
           <div className="mt-2">
             <input
               type="name"
               name="title"
               required
               defaultValue={loadedData.title}
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
                      <option defaultValue={loadedData.publisher} value={item?.publisher} key={item?._id}>{item?.publisher}</option>
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
                defaultValue={loadedData.description}
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
              Update Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArticle;
