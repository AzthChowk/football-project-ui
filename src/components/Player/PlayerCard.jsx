import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const PlayerCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Grid
        sx={{
          margin: 1,
          padding: 2,
          border: "1px solid #F1EFEF",
          borderRadius: "10px",
          backgroundColor: "#D0E7D2",
        }}
      >
        <img
          src={props.playerImageUrl}
          alt={props.firstName}
          style={{ width: "100%", height: "250px", objectFit: "contain" }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Antonio!important",
                fontWeight: 500,
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
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Antonio!important",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#26577C",
                opacity: "0.75",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {props.jerseyNumber}
            </Typography>
          </Box>
        </Box>
        <Typography>Nationality : {props.nationality}</Typography>
        <Typography>Position : {props.position}</Typography>
      </Grid>
    </Grid>
  );
};

export default PlayerCard;
