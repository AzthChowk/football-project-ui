import React, { useState } from "react";

import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Formik } from "formik";
import * as Yup from "yup";

// react query
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createMatches } from "../../../lib/apis/fixtures-apis";

import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../redux-store/snackbarSlice";
import { getTeamsList } from "../../../lib/apis/teams-apis";

const FixtureCreate = () => {
  const [teams, setTeams] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //create matches
  const createMatchesMutation = useMutation({
    mutationKey: ["create-matches"],
    mutationFn: (values) => createMatches(values),
    onSuccess: (response) => {
      dispatch(openSuccessSnackbar(response?.data?.message));
    },
    onError: (error) => {
      console.log("error", error);
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });

  // get select - opponent teams
  const {
    isLoading,
    data: opponentTeams,
    error,
  } = useQuery({
    queryKey: ["opponent-teams"],
    queryFn: () => getTeamsList(),
  });
  console.log(opponentTeams);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: "100%", paddingRight: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, padding: 1 }}>
        Add Match
      </Typography>
      <Formik
        initialValues={{
          matchNumber: "",
          time: "",
          date: "",
          playGround: "",
          opponentOne: "",
          opponentTwo: "",
        }}
        validationSchema={Yup.object({
          matchNumber: Yup.number("Match number must be a number.")
            .integer("Match number must be an integer value.")
            .min(1, "Match number must be at least and greater than 1.")
            .required("Match number is required."),
          time: Yup.string(),
          date: Yup.string(),
          playGround: Yup.string()
            .min(10)
            .max(50, "Playground must be at least 50 characters or less.")
            .required("Playground name is required."),
          opponentOne: Yup.string().required(
            "Opponents are required and must not be same."
          ),
          opponentTwo: Yup.string().required(
            "Opponents are required and must not be same."
          ),
        })}
        onSubmit={(values) => {
          createMatchesMutation.mutate(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ padding: 1, width: "500px" }}
              >
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Match Number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...formik.getFieldProps("matchNumber")}
                />
                {formik.touched.matchNumber && formik.errors.matchNumber ? (
                  <div>{formik.errors.matchNumber}</div>
                ) : null}
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ padding: 1 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Opponent One</InputLabel>
                  <Select
                    required
                    value={teams}
                    label="Opponent One"
                    name="opponentOne"
                    onChange={handleChange}
                    {...formik.getFieldProps("opponentOne")}
                  >
                    {opponentTeams?.data?.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          <h4>{item.teamName}</h4>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {formik.touched.opponentOne && formik.errors.opponentOne ? (
                  <div>{formik.errors.opponentOne}</div>
                ) : null}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ padding: 1 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Opponent Two</InputLabel>
                  <Select
                    required
                    value={teams}
                    label="Opponent Two"
                    name="opponentTwo"
                    onChange={handleChange}
                    {...formik.getFieldProps("opponentTwo")}
                  >
                    {opponentTeams?.data?.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          <h4>{item.teamName}</h4>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {formik.touched.opponentTwo && formik.errors.opponentTwo ? (
                  <div>{formik.errors.opponentTwo}</div>
                ) : null}
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ padding: 1 }}
              >
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Playground"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...formik.getFieldProps("playGround")}
                />
                {formik.touched.playGround && formik.errors.playGround ? (
                  <div>{formik.errors.playGround}</div>
                ) : null}
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ padding: 1 }}
              >
                <TextField
                  type="date"
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...formik.getFieldProps("date")}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div>{formik.errors.date}</div>
                ) : null}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ padding: 1 }}
              >
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Time"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...formik.getFieldProps("time")}
                />
                {formik.touched.time && formik.errors.time ? (
                  <div>{formik.errors.time}</div>
                ) : null}
              </Grid>

              <Button variant="contained" type="submit" sx={{ margin: 1 }}>
                create match
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FixtureCreate;
