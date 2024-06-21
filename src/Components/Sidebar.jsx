import logo from "../../public/logo1.png";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { FaChartBar, FaChartPie, FaRegNewspaper } from "react-icons/fa";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="block cursor-pointer p-3 font-bold">
          <Link to="/" className="flex justify-center items-center gap-3">
            <img src={logo} width="40" height="40" />
            <h2 className="text-xl">EcoTimes</h2>
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex px-4 py-1 shadow-lg rounded-lg justify-center items-center bg-purple-300 mx-auto">
            <Link to="/" className="flex items-center justify-center gap-2">
              <img src={logo} width="40" height="40" />
              <h2 className="text-2xl font-semibold">EcoTimes</h2>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaChartBar className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>

              <NavLink
                to="all-users"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaUsers className="w-5 h-5" />

                <span className="mx-4 font-medium">All Users</span>
              </NavLink>

              <NavLink
                to="all-articles"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaRegNewspaper className="w-5 h-5" />

                <span className="mx-4 font-medium">All Articles</span>
              </NavLink>

              <NavLink
                to="add-publisher"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaChartPie className="w-5 h-5" />

                <span className="mx-4 font-medium">Add Publisher</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* Profile Menu */}
          <NavLink
            to="/myProfile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />
            <span className="mx-4 font-medium">Profile</span>
          </NavLink>

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
