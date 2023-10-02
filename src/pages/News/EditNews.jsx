import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import NewsEditForm from "../../components/News/NewsEditForm";

const EditNews = () => {
  return (
    <Grid sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Edit News
      </Typography>
      <NewsEditForm />
    </Grid>
  );
};

export default EditNews;
