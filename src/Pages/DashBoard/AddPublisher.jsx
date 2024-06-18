import { FileInput, Label } from "flowbite-react";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";

const AddPublisher = () => {

    const handleAddPublisher = async (e) => {
        e.preventDefault();
        const form = e.target;
        const publisher = form.publisher.value;
        const image = form.image.files[0];
    
        try {
          const image_url = await imageUpload(image);
          const publisherData = {
            publisher,
            image: image_url,
          };
          console.log(publisherData);
    
          //  Todo Post request to server
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
      };

  return (
    <div>
      <div className="border-2 rounded-xl p-4 md:p-10">
        <h2 className="text-3xl mb-8 text-center font-semibold">Add Article</h2>

        <form onSubmit={handleAddPublisher}>
          <div className="mb-4">
            <label className="block mb text-sm">Publisher Name</label>
            <div className="mt-2">
              <input
                type="name"
                name="publisher"
                required
                placeholder="Enter Publisher Name"
                className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
              />
            </div>
          </div>

          <div className="mb-6">
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
              Add Publisher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPublisher;
