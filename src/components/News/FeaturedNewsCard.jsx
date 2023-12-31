import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const FeaturedNewsCard = ({ _id, newsTitle, newsImgUrl, newsHighlights }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={12} lg={8} xl={8} sx={{ padding: 1 }}>
          <Link to={`/news/${_id}`}>
            <img
              src={newsImgUrl}
              alt=""
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "2px",
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={4} xl={4} sx={{ padding: 1 }}>
          <Typography sx={{ fontWeight: 700, textTransform: "uppercase" }}>
            Featured News
          </Typography>
          <Typography sx={{ margin: "10px 0", fontWeight: 700 }}>
            {newsTitle.slice(0, 60)}..
          </Typography>
          <Typography sx={{ fontSize: "11pt" }}>
            {newsHighlights.slice(0, 200)}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(`/news/${_id}`)}
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
