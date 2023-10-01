import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { getPlayersList } from "../../../lib/apis/players-apis";
import "./players-display-page.css";
import { useQuery } from "react-query";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const { data } = useQuery({
    queryKey: ["all-players"],
    queryFn: () => getPlayersList(),
  });

  // ========table from mui ============
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1450A3",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box className="container players-display-page">
      <Grid
        container
        sx={{
          marginTop: { xs: 0, sm: 0, md: 5, lg: 5 },
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" sx={{ fontWeight: 900, padding: "10px" }}>
            Players
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="search"
            name="search"
            sx={{ width: "300px", padding: "0 10px" }}
          />
          <Button variant="contained" sx={{ padding: 2 }}>
            Search
          </Button>
        </Grid>
      </Grid>
      {/* ================| PLAYERS TABLE |===================== */}
      <Box className="players-display-table" sx={{ padding: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Position</StyledTableCell>
                <StyledTableCell align="left">Nationality</StyledTableCell>
                <StyledTableCell align="left">DOB</StyledTableCell>
                <StyledTableCell align="left">Current Club</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data?.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell>
                    <img src={item.playerImageUrl} alt="" />
                  </StyledTableCell>
                  <StyledTableCell>
                    <h3>{item.fullName}</h3>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.position}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.nationality}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.dob.split("T")[0]}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.clubName}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Players;
