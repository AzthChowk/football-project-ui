import React from "react";
import NewsAddForm from "../../components/News/NewsAddForm";
import { Typography, Box, Grid } from "@mui/material";

const AddNews = () => {
  return (
    <Grid sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Add News
      </Typography>
      <NewsAddForm />
    </Grid>
  );
};

export default AddNews;
