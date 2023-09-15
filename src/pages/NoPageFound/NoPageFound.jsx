import React from "react";
import { Box, Typography } from "@mui/material";

const NoPageFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(45deg, #37003C, #001261)",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h6">OOPS! PAGE NOT FOUND.</Typography>
    </Box>
  );
};

export default NoPageFound;
