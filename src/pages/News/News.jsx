import React from "react";
import NewsCard from "../../components/News/NewsCard";
import "./news.css";
import { Link } from "react-router-dom";
import { Box, Grid, TextField, Typography } from "@mui/material";

const News = () => {
  return (
    <Box className="container news-page" sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          News
        </Typography>
        {/* <Link to="/news/add">Add News</Link> */}
        <TextField placeholder="Search news"></TextField>
      </Box>

      {/* //newsCard */}
      <Grid container>
        <NewsCard />
      </Grid>
    </Box>
  );
};

export default News;
