import { Box, List } from "@mui/material";
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./dash-board.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Button, Popover, Stack, Typography } from "@mui/material";

// ===menu====
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//icons
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TableRowsIcon from "@mui/icons-material/TableRows";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AddLinkIcon from "@mui/icons-material/AddLink";

import CustomSnackbar from "../../components/CustomUi/CustomSnackBar";
import LogOut from "../../components/LogOut";

const DashboardRoot = () => {
  const [expand, setExpand] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleExpand = (event) => {
    setExpand(!expand);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Box>
      <CustomSnackbar />
      <Box
        sx={{
          height: "100vh",
          width: "240px",
          position: "fixed",
          bgcolor: "#F1EFEF",
          color: "#000",
        }}
      >
        <nav>
          <List>
            <ListItem disablePadding>
              <Avatar
                alt="Cindy Baker"
                src="https://i.pinimg.com/originals/df/25/e3/df25e39d7400f1bbcb7adf695063faaa.jpg"
                sx={{ width: 56, height: 56, margin: "20px" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to="/admin"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <LogOut />
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav>
          <List>
            <ListItem disablePadding>
              <NavLink
                to="teams"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Teams" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to="players"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Players" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav>
          <List>
            <ListItem disablePadding>
              <NavLink
                to="fixtures"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Fixtures" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to="results"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <WorkspacePremiumIcon />
                  </ListItemIcon>
                  <ListItemText primary="Results" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to="pointtable"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <TableRowsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Point Table" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box sx={{ paddingLeft: "260px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardRoot;
