import React, { useEffect, useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
        borderRadius: "5px",
        padding: 2,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}
    >
      <img
        src={teamLogo}
        alt={teamName}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: 700, padding: 1 }}>{teamName}</Typography>

        <Button onClick={() => navigate(`/teams/${_id}`)}>
          <ArrowRightAltIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default TeamCard;
