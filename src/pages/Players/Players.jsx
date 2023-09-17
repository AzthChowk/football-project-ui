import React, { useState, useEffect } from "react";
import "./players-display-page.css";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Players = () => {
  const [players, setPlayers] = useState([]);
  console.log(players);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playerList = await axios.post("http://localhost:9090/players");
        console.log(playerList.data);
        setPlayers(playerList.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPlayers();
  }, []);

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
    <div className="container players-display-page">
      <div className="players-display-page-header">
        <div>
          <h1>Players</h1>
        </div>
        <div>
          <input type="search" name="search" />
          <button>Search</button>
        </div>
        <div>
          <Link to="/player/add">Add Player</Link>
        </div>
      </div>
      {/* ================| PLAYERS TABLE |===================== */}
      <div className="players-display-table">
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
              {players.map((item) => (
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
      </div>
    </div>
  );
};

export default Players;
