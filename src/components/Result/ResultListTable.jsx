import { Box, Typography } from "@mui/material";
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

const ResultListTable = () => {
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
  return (
    <Box sx={{ paddingRight: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }} align="center">
                Match number
              </TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Matches</TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="center">
                Match stage
              </TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="center">
                Time
              </TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="center">
                Date
              </TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="center">
                Playground
              </TableCell>
              {userRole === "Administrator" && isLoggedIn ? (
                <TableCell sx={{ fontWeight: 900 }} align="center">
                  Action
                </TableCell>
              ) : (
                <></>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((item, index) => {
              return (
                <TableRow
                  key={item._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="center">{item.matchNumber}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.opponentOneLogo}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <Typography sx={{ fontWeight: 700, padding: 1 }}>
                      {item.opponentOneName}
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "green",
                        padding: "5px 20px",
                        borderRadius: "10px",
                        color: "#fff",
                        fontWeight: 900,
                        margin: "0 10px",
                      }}
                    >
                      {item.opponentOneGoalScore} - {item.opponentTwoGoalScore}
                    </Typography>

                    <img
                      src={item.opponentTwoLogo}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <Typography sx={{ fontWeight: 700, padding: 1 }}>
                      {item.opponentTwoName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{item.matchStage}</TableCell>
                  <TableCell align="center">{item.time}</TableCell>
                  <TableCell align="center">
                    {item.date.split("T")[0]}
                  </TableCell>
                  <TableCell align="center">{item.playGround}</TableCell>
                  {userRole === "Administrator" && isLoggedIn ? (
                    <TableCell align="center">Edit Delete</TableCell>
                  ) : (
                    <></>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResultListTable;
