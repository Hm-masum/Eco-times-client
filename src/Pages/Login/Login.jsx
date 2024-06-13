import { Link } from "react-router-dom";
import imgBg from "../../assets/login.png";
import ButtonComp from "../../Components/ButtonComp";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-3 md:px-24">
      <div className="md:w-1/2">
        <img className="w-[600px] md:h-[600px]" src={imgBg} alt="" />
      </div>

      <div className="md:w-1/2 px-2 md:px-14 space-y-4">
        <h2 className="text-4xl font-semibold text-center pb-3">Login Please!</h2>

        <form>
          <div className="space-y-4">
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
                 Login
              </button>
            </div>
          </div>
        </form>

        <div>                               
          <p className="text-lg">
              Do not have an account yet? {" "}
             <Link className="font-semibold text-purple-600" to={"/register"}>
                Sign Up
            </Link>
          </p>
        </div>

        <h2 className="text-center mt-3">--------Login with social accounts--------</h2>

        <div className="flex justify-center gap-2">
          <button
            // onClick={handleGoogleSignIn}
            className="w-full"
          >
            <ButtonComp value={"Google"} icon={"google"}></ButtonComp>
          </button>
          <button
            // onClick={handleGithubSignIn}
            className="w-full"
          >
            <ButtonComp value={"Github"} icon={'github'}></ButtonComp>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;