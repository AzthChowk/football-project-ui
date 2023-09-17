import { Divider } from "@mui/material";
import React from "react";
import FixtureCreate from "../../components/Fixture/FixtureCreate";
import FixtureDashboardList from "../../components/Fixture/FixtureDasdhboardList";
import FixtureSummary from "../../components/Fixture/FixtureSummary";

const DashboardFixtures = () => {
  return (
    <>
      <FixtureSummary />
      <Divider />
      <FixtureCreate />
      <Divider />
      <FixtureDashboardList />
    </>
  );
};

export default DashboardFixtures;
