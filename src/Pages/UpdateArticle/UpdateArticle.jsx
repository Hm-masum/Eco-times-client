import { FileInput, Label, Select } from "flowbite-react";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";
import makeAnimated from 'react-select/animated';

const UpdateArticle = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [loading, setLoading] = useState(false)
    const axiosSecure=useAxiosSecure()

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
          console.log(articleData);
    
          //Post request to server
          //await mutateAsync(articleData)
    
        } catch (err) {
          setLoading(false)
          console.log(err);
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


  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">Update Article</h2>

      <form onSubmit={handleUpdateArticle}>
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
          <div className="w-1/2">
            <label className="block mb text-sm">Title</label>
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
          <div className="w-1/2">
            <label className="block mb text-sm">Publisher</label>
            <div className="mt-2">
              <input
                type="name"
                name="publisher"
                required
                placeholder="Enter Publisher name"
                className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
              />
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
            Update Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateArticle;
