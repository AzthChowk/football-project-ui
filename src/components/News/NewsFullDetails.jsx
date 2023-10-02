import { Typography } from "@mui/material";
import React from "react";

const NewsFullDetails = (props) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          paddingBottom: 1,
          textTransform: "uppercase",
          padding: "20px 0",
        }}
      >
        {props?.data?.newsTitle}
      </Typography>

      <img src={props?.data?.newsImgUrl} alt="" style={{ width: "100%" }} />
      <Typography sx={{ fontWeight: 700 }}>
        {props?.data?.newsAuthor} | {props?.data?.addedDate}
      </Typography>
      <Typography sx={{ padding: "10px 0" }}>
        {props?.data?.fullNews}
      </Typography>
    </>
  );
};

export default NewsFullDetails;
