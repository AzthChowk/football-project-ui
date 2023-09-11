import React from "react";
import Header from "../../layouts/Header";
import { Outlet } from "react-router-dom";

const HomePageRoot = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomePageRoot;
