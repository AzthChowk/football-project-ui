import { Box, Chip, Typography } from "@mui/material";
import React from "react";

import { useQuery } from "react-query";
import { getFullNews } from "../../../lib/apis/news-apis";
import { useParams } from "react-router-dom";

const NewsFullDetails = () => {
  const params = useParams();
  const newsId = params.id;
  console.log("newsId", newsId);

  const { isLoading, data } = useQuery({
    queryKey: ["full-news"],
    queryFn: () => getFullNews(newsId),
    onError: (error) => {},
  });

  return (
    <Box className="container" sx={{ padding: 2 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 900, padding: "20px 0" }}>
          {data?.data?.newsTitle}
        </Typography>
      </Box>

      <Box>
        <img
          src={data?.data?.newsImgUrl}
          alt=""
          style={{
            width: "100%",

            display: "block",
          }}
        />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 700, padding: "10px 0" }}>
          Author : {data?.data?.newsAuthor}
        </Typography>
        <Typography>{data?.data?.addedDate.split("T")[0]}</Typography>
      </Box>

      {/* <Box>
        <Chip label={data?.data?.tags} variant="outlined" />
      </Box> */}
      <Box>
        <Typography sx={{ padding: "10px 0" }}>
          {data?.data?.fullNews}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsFullDetails;
