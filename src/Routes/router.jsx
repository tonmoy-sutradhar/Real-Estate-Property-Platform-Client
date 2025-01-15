import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import ErrorPage from "./../Page/ErrorPage";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Page/Dashboard/Common/Profile";
import Tonmoy from "../Components/TOnmoy.jsx/Tonmoy";
import Statistics from "../Page/Dashboard/Common/Statistics";
import AddPlant from "../Page/Dashboard/Seller/AddPlant";
import MyInventory from "../Page/Dashboard/Seller/MyInventory";
import ManageUsers from "./../Page/Dashboard/Admin/ManageUsers";
import MyOrders from "../Page/Dashboard/Customer/MyOrders";
import ManageOrders from "../Page/Dashboard/Seller/ManageOrders";

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
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout></DashboardLayout>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Tonmoy></Tonmoy>,
  //     },
  //     {
  //       path: "profile",
  //       element: <Profile></Profile>,
  //     },
  //   ],
  // },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics></Statistics>,
      },
      {
        path: "add-plant",
        element: <AddPlant></AddPlant>,
      },
      {
        path: "my-inventory",
        element: <MyInventory></MyInventory>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "manage-orders",
        element: <ManageOrders></ManageOrders>,
      },
    ],
  },
]);

export default router;
