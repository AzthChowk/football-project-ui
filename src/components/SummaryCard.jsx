import { Grid, Typography } from "@mui/material";
import React from "react";

const SummaryCard = (props) => {
  console.log(props);
  return (
    <Grid
      item
      sx={{
        border: "1px solid #999",
        borderRadius: "10px",
        padding: 1,
      }}
    >
      <Typography>{props.title}</Typography>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {props.count}
      </Typography>
    </Grid>
  );
};

export default SummaryCard;
