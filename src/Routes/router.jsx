import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import ErrorPage from "./../Page/ErrorPage";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Page/Dashboard/Common/Profile";
import Tonmoy from "../Components/TOnmoy.jsx/Tonmoy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Tonmoy></Tonmoy>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
