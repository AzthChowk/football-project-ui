import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useLayoutEffect } from "react";

const Footer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box sx={{ width: "100%", backgroundColor: "#008849", color: "#fff" }}>
      <Grid
        container
        className="container"
        sx={{
          padding: "20px",
          margin: "auto",
        }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Link to="/">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link to="teams">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              Teams
            </Typography>
          </Link>
          <Link to="players">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              Players
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Link to="fixtures">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              Fixtures
            </Typography>
          </Link>
          <Link to="results">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              Results
            </Typography>
          </Link>
          <Link to="point-table">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              Point Table
            </Typography>
          </Link>
          <Link to="news">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "12pt",
                padding: "5px 40px",
              }}
            >
              News
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "300",
              fontSize: "12pt",
              padding: "5px 40px",
            }}
          >
            Social Media
          </Typography>
          <FacebookIcon fontSize="medium" sx={{ marginLeft: "40px" }} />
          <TwitterIcon fontSize="medium" sx={{ marginLeft: "20px" }} />
          <YouTubeIcon fontSize="medium" sx={{ marginLeft: "20px" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "300",
              fontSize: "12pt",
              padding: "5px 40px",
            }}
          >
            About us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "300",
              fontSize: "12pt",
              padding: "5px 40px",
            }}
          >
            Contacts : +123456789
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",

              fontWeight: "300",
              fontSize: "12pt",
              padding: "5px 40px",
            }}
          >
            Email : email@email.com
          </Typography>
        </Grid>

        <Divider
          sx={{ backgroundColor: "#fff", width: "100%", margin: "20px 0" }}
        />
        <Typography sx={{ fontWeight: "300", padding: "10px 40px" }}>
          &copy; 2023 AzthChowk. All rights reserved.
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
