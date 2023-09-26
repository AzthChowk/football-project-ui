import React from "react";
import { Box, Grid } from "@mui/material";
import { getLatestNews } from "../../../lib/apis/news-apis";
import { useQuery } from "react-query";
import LatestNewsCardSingle from "./LatestNewsCardSingle";

const LatestNews = () => {
  // latest news

  const { data: latestNewsData } = useQuery({
    queryKey: ["latest-news"],
    queryFn: () => getLatestNews(),
  });

  return (
    <Grid container>
      {latestNewsData?.data?.map((item, index) => {
        return <LatestNewsCardSingle key={index} {...item} />;
      })}
    </Grid>
  );
};

export default LatestNews;
