import { FileInput, Label } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../utils/ImgBB_api";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import bg from "../../assets/pexels-iriser-1086584.jpg";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import useRole from "../../Hooks/useRole";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  let [isOpen, setIsOpen] = useState(false)
  const [role, isLoading]= useRole()

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
      <div className="flex justify-center items-center lg:h-[80vh]">
        <Helmet>
          <title>InstaCash | My Profile</title>
        </Helmet>

        <div className="bg-white shadow-lg rounded-2xl w-full md:w-3/5">
          <img alt="profile" src={bg} className="w-full mb-4 rounded-t-lg h-36"/>
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src={user?.photoURL}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
              />
            </a>

            <p className="py-2 uppercase font-semibold px-4 text-xs text-white bg-purple-700 rounded-full">
              {role}
            </p>

            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="text-sm text-center text-gray-600">
                <p><span className="font-semibold">Name : </span>{user?.displayName}</p>
                <p><span className="font-semibold">Email : </span>{user?.email}</p>
                <button onClick={() => setIsOpen(true)} className="py-2 uppercase px-4 text-xs text-white bg-purple-700 rounded-full font-semibold">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">

            <DialogTitle className="font-bold text-3xl text-center">Update Profile</DialogTitle>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block mb text-sm">Name</label>
                <div className="mt-2">
                  <input type="name" name="name" required placeholder="update Your Name" className="w-full p-3 border rounded-md border-gray-400 text-gray-900"/>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label value="Update your Image" />
                </div>
                <FileInput name="image" />
              </div>

              
              <button type="submit" className="bg-purple-700 font-semibold w-full rounded-md text-center py-2 text-white">
                Update Profile
              </button>
              
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default MyProfile;
