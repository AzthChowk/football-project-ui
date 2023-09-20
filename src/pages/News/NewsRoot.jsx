import React from "react";
import { Box, Avatar, Typography, Divider, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const NewsRoot = () => {
  const userEmail = localStorage.getItem("email");
  console.log(userEmail);
  return (
    <Box className="container">
      <Grid
        container
        sx={{
          padding: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          sx={{
            backgroundColor: "#F0F0F0",
            padding: 2,
            borderRadius: "10px",
            height: "fit-content",
          }}
        >
          <Avatar />
          <Typography> Hello! {userEmail} </Typography>
          <Typography> Profile </Typography>
          <Typography> Log out </Typography>
          <Divider />
          <Link to="news">
            <Typography> News </Typography>
          </Link>
          <Link to="news/add">
            <Typography> Add News </Typography>
          </Link>
          <Typography> Edit News </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} xl={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsRoot;
