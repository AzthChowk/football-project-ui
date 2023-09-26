import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const FixtureCard = ({
  _id,
  matchNumber,
  opponentOneName,
  opponentTwoName,
  time,
  date,
  playGround,
  opponentOneLogo,
  opponentTwoLogo,
}) => {
  const resultData = useSelector((state) => state.result);

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "flex",
          lg: "flex",
          xl: "flex",
        },
        justifyContent: "space-between",
        backgroundColor: "#F6F1F1",
        padding: 1,
        alignItems: "center",
        borderRadius: "5px",
        margin: 1,
        color: "#37003c",
        "&:hover": {
          backgroundColor: "#451952",
          cursor: "pointer",
          color: "#fff",
        },
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {opponentOneName}
          <img
            src={opponentOneLogo}
            alt=""
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              verticalAlign: "middle",
              margin: " 0 10px ",
            }}
          />
        </Typography>
        <Typography
          sx={{
            margin: "10px 30px",
            padding: "5px 20px",
            fontWeight: 700,
            border: "1px solid",
            borderRadius: "5px",
          }}
        >
          {resultData.isMatchFinished === true ? (
            <>{resultData.value}</>
          ) : (
            <>{(+time / 100).toPrecision(4)}</>
          )}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          <img
            src={opponentTwoLogo}
            alt=""
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              verticalAlign: "middle",
              margin: " 0 10px ",
            }}
          />

          {opponentTwoName}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
        }}
      >
        <Typography variant="h6" sx={{ padding: "0 20px", fontWeight: 500 }}>
          Match No. - {matchNumber}
        </Typography>

        <Typography sx={{ padding: "0 20px", fontWeight: 700 }}>
          {date.split("T")[0]} ( {playGround} )
        </Typography>
      </Box>
    </Box>
  );
};

export default FixtureCard;
