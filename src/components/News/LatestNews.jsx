import React from "react";
import { Box, Grid } from "@mui/material";
import { getLatestNews } from "../../../lib/apis/news-apis";
import { useQuery } from "react-query";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  // latest news

  const { data: latestNewsData } = useQuery({
    queryKey: ["latest-news"],
    queryFn: () => getLatestNews(),
  });
  console.log(latestNewsData?.data);
  return (
    <Grid container spacing={0.25}>
      {latestNewsData?.data?.map((item, index) => {
        return <LatestNewsCard key={index} {...item} />;
      })}
    </Grid>
  );
};

export default LatestNews;
