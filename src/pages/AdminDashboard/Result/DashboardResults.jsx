import { Divider } from "@mui/material";
import React from "react";
import ResultCreate from "./ResultCreate";
import ResultDashboardList from "./ResultDashboardList";
import ResultSummary from "./ResultSummary";

const DashboardResults = () => {
  return (
    <>
      <ResultSummary />
      <Divider />
      <ResultCreate />
      <Divider />
      <ResultDashboardList />
    </>
  );
};

export default DashboardResults;
