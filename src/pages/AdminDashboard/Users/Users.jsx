import React from "react";
import { useQuery } from "react-query";
import { getUsersList } from "../../../../lib/apis/user-apis";
import SummaryCard from "../../../components/SummaryCard";
import PlayerEditForm from "../Players/PlayerEditForm";
import DeletePlayerBtn from "../../../components/DeletePlayerBtn";

// MUI Table
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

const Users = () => {
  // get users
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: usersList,
  } = useQuery({
    queryKey: ["users-data"],
    queryFn: () => getUsersList(),
  });
  console.log(usersList?.data);

  return (
    <>
      <Grid container sx={{ display: "flex", padding: "10px", gap: "10px" }}>
        <SummaryCard title="Total Users" count={usersList?.data.length} />
      </Grid>
      <Grid sx={{ width: "fit-content" }}>
        <Search sx={{ border: "1px solid #279EFF" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search user..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                SN
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Image</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Player's Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Gender</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Role</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList?.data.length === 0 ? (
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                No data found.
              </Typography>
            ) : (
              <>
                {usersList?.data.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
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
                      <TableCell
                        sx={{ padding: "2px", textTransform: "capitalize" }}
                      >
                        {item.firstName} {item.lastName}
                      </TableCell>
                      <TableCell sx={{ padding: "2px" }}>
                        {item.email}
                      </TableCell>
                      <TableCell sx={{ padding: "2px" }}>
                        {item.gender}
                      </TableCell>
                      <TableCell sx={{ padding: "2px" }}>{item.role}</TableCell>
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
    </>
  );
};

export default Users;
