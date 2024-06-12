import {Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navlinks = (
    <>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/addArticle`}>Add Articles</NavLink>
      <NavLink to={`/allArticle`}>All Articles</NavLink>
      <NavLink to={`/subscription`}>Subscription</NavLink>
      <NavLink to={`/dashboard`}>Dashboard</NavLink>
      <NavLink to={`/myArticle`}>My Articles</NavLink>
      <NavLink to={`/premiumArticle`}>Premium Articles</NavLink>
    </>
  );

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Brand href="">
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            EcoTimes
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Button>Login</Button>
        </div>

        <Navbar.Collapse>{navlinks}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
