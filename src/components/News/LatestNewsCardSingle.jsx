import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const LatestNewsCard = ({ newsImgUrl, newsTitle, newsHighlights }) => {
  return (
    <Grid item sx={{ padding: 1 }}>
      <img
        src={newsImgUrl}
        alt=""
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
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#37003c",
          margin: "10px 0",
          ":hover": { backgroundColor: "#000" },
        }}
      >
        Read More..
      </Button>
    </Grid>
  );
};

export default LatestNewsCard;
