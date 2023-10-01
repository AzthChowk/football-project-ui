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
    <Box className="container" sx={{ padding: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 900, padding: "20px 0" }}>
        Fixture
      </Typography>
      {data?.data.map((item, index) => {
        return <FixtureCard key={index} {...item} />;
      })}
    </Box>
  );
};

export default FixturePage;
