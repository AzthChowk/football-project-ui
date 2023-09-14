import React from "react";
import { useQuery } from "react-query";

// MUI Table
import { Box, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";

//components
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { getPlayersList } from "../../../lib/apis/players-apis";
import PlayerAddForm from "../../components/Player/PlayerAddForm";
import PlayerEditForm from "../../components/Player/PlayerEditForm";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Players = () => {
  // react - query
  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ["players-data"],
    queryFn: () => getPlayersList(),
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box sx={{ padding: "10px 0" }}>
        <Grid
          sx={{
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#337CCF",
            width: "fit-content",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            TOTAL PLAYERS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: "#fff" }}>
            {data?.data?.length}
          </Typography>
        </Grid>
        <Grid
          sx={{
            padding: "10px 0",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {/* ========= add player button ================ */}
          <PlayerAddForm />
          <Search sx={{ border: "1px solid #279EFF" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search player..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
      </Box>
      <Divider />
      <Box>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Player's Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Nationality</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Current club</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <>
                      <TableRow key={item._id}>
                        <TableCell sx={{ padding: "2px" }}>
                          {page * 10 + index + 1}
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          <img
                            src={item.playerImage}
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                              borderRadius: "50px",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          {item.fullName}
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          {item.position}
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          {item.nationality}
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          {item.dob.split("T")[0]}
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          {item.clubName}
                        </TableCell>
                        <TableCell sx={{ padding: "2px" }}>
                          <PlayerEditForm playerId={item._id} />
                          <Button>Delete</Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ display: "flex", justifyContent: "flex-start" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data?.data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
};

export default Players;
