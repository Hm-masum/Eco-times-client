import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArticle from "../Pages/AddArticle/AddArticle";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addArticle",
        element: <AddArticle></AddArticle>,
      },
      {
        path: "/articleDetails",
        element: <ArticleDetails></ArticleDetails>,
      },
    ],
  },
]);

export default router;
