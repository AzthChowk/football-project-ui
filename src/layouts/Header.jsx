import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = () => {
  return (
    <nav className="navbar">
      <Box className="top-header">
        <Box className="container top-header-cts">
          <FacebookIcon sx={{ mr: 2 }} />
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
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Home</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="teams"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Teams</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="players"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Players</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="fixtures"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Fixtures</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="results"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Results</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="point-table"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Point Table</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="news"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>News</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Typography>Sign in</Typography>
              </NavLink>
            </li>
          </ul>
        </Box>
      </Box>
    </nav>
  );
};

export default Header;
