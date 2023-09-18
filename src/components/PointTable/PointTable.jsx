import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const PointTable = () => {
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
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>1</TableCell>
            <TableCell>United FC</TableCell>
            <TableCell align="center">2</TableCell>

            <TableCell align="center">2</TableCell>
            <TableCell align="center">6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PointTable;
