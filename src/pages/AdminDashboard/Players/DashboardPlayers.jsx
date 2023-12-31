import React from "react";
import { useQuery, useQueryClient } from "react-query";

// MUI Table
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

//components
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { getPlayersList } from "../../../../lib/apis/players-apis";

import SummaryCard from "../../../components/SummaryCard";
import DeletePlayerBtn from "../../../components/DeletePlayerBtn";
import PlayerEditForm from "./PlayerEditForm";
import PlayerAddForm from "./PlayerAddForm";
import { useDispatch } from "react-redux";
import { openSuccessSnackbar } from "../../../redux-store/snackbarSlice";

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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  // react - query
  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ["players-data"],
    queryFn: () => getPlayersList(),
  });

  const pageCounter = data?.data?.length;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const dateToday = new Date();
  const getThisYear = dateToday.getFullYear();

  const calculateAge = (dob) => {
    console.log(dob);
    const divideDob = dob.split("T")[0];
    const getDobYear = divideDob.split("-")[0];
    return getDobYear;
  };

  return (
    <>
      <Box sx={{ padding: "10px 0" }}>
        <Grid container sx={{ display: "flex", padding: "10px", gap: "10px" }}>
          <SummaryCard title="Total Players" count={data?.data.length} />
        </Grid>
        <Divider />

        <Grid
          sx={{
            padding: "10px",
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
      <Box sx={{ padding: 1 }}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 700 }}>
                  SN
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Player's Name</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Nationality</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Age</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Current club</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.length === 0 ? (
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  No data found.
                </Typography>
              ) : (
                <>
                  {data?.data
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell align="center">
                            {page * 10 + index + 1}
                          </TableCell>
                          <TableCell sx={{ padding: "2px" }}>
                            <img
                              src={item.playerImageUrl}
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
                            <Typography sx={{ textTransform: "capitalize" }}>
                              {item.fullName}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "2px" }}>
                            {item.position}
                          </TableCell>
                          <TableCell sx={{ padding: "2px" }}>
                            {item.nationality}
                          </TableCell>
                          <TableCell sx={{ padding: "2px" }}>
                            {getThisYear - calculateAge(item.dob)}
                          </TableCell>
                          <TableCell sx={{ padding: "2px" }}>
                            {item.clubName}
                          </TableCell>
                          <TableCell sx={{ display: "flex", gap: "10px" }}>
                            <PlayerEditForm playerId={item._id} />
                            <DeletePlayerBtn playerId={item._id} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ display: "flex", justifyContent: "flex-start" }}
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={pageCounter}
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
