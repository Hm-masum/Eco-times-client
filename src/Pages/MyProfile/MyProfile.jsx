import { Avatar, FileInput, Label } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user,updateUserProfile } = useAuth();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];

    try {
      const image_url = await imageUpload(image);

      updateUserProfile(name, image_url)
        .then(() => {
          toast.success("Update profile successfully");
        })
        .catch((error) => {
          toast.error(error.message.split("/")[1].split(")")[0]);
        });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col border-2 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">
        Update Profile
      </h2>

      <div className="flex items-center mx-auto flex-wrap gap-2">
        <Avatar size="xl" img={user?.photoURL} bordered />
      </div>

      <h2 className="text-center mt-4 text-xl font-semibold">{user.displayName}</h2>

      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label className="block mb text-sm">Name</label>
          <div className="mt-2">
            <input
              type="name"
              name="name"
              required
              placeholder="update Your Name"
              className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 block">
            <Label value="Update your Image" />
          </div>
          <FileInput name="image" />
        </div>

        <div>
          <button
            type="submit"
            className="bg-purple-700 font-semibold w-full rounded-md text-center py-3 text-white"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
