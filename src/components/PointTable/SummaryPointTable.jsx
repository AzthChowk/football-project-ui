import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import React from "react";
import { useQuery } from "react-query";
import { getPointTable } from "../../../lib/apis/pointtable-apis";

const SummaryPointTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["point-table"],
    queryFn: () => getPointTable(),
  });
  console.log(data?.data);
  return (
    <TableContainer sx={{ width: "100%" }}>
      <Table sx={{ textAlign: "center" }}>
        <TableHead sx={{ fontWeight: 700 }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Rank</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Team</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">
              PLD
            </TableCell>

            <TableCell sx={{ fontWeight: 700 }} align="center">
              GD
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">
              PTS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((item, index) => {
            return (
              <>
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>
                    {item.teamName}
                  </TableCell>
                  <TableCell align="center">{item.played}</TableCell>

                  <TableCell align="center">{item.goalDifference}</TableCell>
                  <TableCell align="center">{item.points}</TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryPointTable;
