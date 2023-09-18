import React from "react";
import Header from "../../layouts/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import CustomSnackbar from "../../components/CustomUi/CustomSnackbar";

const HomePageRoot = () => {
  return (
    <>
      <CustomSnackbar />

      <Header />

      <Outlet />
    </>
  );
};

export default HomePageRoot;
