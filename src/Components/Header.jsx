import {Avatar, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import ButtonComp from "./ButtonComp";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const {user,logOut}=useAuth()

  const navLinks = (
    <>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/`}>Home</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/addArticle`}>Add Articles</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/allArticle`}>All Articles</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/subscription`}>Subscription</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/dashboard`}>Dashboard</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/myArticle`}>My Articles</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-purple-500 font-semibold' : 'text-black'} to={`/premiumArticle`}>Premium Articles</NavLink>
    </>
  );

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Brand href="">
          <span className="self-center whitespace-nowrap text-2xl md:text-3xl font-semibold dark:text-white">
            EcoTimes
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          {user ?
            <div className="gap-4 flex items-center">
              <div className="flex flex-wrap gap-2">
                 <Avatar img={user?.photoURL} rounded />
              </div>
              <button onClick={logOut}><ButtonComp value={"LogOut"}></ButtonComp></button>
            </div> :
            <>
              <NavLink to={`/login`}><ButtonComp value={"Login"}></ButtonComp></NavLink>
            </>
          }
        </div>

        <Navbar.Collapse>{navLinks}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
