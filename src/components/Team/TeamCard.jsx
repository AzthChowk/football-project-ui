import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import { Grid } from "@mui/material";

const TeamCard = ({ teamLogo, teamName, address, url, manager, coach }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        sx={{
          textAlign: "center",
          padding: 2,
          margin: 2,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, textAlign: "center", padding: 1 }}
        >
          {teamName}
        </Typography>

        <img
          src={teamLogo}
          alt={teamName}
          style={{
            width: "70%",
            height: "250px",
            objectFit: "contain",
          }}
        />

        <Typography>Address: {address}</Typography>
        <Typography>Website : {url}</Typography>
        <Typography>Manager : {manager}</Typography>
        <Typography>Coach : {coach}</Typography>
      </Grid>
    </>
  );
};

export default TeamCard;
