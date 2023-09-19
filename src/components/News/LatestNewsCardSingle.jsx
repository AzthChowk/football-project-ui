import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LatestNewsCard = ({ _id, newsImgUrl, newsTitle, newsHighlights }) => {
  const navigate = useNavigate();
  return (
    <Grid>
      <img
        src={newsImgUrl}
        alt=""
        onClick={() => navigate(`/news/${_id}`)}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />

      <Typography sx={{ fontWeight: 700, padding: "5px 0" }}>
        {newsTitle.slice(0, 50)}..
      </Typography>

      <Typography>{newsHighlights.slice(0, 100)}..</Typography>
    </Grid>
  );
};

export default LatestNewsCard;
