import { Grid, Typography } from "@mui/material";
import React from "react";

import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { getFullNews } from "../../../lib/apis/news-apis";
import NewsFullDetails from "../../components/News/NewsFullDetails";
import LatestNewsSingle from "../../components/News/LatestNewsSingle";

const NewsFullDetailsPage = () => {
  const params = useParams();
  const newsId = params.id;
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["full-news"],
    queryFn: () => getFullNews(newsId),
    onError: (error) => {},
  });
  console.log(data);
  return (
    <Grid container className="container" sx={{ padding: 2 }}>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ padding: 1 }}>
        <NewsFullDetails {...data} />
        <Tooltip title="Share">
          <IconButton>
            <ShareIcon fontSize="medium" color="success" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ padding: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, padding: 1 }}>
          Latest News
        </Typography>
        <LatestNewsSingle />
      </Grid>
    </Grid>
  );
};

export default NewsFullDetailsPage;
