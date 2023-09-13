import { Box, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getFeaturedNews } from "../../../lib/apis/news-apis";
import FeaturedNewsCard from "./FeaturedNewsCard";

const FeaturedNews = () => {
  // latest news

  const { data: featuredNewsData } = useQuery({
    queryKey: ["featured-news"],
    queryFn: () => getFeaturedNews(),
  });
  console.log(featuredNewsData?.data);
  return (
    <Box>
      <Grid container spacing={0.25}>
        {featuredNewsData?.data?.map((item, index) => {
          return <FeaturedNewsCard key={index} {...item} />;
        })}
      </Grid>
    </Box>
  );
};

export default FeaturedNews;
