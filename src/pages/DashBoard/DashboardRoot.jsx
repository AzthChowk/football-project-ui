import { Box, List } from "@mui/material";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
      <Box
        sx={{
          height: "100vh",
          width: "240px",
          position: "fixed",
          bgcolor: "background.paper",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <Avatar
                alt="Cindy Baker"
                src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"
                sx={{ width: 56, height: 56, margin: "20px" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <Link to="/admin">
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </Link>
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
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Log out"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                />

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    Are you sure to log out?
                  </Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"center"}
                    padding={"5px"}
                  >
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={handleLogout}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleClose}
                    >
                      No
                    </Button>
                  </Stack>
                </Popover>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <Link to="teams">
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Teams" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link to="players">
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Players" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ScheduleIcon />
                </ListItemIcon>
                <ListItemText primary="Fixtures" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TableRowsIcon />
                </ListItemIcon>
                <ListItemText primary="Point Table" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box sx={{ paddingLeft: "275px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardRoot;
