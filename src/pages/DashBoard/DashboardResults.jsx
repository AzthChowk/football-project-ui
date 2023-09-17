import React from "react";
import { Box, Divider } from "@mui/material";
import ResultSummary from "../../components/Result/ResultSummary";
import ResultCreate from "../../components/Result/ResultCreate";
import Result from "../../pages/Result/Result";
import ResultDashboardList from "../../components/Result/ResultDashboardList";

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
