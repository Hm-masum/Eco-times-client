import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArticle from "../Pages/AddArticle/AddArticle";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import Subscription from "../Pages/Subscription/Subscription";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PremiumArticle from "../Pages/PremiumArticle/PremiumArticle";
import MyArticle from "../Pages/MyArticle/MyArticle";
import AllArticle from "../Pages/AllArticle/AllArticle";
import DashboardLayOut from "../Layouts/DashboardLayOut";
import AllArticles from "../Pages/DashBoard/AllArticles";
import AllUser from "../Pages/DashBoard/AllUser";
import AddPublisher from "../Pages/DashBoard/AddPublisher";

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
        path: "/article/:id",
        element: <ArticleDetails></ArticleDetails>,
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/myArticle",
        element: <MyArticle></MyArticle>,
      },
      {
        path: "/premiumArticle",
        element: <PremiumArticle></PremiumArticle>,
      },
      {
        path: "/allArticle",
        element: <AllArticle></AllArticle>,
      },
    ],
  },
  {
    path:'dashboard',
    element:<DashboardLayOut></DashboardLayOut>,
    children:[
      {
        index:true,
        element:<AllUser></AllUser>
      },
      {
        path: "all-users",
        element:<AllUser></AllUser>
      },
      {
        path: "all-articles",
        element:<AllArticles></AllArticles>
      },
      {
        path: "add-publisher",
        element:<AddPublisher></AddPublisher>
      },

    ]
  }
]);

export default router;
