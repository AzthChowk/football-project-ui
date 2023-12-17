import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getResults } from "../../../lib/apis/results-apis";
import ResultListCard from "./ResultListCard";

const ResultList = () => {
  const userRole = localStorage.getItem("userRole");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // const { isLoading, isError, error, data } = useQuery({
  //   queryKey: ["fixtures-list"],
  //   queryFn: () => getFixtureList(),
  // });
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["result-list"],
    queryFn: () => getResults(),
  });
  const ds = data?.data?.filter((item, index) => {
    if (item.matchStage === "Semi-Final") {
      return item;
    }
  });
  console.log(ds);
  const fs = data?.data?.filter((item, index) => {
    if (item.matchStage === "Final") {
      return item;
    }
  });
  console.log(fs);
  return (
    <>
      <div>
        <h4 style={{ padding: "10px" }}>Group Stage</h4>
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
            if (item.matchStage === "Group Stage") {
              return (
                <div key={index} style={{ margin: "5px" }}>
                  <ResultListCard
                    matchNumber={item.matchNumber}
                    date={item.date}
                    opponentOneName={item.opponentOneName}
                    opponentOneGoalScore={item.opponentOneGoalScore}
                    opponentTwoName={item.opponentTwoName}
                    opponentTwoGoalScore={item.opponentTwoGoalScore}
                    time={item.time}
                    playground={item.playGround}
                    imageOne={item.opponentOneLogo}
                    imageTwo={item.opponentTwoLogo}
                  />
                </div>
              );
            }
          })}
        </Grid>
      </div>

      <div>
        <h4 style={{ padding: "10px" }}>Semi-Final</h4>
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
          {ds ? (
            <>
              {ds?.map((item, index) => {
                if (item.matchStage === "Semi-Final") {
                  return (
                    <div key={index} style={{ margin: "5px" }}>
                      <ResultListCard
                        matchNumber={item.matchNumber}
                        date={item.date}
                        opponentOneName={item.opponentOneName}
                        opponentOneGoalScore={item.opponentOneGoalScore}
                        opponentTwoName={item.opponentTwoName}
                        opponentTwoGoalScore={item.opponentTwoGoalScore}
                        time={item.time}
                        playground={item.playGround}
                        imageOne={item.opponentOneLogo}
                        imageTwo={item.opponentTwoLogo}
                      />
                    </div>
                  );
                }
              })}
            </>
          ) : (
            <>
              <h2>No data</h2>
            </>
          )}
        </Grid>
      </div>
      <div>
        <h4 style={{ padding: "10px" }}>Final</h4>
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
          {fs?.length > 0 ? (
            <>
              {fs?.map((item, index) => {
                if (item.matchStage === "Final") {
                  return (
                    <div key={index} style={{ margin: "5px" }}>
                      <ResultListCard
                        matchNumber={item.matchNumber}
                        date={item.date}
                        opponentOneName={item.opponentOneName}
                        opponentOneGoalScore={item.opponentOneGoalScore}
                        opponentTwoName={item.opponentTwoName}
                        opponentTwoGoalScore={item.opponentTwoGoalScore}
                        time={item.time}
                        playground={item.playGround}
                        imageOne={item.opponentOneLogo}
                        imageTwo={item.opponentTwoLogo}
                      />
                    </div>
                  );
                }
              })}
            </>
          ) : (
            <>
              <div style={{ margin: "5px" }}>
                <ResultListCard
                  matchNumber="XX"
                  date="XX"
                  opponentOneName="XXX"
                  opponentOneGoalScore="X"
                  opponentTwoName="XXX"
                  opponentTwoGoalScore="X"
                  time="XX"
                  playground="XX"
                />
              </div>
            </>
          )}
        </Grid>
      </div>
    </>
  );
};

export default ResultList;
