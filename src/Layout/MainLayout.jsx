import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
