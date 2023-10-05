import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getPointTable } from "../../../lib/apis/pointtable-apis";
import { Link } from "react-router-dom";

const PointTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["point-table"],
    queryFn: () => getPointTable(),
  });
  console.log(data);

  return (
    <>
      <Box className="container" sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, padding: "20px 0" }}>
          Points Table
        </Typography>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#F1EFEF" }}>
              <TableRow>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Position
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Team name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Played
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Wins
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Draws
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Loss
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    GF
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    GA
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    GD
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 700, padding: "2px" }}>
                    Points
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.length === 0 ? (
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  No data found.
                </Typography>
              ) : (
                <>
                  {data?.data?.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell align="center">{index + 1}</TableCell>

                        <TableCell
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={item.teamLogo}
                            alt=""
                            style={{
                              width: "40px",
                              objectFit: "contain",
                            }}
                          />
                          <Link to={`/teams/${item.teamId}`}>
                            <Typography sx={{ fontWeight: 700 }}>
                              {item.teamName}
                            </Typography>
                          </Link>
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.played}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.win}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.draw}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.loss}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.goalFor}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.goalAgainst}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          {item.goalDifference > 0 ? (
                            <>+{item.goalDifference}</>
                          ) : (
                            <>{item.goalDifference}</>
                          )}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {item.points}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PointTable;
