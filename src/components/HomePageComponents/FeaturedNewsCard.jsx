import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const FeaturedNewsCard = ({ newsTitle, newsImgUrl, newsHighlights }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={8} xl={8} sx={{ padding: 1 }}>
          <img
            src={newsImgUrl}
            alt=""
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} sx={{ padding: 1 }}>
          <Typography sx={{ fontWeight: 700, textTransform: "uppercase" }}>
            Featured News
          </Typography>
          <Typography sx={{ margin: "10px 0", fontWeight: 900 }}>
            {newsTitle.slice(0, 60)}..
          </Typography>
          <Typography>{newsHighlights.slice(0, 200)}</Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#37003c", margin: "10px 0" }}
          >
            Read More..
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedNewsCard;
