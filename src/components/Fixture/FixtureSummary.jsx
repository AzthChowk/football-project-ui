import React from "react";
import { Grid, Typography } from "@mui/material";
import SummaryCard from "../SummaryCard";

const FixtureSummary = () => {
  return (
    <Grid container sx={{ display: "flex", padding: "10px", gap: "10px" }}>
      <SummaryCard title="Total Matches" count="20" />
      <SummaryCard title="Completed Matches" count="10" />
      <SummaryCard title="Remaining Matches" count="10" />
    </Grid>
  );
};

export default FixtureSummary;
