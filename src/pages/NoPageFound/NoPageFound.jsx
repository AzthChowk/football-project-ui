import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";
import "./no-page-found.css";

const NoPageFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        background:
          "linear-gradient(98.5deg,#00f0ff -46.16%,#7367ff 42.64%,#963cff 70.3%)",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Grid className="no-page-found">
        <img src="/404robot.svg" alt="" style={{ width: "250px" }} />
        <Typography variant="h5">Oops! Page not found.</Typography>
        <Button variant="contained" sx={{ m: 1 }} onClick={() => navigate("/")}>
          go back to home page
        </Button>
      </Grid>
    </Box>
  );
};

export default NoPageFound;
