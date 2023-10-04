import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getTeamsList } from "../../../lib/apis/teams-apis";
import "../../styles/teams.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["all-teams"],
    queryFn: () => getTeamsList(),
  });

  return (
    <Box className="container">
      <Typography variant="h4" sx={{ fontWeight: 900, padding: "20px 0" }}>
        Teams
      </Typography>

      <Grid container>
        {data?.data.map((item, index) => {
          return (
            <Grid
              item
              key={item._id}
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
                // borderBottom: "4px solid #008849",
              }}
            >
              <img
                src={item.teamLogo}
                alt={item.teamName}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 700, padding: 1 }}>
                  {item.teamName}
                </Typography>

                <Button
                  variant="outlined"
                  onClick={() => navigate(`/teams/${item._id}`)}
                >
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Teams;
