import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { randomId } from "../../utils/utils";

const UpcomingMatchesCard = ({
  matchNumber,
  time,
  date,
  playGround,
  opponentOneName,
  opponentTwoName,
  opponentOneLogo,
  opponentTwoLogo,
}) => {
  const uniqueId = randomId();
  return (
    <Grid
      item
      key={uniqueId}
      sx={{
        textAlign: "center",
        width: "100%",
        "&:hover": {
          background:
            "linear-gradient(98.5deg,#05f0ff -46.16%,#7367ff 42.64%,#963cff 70.3%)",
          cursor: "pointer",
          color: "#fff",
        },
        borderRadius: "10px",
        padding: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          textTransform: "uppercase",
          fontSize: "12pt",
          padding: 1,
        }}
      >
        <img
          src={opponentOneLogo}
          alt=""
          style={{ width: "25px", verticalAlign: "middle", margin: "10px" }}
        />
        {opponentOneName} Vs
        <img
          src={opponentTwoLogo}
          alt=""
          style={{ width: "25px", verticalAlign: "middle", margin: "10px" }}
        />{" "}
        {opponentTwoName}
      </Typography>
      <Typography sx={{ fontWeight: 700 }}>
        {date.split("T")[0]} | GMT - {time}
      </Typography>
      <Typography sx={{ fontSize: "10pt" }}>{playGround}</Typography>
      <Divider variant="middle" sx={{ width: "25%", margin: "auto" }} />
    </Grid>
  );
};

export default UpcomingMatchesCard;
