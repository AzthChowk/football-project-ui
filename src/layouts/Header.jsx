import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = () => {
  return (
    <Box>
      <nav className="navbar">
        <Box className="top-header">
          <Box className="container top-header-cts">
            <FacebookIcon />
            <TwitterIcon />
          </Box>
        </Box>
        <Box className="container navbar-menu">
          <Box className="logo">
            <Typography>Football X - League</Typography>
          </Box>
          <Box className="menu-item">
            <ul>
              <li>
                <NavLink to="/">
                  <Typography>Home</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="teams">
                  <Typography>Teams</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="players">
                  <Typography>Players</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="fixtures">
                  <Typography>Fixtures</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="results">
                  <Typography>Results</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="point-table">
                  <Typography>Point Table</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="news">
                  <Typography>News</Typography>
                </NavLink>
              </li>
              <li>
                <NavLink to="login">
                  <Typography>Sign in</Typography>
                </NavLink>
              </li>
            </ul>
          </Box>
        </Box>
      </nav>
    </Box>
  );
};

export default Header;
