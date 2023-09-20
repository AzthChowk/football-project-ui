import React from "react";
import TeamCard from "../../components/Team/TeamCard";
import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import "../../styles/teams.css";
import { getTeamsList } from "../../../lib/apis/teams-apis";

const Teams = () => {
  const { data } = useQuery({
    queryKey: ["team-details"],
    queryFn: () => getTeamsList(),
  });
  console.log(data?.data);
  return (
    <Box className="container teams-page">
      <Typography variant="h4" sx={{ padding: "20px 0", fontWeight: 700 }}>
        Teams
      </Typography>

      <Grid className="team-grid">
        {data?.data.map((item, index) => {
          return (
            <Grid key={index}>
              <TeamCard {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Teams;
