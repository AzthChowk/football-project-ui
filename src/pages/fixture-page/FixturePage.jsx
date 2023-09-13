import React from "react";
import FixtureCard from "../../components/Fixture/FixtureCard";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getFixtureList } from "../../../lib/apis/fixtures-apis";

const FixturePage = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["fixtures-list"],
    queryFn: () => getFixtureList(),
  });
  return (
    <Box className="container">
      <Typography variant="h2" sx={{ margin: 2 }}>
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

export default FixturePage;
