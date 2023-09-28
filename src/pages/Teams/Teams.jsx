import React from "react";
import TeamCard from "../../components/Team/TeamCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import "../../styles/teams.css";
import { getTeamsList } from "../../../lib/apis/teams-apis";

const Teams = () => {
  const { data } = useQuery({
    queryKey: ["all-teams"],
    queryFn: () => getTeamsList(),
  });

  return (
    <Box className="container">
      <Typography variant="h4" sx={{ padding: "20px 0", fontWeight: 700 }}>
        Teams
      </Typography>

      <Grid container sx={{ textAlign: "center", display: "flex" }}>
        {data?.data.map((item, index) => {
          return <TeamCard {...item} key={item._id} />;
        })}
      </Grid>
    </Box>
  );
};

export default Teams;
