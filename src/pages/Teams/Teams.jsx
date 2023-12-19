import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getTeamsList } from "../../../lib/apis/teams-apis";
import "../../styles/teams.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const Teams = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["all-teams"],
    queryFn: () => getTeamsList(),
  });

  return (
    <Box className="container">
      <PageHeader title="Teams" />

      <Grid container>
        {data?.data.map((item, index) => {
          return (
            <Grid
              item
              key={item._id}
              xs={6}
              sm={4}
              md={3}
              lg={3}
              xl={2}
              sx={{
                padding: 1,

                // borderBottom: "4px solid #008849",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  padding: 2,
                }}
              >
                <Link to={`/teams/${item._id}`}>
                  <img
                    src={item.teamLogo}
                    alt={item.teamName}
                    style={{
                      width: "75px",
                      height: "75px",
                    }}
                  />
                  <Typography>{item.teamName}</Typography>
                </Link>

                {/* <button
                  variant="outlined"
                  onClick={() => navigate(`/teams/${item._id}`)}
                >
                  Read more
                </button> */}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Teams;
