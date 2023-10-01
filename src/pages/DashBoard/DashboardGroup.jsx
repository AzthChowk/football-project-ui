import { Box, Grid } from "@mui/material";
import React from "react";
import SummaryCard from "../../components/SummaryCard";
import GroupCreate from "../../components/Group/GroupCreate";

const DashboardGroup = () => {
  return (
    <Box sx={{ padding: "10px 0" }}>
      <Grid container sx={{ display: "flex", padding: "10px", gap: "10px" }}>
        <SummaryCard title="Total Groups" count="4" />
      </Grid>
      <GroupCreate />
    </Box>
  );
};

export default DashboardGroup;
