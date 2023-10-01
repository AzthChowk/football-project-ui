import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TeamCard = ({
  _id,
  teamLogo,
  teamName,
  address,
  url,
  manager,
  coach,
}) => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      sx={{
        textAlign: "center",
        borderRadius: "5px",
        padding: "10px",

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
      <Button variant="contained" onClick={() => navigate(`/teams/${_id}`)}>
        View details
      </Button>
    </Grid>
  );
};

export default TeamCard;
