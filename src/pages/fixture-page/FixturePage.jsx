import { Box, Typography } from "@mui/material";
import React from "react";
import FixtureListTable from "../../components/Fixture/FixtureListTable";
import PageHeader from "../../components/PageHeader";

const FixturePage = () => {
  return (
    <Box className="container" sx={{ padding: 1 }}>
      <PageHeader title="Fixtures" />

      {/* <FixtureList /> */}
      <FixtureListTable />
    </Box>
  );
};

export default FixturePage;
