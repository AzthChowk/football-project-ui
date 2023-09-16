import React from "react";
import Header from "../../layouts/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import CustomSnackbar from "../../components/CustomUi/CustomSnackBar";

const HomePageRoot = () => {
  return (
    <>
      <CustomSnackbar />
      <Box>
        <Header />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default HomePageRoot;
