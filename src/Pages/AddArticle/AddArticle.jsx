import { FileInput, Label } from "flowbite-react";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";

const AddArticle = () => {

  const handleAddArticle = async (e)=>{
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    // const  = form..value;
    // const  = form..value;
    const image = form.image.files[0];

    try {
      const image_url = await imageUpload(image)
      const articleData = {
        title,
        description,
        image: image_url,
      }
      console.log(articleData)

      //  Todo Post request to server
      
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">Add Article</h2>

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

        <div className="md:flex gap-4 mb-4">
          <div className="w-1/2">
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
          <div className="w-1/2">
            <label className="block mb text-sm">Publisher</label>
            <div className="mt-2">
              <input
                type="publisher"
                name="name"
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
            className="bg-purple-700 font-semibold w-full rounded-md text-center py-3 text-white"
          >
            Add Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
