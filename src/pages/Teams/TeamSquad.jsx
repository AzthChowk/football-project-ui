import React from "react";
import { useQuery } from "react-query";
import { getTeamSquad } from "../../../lib/apis/teams-apis";
import PlayerCard from "../../components/Player/PlayerCard";
import { Box, Grid } from "@mui/material";

const TeamSquad = (props) => {
  const { data } = useQuery({
    queryKey: ["teams-squad-list"],
    queryFn: () => getTeamSquad(props.tId),
  });
  return (
    <Grid container>
      {data?.data?.map((item, index) => {
        return <PlayerCard {...item} />;
      })}
    </Grid>
  );
};

export default TeamSquad;
