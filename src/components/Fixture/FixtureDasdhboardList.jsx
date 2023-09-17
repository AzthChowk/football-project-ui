import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getFixtureList } from "../../../lib/apis/fixtures-apis";
import FixtureCard from "./FixtureCard";

const FixtureDashboardList = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["fixtures-list"],
    queryFn: () => getFixtureList(),
  });
  return (
    <Box sx={{ paddingRight: 2 }}>
      <Typography variant="h6" sx={{ padding: "10px", fontWeight: 700 }}>
        Fixtures
      </Typography>
      {data?.data.map((item, index) => {
        return (
          <Box key={index}>
            <FixtureCard {...item} />
          </Box>
        );
      })}
    </Box>
  );
};

export default FixtureDashboardList;
