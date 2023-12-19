import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LatestNewsCard = ({ _id, newsImgUrl, newsTitle, newsHighlights }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={3}
      xl={3}
      sx={{ paddingRight: "10px" }}
    >
      <Link to={`news/${_id}`}>
        <img
          src={newsImgUrl}
          alt=""
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "2px",
          }}
        />
      </Link>
      <Link to={`news/${_id}`}>
        <Typography sx={{ fontWeight: 700, padding: "5px 0" }}>
          {newsTitle.slice(0, 50)}..
        </Typography>
      </Link>

      <Typography sx={{ fontSize: "11pt" }}>
        {newsHighlights.slice(0, 100)}..
      </Typography>
    </Grid>
  );
};

export default LatestNewsCard;
