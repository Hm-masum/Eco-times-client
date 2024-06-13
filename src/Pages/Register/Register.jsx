import { useState } from "react";
import { Link } from "react-router-dom";
import imgBg from "../../assets/login.png"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="flex md:flex-row-reverse flex-col items-center justify-center px-3 md:px-24">
      <div className="md:w-1/2">
        <img className="w-[600px] md:h-[600px]" src={imgBg} alt="" />
      </div>

      <div className="md:w-1/2 px-2 md:px-14 space-y-4">
        <h2 className="text-4xl font-semibold text-center pb-3">
          Register Please!
        </h2>

        <form>
          <div className="space-y-4">
            <div>
              <label className="block mb text-sm">Your Name</label>
              <div className="mt-2">
                <input
                  type="name"
                  name="name"
                  required
                  placeholder="Enter Your name"
                  className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block mb text-sm">Email address</label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block mb text-sm">Password</label>
              <div className="mt-2 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter Password"
                  className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                />
                <span
                  className="absolute top-4 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-purple-700 font-semibold w-full rounded-md text-center py-3 text-white"
              >
                Register
              </button>
            </div>
          </div>
        </form>

        <div>
          <p className="text-lg">
            Have an account?{" "}
            <Link className="font-semibold text-purple-600" to={"/login"}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
