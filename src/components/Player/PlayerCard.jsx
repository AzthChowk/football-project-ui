import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const PlayerCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Grid
        sx={{
          margin: 1,

          borderRadius: "15px",
          border: "1px solid #D0E7D2",
        }}
      >
        <Grid
          sx={{
            height: "250px",
            backgroundColor: "#D0E7D2",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <img
            src={props.playerImageUrl}
            alt={props.firstName}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          sx={{
            backgroundColor: "#008849",
            color: "#fff",
            padding: "5px 20px",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Box
              sx={{ marginRight: "10px", borderBottom: "2px solid #F5FCCD" }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Antonio!important",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#F5FCCD",
                  opacity: "0.75",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
              >
                {props.jerseyNumber}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Antonio!important",
                  fontWeight: 300,
                  textTransform: "uppercase",
                }}
              >
                {props.firstName + " " + props.middleName}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Antonio!important",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {props.lastName}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "11pt", marginTop: 1 }}>
            Nationality : {props.nationality}
          </Typography>
          <Typography sx={{ fontSize: "11pt" }}>
            Position : {props.position}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlayerCard;
