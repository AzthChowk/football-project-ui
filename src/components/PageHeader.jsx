import { Typography } from "@mui/material";
import React from "react";

const PageHeader = (props) => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        padding: "20px 10px",
      }}
    >
      {props.title}
    </Typography>
  );
};

export default PageHeader;
