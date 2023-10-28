import React from "react";
import { Box, Avatar, Typography, Divider, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import LogOut from "../../components/LogOut";

const NewsRoot = () => {
  const userEmail = localStorage.getItem("email");

  return (
    <Box className="container" sx={{ padding: 2 }}>
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
          <Typography sx={{ wordBreak: "break-all", padding: 1 }}>
            Hello!
          </Typography>
          <Typography sx={{ wordBreak: "break-all", padding: 1 }}>
            {userEmail}
          </Typography>
          <Link to="profile">
            <Typography sx={{ padding: 1 }}> Profile </Typography>
          </Link>
          <Divider />
          <Link to="news">
            <Typography sx={{ padding: 1 }}> News </Typography>
          </Link>
          <Link to="news/add">
            <Typography sx={{ padding: 1 }}> Add News </Typography>
          </Link>
          <LogOut />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsRoot;
