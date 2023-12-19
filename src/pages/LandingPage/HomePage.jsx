import React, { useState } from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import { useQuery } from "react-query";

//
import FeaturedNews from "../../components/News/FeaturedNews";
import UpcomingMatchesCard from "../../components/Fixture/UpcomingMatchesCard";
import { getUpcomingMatchesList } from "../../../lib/apis/fixtures-apis";
import { randomId } from "../../utils/utils";
import LatestNews from "../../components/News/LatestNews";
import { getLatestNews } from "../../../lib/apis/news-apis";
import PointTable from "../../components/PointTable/SummaryPointTable";

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
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8} sx={{ p: 1 }}>
          <Grid>
            <FeaturedNews />
          </Grid>
          <Divider sx={{ m: 1 }} />
          <Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, padding: "10px 0" }}
              >
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

                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, padding: "10px 0" }}
              >
                Communities
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>See all</Typography>
            </Grid>
            <LatestNews />
          </Grid>
        </Grid>

        {/* ============ right section matches============== */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} sx={{ p: 1 }}>
          <Grid sx={{ border: "1px solid #000", borderRadius: "2px", mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 500,
                p: 1,
                textAlign: "center",
                textTransform: "uppercase",
                borderRadius: "2px 2px 0 0",
                backgroundColor: "#000",
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
              borderRadius: "2px",
              padding: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 600,
                p: 1,
                textAlign: "center",
                textTransform: "uppercase",
                backgroundColor: "#000",
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
