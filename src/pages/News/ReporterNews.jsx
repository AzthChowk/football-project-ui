import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getReporterNews } from "../../../lib/apis/news-apis";
import NewsCardGrid from "../../components/News/NewsCardGrid";

const ReporterNews = () => {
  const userId = localStorage.getItem("userId");

  const { data } = useQuery({
    queryKey: ["reporter-news"],
    queryFn: () => getReporterNews({ userId }),
  });
  console.log(data);

  return (
    <Grid container sx={{ display: "flex" }}>
      {data?.data?.map((item, index) => {
        return <NewsCardGrid key={item._id} {...item} />;
      })}
    </Grid>
  );
};

export default ReporterNews;
