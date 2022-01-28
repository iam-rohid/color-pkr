import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <SideBar />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
