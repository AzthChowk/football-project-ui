import React from "react";
import { useQuery } from "react-query";
import { getTeamsList } from "../../../lib/apis/teams-apis";
import TeamRegisterForm from "../../components/TeamAdd/TeamRegisterForm";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";

import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

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

const Teams = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["teams-list"],
    queryFn: () => getTeamsList(),
  });
  console.log(data?.data);
  return (
    <Box>
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
            TOTAL TEAMS
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
          <TeamRegisterForm />
          <Search sx={{ border: "1px solid #279EFF" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search teams..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Logo</TableCell>
                <TableCell>Club Name</TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Coach</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data?.map((item, index) => {
                return (
                  <>
                    <TableRow key={item._id}>
                      <TableCell sx={{ padding: "2px" }}>{index + 1}</TableCell>
                      <TableCell sx={{ padding: "2px" }}>
                        <img
                          src={item.logo}
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "2px" }}>{item.name}</TableCell>
                      <TableCell sx={{ padding: "2px" }}>
                        {item.manager}
                      </TableCell>
                      <TableCell sx={{ padding: "2px" }}>
                        {item.coach}
                      </TableCell>
                      <TableCell sx={{ padding: "2px" }}>{item.url}</TableCell>
                      <TableCell>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Teams;
