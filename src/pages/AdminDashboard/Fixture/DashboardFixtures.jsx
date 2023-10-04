import { Divider, Typography } from "@mui/material";
import React from "react";
import FixtureSummary from "./FixtureSummary";
import FixtureCreate from "./FixtureCreate";
import FixtureListTable from "../../../components/Fixture/FixtureListTable";

const DashboardFixtures = () => {
  return (
    <>
      <FixtureSummary />
      <Divider />
      <FixtureCreate />
      <Divider />
      <Typography variant="h6" sx={{ padding: "10px", fontWeight: 700 }}>
        Fixtures
      </Typography>
      <FixtureListTable />
    </>
  );
};

export default DashboardFixtures;
