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
          backgroundColor: "#DDE6ED",
        },

        padding: 1,
      }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>
          <h1>{time}</h1>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "5px",
            }}
          >
            <img
              src={opponentOneLogo}
              alt=""
              style={{ width: "25px", objectFit: "contain" }}
            />
            <h4 style={{ fontWeight: "500", paddingLeft: "10px" }}>
              {opponentOneName}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "5px",
            }}
          >
            <img
              src={opponentTwoLogo}
              alt=""
              style={{ width: "25px", objectFit: "contain" }}
            />
            <h4 style={{ fontWeight: "500", paddingLeft: "10px" }}>
              {opponentTwoName}
            </h4>
          </div>
        </div>
      </div> */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "45%" }}>
            <img
              src={opponentOneLogo}
              alt=""
              style={{ width: "25px", verticalAlign: "middle", margin: "1px" }}
            />
            <h4 style={{ fontWeight: "500" }}>
              {opponentOneName.split(" ")[0]} {opponentOneName.split(" ")[1]}
            </h4>
          </div>
          <div style={{ width: "10%" }}>vs</div>
          <div style={{ width: "45%" }}>
            <img
              src={opponentTwoLogo}
              alt=""
              style={{ width: "25px", verticalAlign: "middle", margin: "1px" }}
            />
            <h4 style={{ fontWeight: "500" }}>
              {opponentTwoName.split(" ")[0]} {opponentTwoName.split(" ")[1]}
            </h4>
          </div>
        </div>
        <p style={{ fontSize: "10pt" }}>
          {date.split("T")[0]} | GMT - {time}
        </p>
      </div>
    </Grid>
  );
};

export default UpcomingMatchesCard;
