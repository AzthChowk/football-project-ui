import React from "react";
import { useQuery } from "react-query";

import { getFixtureList } from "../../../lib/apis/fixtures-apis";
import FixtureListCard from "./FixtureListCard";
import { Grid } from "@mui/material";

const FixtureList = () => {
  const userRole = localStorage.getItem("userRole");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["fixtures-list"],
    queryFn: () => getFixtureList(),
  });
  console.log(data);
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1dr",
          sm: "1fr 1fr ",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr",
        },
      }}
    >
      {data?.data?.map((item, index) => {
        return (
          <div key={index} style={{ margin: "5px" }}>
            <FixtureListCard
              matchNumber={item.matchNumber}
              date={item.date}
              opponentOneName={item.opponentOneName}
              opponentTwoName={item.opponentTwoName}
              time={item.time}
              playground={item.playGround}
              image={item.opponentOneLogo}
              imageOne={item.opponentOneLogo}
              imageTwo={item.opponentTwoLogo}
            />
          </div>
        );
      })}
    </Grid>
  );
};

export default FixtureList;
