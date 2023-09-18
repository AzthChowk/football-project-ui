import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const LatestNewsCard = ({ newsImgUrl, newsTitle, newsHighlights }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ padding: 1 }}>
      <Grid>
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
      </Grid>
      <Grid sx={{ padding: 0.25 }}>
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
    </Grid>
  );
};

export default LatestNewsCard;
