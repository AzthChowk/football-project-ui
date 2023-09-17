import { Grid, Typography } from "@mui/material";
import React from "react";
import "./news-card.css";

import { useQuery } from "react-query";
import { getAllNews } from "../../../lib/apis/news-apis";
import { Link } from "react-router-dom";

const NewsCard = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["all-news"],
    queryFn: () => getAllNews(),
    onError: (error) => {
      console.log("Error");
    },
  });

  return (
    <>
      {data?.data?.map(
        ({
          _id,
          newsTitle,
          newsAuthor,
          fullNews,
          newsHighlights,
          isFeaturedNews,
          newsImgUrl,
          category,
          tags,
          addedDate,
        }) => {
          return (
            <Grid
              key={_id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{ padding: "10px" }}
            >
              <Grid>
                <Link to={_id}>
                  <img
                    src={newsImgUrl}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item sx={{ padding: 1 }}>
                <Link to={_id}>
                  <Typography
                    sx={{ fontWeight: 700, textTransform: "capitalize" }}
                  >
                    {newsTitle.slice(0, 50)}
                  </Typography>
                </Link>

                <Typography sx={{ fontSize: "10pt" }}>
                  Author : {newsAuthor}
                </Typography>
                <Typography sx={{ fontSize: "10pt" }}>
                  {addedDate.split("T")[0]}
                </Typography>
                <Typography sx={{ padding: "5px 0" }}>
                  {newsHighlights.slice(0, 100)}
                </Typography>

                {/* <p>{fullNews}</p> */}
                {/* <p>Category : {category}</p>
                <p>Tags : {tags}</p> */}
              </Grid>
            </Grid>
          );
        }
      )}
    </>
  );
};

export default NewsCard;
