import React, { useState } from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import { useQuery } from "react-query";

//
import FeaturedNews from "../../components/HomePageComponents/FeaturedNews";
import UpcomingMatchesCard from "../../components/HomePageComponents/UpcomingMatchesCard";
import { getUpcomingMatchesList } from "../../../lib/apis/fixtures-apis";
import { randomId } from "../../utils/utils";
import LatestNews from "../../components/HomePageComponents/LatestNews";
import { getLatestNews } from "../../../lib/apis/news-apis";
import PointTable from "../../components/HomePageComponents/PointTable";

const HomePage = () => {
  const [upComingMatches, setUpComingMatches] = useState([]);

  const uniqueId = randomId();

  // upcoming matches
  const {
    isLoading,
    isError,
    error,
    data: upcomingMatchesData,
  } = useQuery({
    queryKey: ["upcoming-matches-list"],
    queryFn: () => getUpcomingMatchesList(),
  });

  return (
    <Box className="container" sx={{ padding: 1 }}>
      <Grid container sx={{ padding: "10px" }}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ p: 2 }}>
          <Grid>
            <FeaturedNews />
          </Grid>
          <Divider sx={{ m: 1 }} />
          <Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Latest News
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>See all</Typography>
            </Grid>
            <LatestNews />
          </Grid>
          <Divider sx={{ m: 1 }} />
          <Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Communities
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>See all</Typography>
            </Grid>
            <LatestNews />
          </Grid>
        </Grid>

        {/* ============ right section matches============== */}
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ p: 2 }}>
          <Grid
            sx={{ border: "1px solid #37003C", borderRadius: "10px", mb: 4 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#37003c",
                fontWeight: 900,
                p: 2,
                textAlign: "center",
                textTransform: "uppercase",
                borderRadius: "10px",
              }}
            >
              upcoming matches
            </Typography>

            {upcomingMatchesData?.data?.map((item, index) => {
              return <UpcomingMatchesCard key={index} {...item} />;
            })}
            <Button sx={{ width: "100%" }}>See all</Button>
          </Grid>

          {/* ===== point table==== */}
          <Grid
            sx={{
              backgroundColor: "#E4F1FF",
              borderRadius: "10px",
              padding: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 900,
                p: 2,
                textAlign: "center",
                textTransform: "uppercase",
                backgroundColor: "#37003C",
                borderRadius: "10px",
              }}
            >
              Points table
            </Typography>
            <Grid>
              <PointTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
