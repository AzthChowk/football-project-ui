import { Box, Typography } from "@mui/material";
import React from "react";
import FixtureListTable from "../../components/Fixture/FixtureListTable";

const FixturePage = () => {
  return (
    <Box className="container" sx={{ padding: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 900, padding: "20px 0" }}>
        Fixture
      </Typography>
      <FixtureListTable />
    </Box>
  );
};

export default FixturePage;
