import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header-footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <img
            src="https://www.skylineelitesc.org/wp-content/uploads/2020/03/Skyline-Elite-Logo-RGB.png"
            alt="Football"
            style={{ width: "60px" }}
          />
        </Box>

        <Box className={menuOpen ? "menu-item-res" : "menu-item"}>
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
        {/* ========hamburger menu icons -================= */}
        <Box className="hamburger-menu">
          {menuOpen ? (
            <>
              <>
                <CloseIcon
                  style={hamburgerMenuStyle}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </>
            </>
          ) : (
            <>
              <MenuIcon
                style={hamburgerMenuStyle}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </>
          )}
        </Box>
      </Box>
    </nav>
  );
};

export default Header;

const hamburgerMenuStyle = {
  cursor: "pointer",
};
