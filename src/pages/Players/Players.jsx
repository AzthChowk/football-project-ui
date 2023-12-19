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
import PageHeader from "../../components/PageHeader";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const { data } = useQuery({
    queryKey: ["all-players"],
    queryFn: () => getPlayersList(),
  });

  // ========table from mui ============
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000",
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
  const dateToday = new Date();
  const getThisYear = dateToday.getFullYear();

  const calculateAge = (dob) => {
    console.log(dob);
    const divideDob = dob.split("T")[0];
    const getDobYear = divideDob.split("-")[0];
    return getDobYear;
  };

  return (
    <Box className="container players-display-page">
      <Grid
        container
        sx={{
          marginTop: { xs: 0, sm: 0, md: 5, lg: 5 },
        }}
      >
        <Grid item xs={12} sm={6}>
          <PageHeader title="Players" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: "flex", padding: "0 10px " }}>
          <TextField
            type="search"
            name="search"
            sx={{ width: "100%", padding: "0 10px 0 0" }}
          />
          <button>Search</button>
        </Grid>
      </Grid>
      {/* ================| PLAYERS TABLE |===================== */}
      <Box className="players-display-table" sx={{ padding: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Position</StyledTableCell>
                <StyledTableCell align="left">Nationality</StyledTableCell>
                <StyledTableCell align="left">Age</StyledTableCell>
                <StyledTableCell align="left">Current Club</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data?.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center">
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
                    {getThisYear - calculateAge(item.dob)}
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
