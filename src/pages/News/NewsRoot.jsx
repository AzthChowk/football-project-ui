import React from "react";
import { Box, Avatar, Typography, Divider, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import LogOut from "../../components/LogOut";

const NewsRoot = () => {
  const userEmail = localStorage.getItem("email");

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
          sm={4}
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
          <Typography sx={{ wordBreak: "break-all" }}>Hello!</Typography>
          <Typography sx={{ wordBreak: "break-all" }}>{userEmail}</Typography>
          <Typography> Profile </Typography>
          <Typography>
            <LogOut />
          </Typography>
          <Divider />
          <Link to="news">
            <Typography> News </Typography>
          </Link>
          <Link to="news/add">
            <Typography> Add News </Typography>
          </Link>
          <Typography> Edit News </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsRoot;
