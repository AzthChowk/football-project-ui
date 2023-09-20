import { Grid, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const NewsCard = ({
  _id,
  newsTitle,
  newsAuthor,
  fullNews,
  newsHighlights,
  isFeaturedNews,
  newsImgUrl,
  category,
  tags,
  addedDate,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: "10px" }}>
      <img
        src={newsImgUrl}
        alt=""
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <Typography sx={{ fontWeight: 700, textTransform: "capitalize" }}>
        {newsTitle.slice(0, 50)}
      </Typography>

      <Typography sx={{ fontSize: "10pt" }}>
        {addedDate.split("T")[0]}
      </Typography>
      <Typography sx={{ padding: "5px 0" }}>
        {newsHighlights.slice(0, 100)}
      </Typography>
    </Grid>
  );
};

export default NewsCard;
