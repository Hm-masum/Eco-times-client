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
import UpdateArticle from "../Pages/UpdateArticle/UpdateArticle";
import Statistics from "../Pages/DashBoard/Statistics";
import Payment from "../Pages/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
        element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>,
      },
      {
        path: "/article/:id",
        element: <PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/myProfile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: "/myArticle",
        element: <PrivateRoute><MyArticle></MyArticle></PrivateRoute>,
      },
      {
        path: "/premiumArticle",
        element: <PrivateRoute><PremiumArticle></PremiumArticle></PrivateRoute>,
      },
      {
        path: "/allArticle",
        element: <AllArticle></AllArticle>,
      },
      {
        path: "/update/:id",
        element:<PrivateRoute><UpdateArticle></UpdateArticle></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/article/${params.id}`),
      },
      {
        path: 'payment',
        element:<Payment></Payment>
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><AdminRoute><DashboardLayOut></DashboardLayOut></AdminRoute></PrivateRoute>,
    children:[
      {
        index:true,
        element:<PrivateRoute><AdminRoute><Statistics></Statistics></AdminRoute></PrivateRoute>
      },
      {
        path: "all-users",
        element:<PrivateRoute><AdminRoute><AllUser></AllUser></AdminRoute></PrivateRoute>
      },
      {
        path: "all-articles",
        element:<PrivateRoute><AdminRoute><AllArticles></AllArticles></AdminRoute></PrivateRoute>
      },
      {
        path: "add-publisher",
        element:<PrivateRoute><AdminRoute><AddPublisher></AddPublisher></AdminRoute></PrivateRoute>
      },

    ]
  }
]);

export default router;
