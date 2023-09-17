import React from "react";
import { Grid, Typography } from "@mui/material";
import SummaryCard from "../SummaryCard";

const ResultSummary = () => {
  return (
    <Grid container sx={{ display: "flex", padding: "10px", gap: "10px" }}>
      <SummaryCard title="Total Matches" count="100" />
    </Grid>
  );
};

export default ResultSummary;
