import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { Formik } from "formik";
import * as Yup from "yup";

// react query
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createResult } from "../../../../lib/apis/results-apis";
import { getTeamsList } from "../../../../lib/apis/teams-apis";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../../redux-store/snackbarSlice";
import { getFixtureList } from "../../../../lib/apis/fixtures-apis";

const ResultCreate = () => {
  const [teams, setTeams] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //create matches
  const createResultMutation = useMutation({
    mutationKey: ["create-match-result"],
    mutationFn: (values) => createResult(values),
    onSuccess: (response) => {
      dispatch(openSuccessSnackbar(response?.data?.message));
    },
    onError: (error) => {
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

  // get select - opponent teams
  const { data: matchId } = useQuery({
    queryKey: ["match-detail"],
    queryFn: () => getFixtureList(),
  });

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
    <Box sx={{ width: "100%", paddingRight: 2, paddingBottom: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, padding: 1 }}>
        Add Match Result
      </Typography>
      <Formik
        initialValues={{
          matchId: "",
          isMatchFinished: true,
          opponentOne: "",
          opponentTwo: "",
          opponentOneGoalScore: "",
          opponentTwoGoalScore: "",
        }}
        validationSchema={Yup.object({
          matchId: Yup.string().required("Match number is required."),
          opponentOne: Yup.string().required(
            "Opponents are required and must not be same."
          ),
          opponentOneGoalScore: Yup.number()
            .min(0)
            .required("Goal score is required."),
          opponentTwo: Yup.string().required(
            "Opponents are required and must not be same."
          ),
          opponentTwoGoalScore: Yup.number()
            .min(0)
            .required("Goal score is required."),
        })}
        onSubmit={(values) => {
          console.log(values);
          values.isMatchFinished = true;
          createResultMutation.mutate(values);
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
                sx={{ padding: 1 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Match Id/Number</InputLabel>
                  <Select
                    required
                    value={teams}
                    label="Match Id/Number"
                    name="matchId"
                    onChange={handleChange}
                    {...formik.getFieldProps("matchId")}
                  >
                    {matchId?.data?.map((item, index) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          <h4>{item.matchNumber}</h4>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {formik.touched.matchId && formik.errors.matchId ? (
                  <div>{formik.errors.matchId}</div>
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
                <TextField
                  type="number"
                  min="0"
                  id="outlined-basic"
                  label="Opponent One Score"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  inputProps={{ min: 0 }}
                  {...formik.getFieldProps("opponentOneGoalScore")}
                />
                {formik.touched.opponentOneGoalScore &&
                formik.errors.opponentOneGoalScore ? (
                  <div>{formik.errors.opponentOneGoalScore}</div>
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
                  type="number"
                  min="0"
                  id="outlined-basic"
                  label="Opponent Two Score"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  inputProps={{ min: 0 }}
                  {...formik.getFieldProps("opponentTwoGoalScore")}
                />
                {formik.touched.opponentTwoGoalScore &&
                formik.errors.opponentTwoGoalScore ? (
                  <div>{formik.errors.opponentTwoGoalScore}</div>
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

export default ResultCreate;
