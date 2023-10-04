import React from "react";
import Header from "../../layouts/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import CustomSnackbar from "../../components/CustomUi/CustomSnackbar";
import Footer from "../../layouts/Footer";

const HomePageRoot = () => {
  return (
    <>
      <CustomSnackbar />
      <Box sx={{ paddingBottom: { xs: 10, sm: 10, md: 10, lg: 10 } }}>
        <Header />
      </Box>

      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>
      <Box sx={{ marginTop: "auto" }}>
        <Footer />
      </Box>
    </>
  );
};

export default HomePageRoot;
