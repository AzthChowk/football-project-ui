import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import { AiOutlineClose } from "react-icons/ai";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { $axios } from "../../../lib/axios";
import { countries } from "../Countries.js";

import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getPlayerDetails } from "../../../lib/apis/players-apis";
import "./add-player-form.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const position = [
  "Striker",
  "Midfielder",
  "Full Back",
  "Center Back",
  "Goal Keeper",
];

const PlayerEditForm = (props) => {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [age, setAge] = React.useState("");
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(false);

  // const playerId = params.id;

  const { isLoading, data } = useQuery({
    queryKey: ["player-details"],
    queryFn: () => getPlayerDetails(props.playerId),
  });
  const playerData = data?.data;
  console.log(playerData);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamList = await axios.post("http://localhost:9090/teams");
        console.log(teamList.data);
        setTeams(teamList.data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      }
    };
    fetchTeams();
  }, []);

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
    <Box className="player-add-form">
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, fontWeight: 600 }}
          id="customized-dialog-title"
        >
          Enter the player details.
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <AiOutlineClose />
        </IconButton>

        {/* ------------ Formik--------- */}
        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            playerImage: "",
            position: "",
            dob: "",
            nationality: "",
            currentClub: "",
            // firstName: playerData.firstName || "firstName",
            // middleName: playerData.middleName || "middleName",
            // lastName: playerData.lastName || "lastName",
            // playerImage: playerData.playerImage || "player Image",
            // position: playerData.position || "position",
            // dob: playerData.dob || "dob",
            // nationality: playerData.nationality || "nationality",
            // currentClub: playerData.currentClub || "currentClub",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Player's first name is required."),
            middleName: Yup.string().required(false).nullable(true),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Player's last name is required."),
            playerImage: Yup.string().required("Please upload player's image."),
            position: Yup.string().required("Player position is required."),
            dob: Yup.date().required("Player's date of birth is required."),
            nationality: Yup.string().required(
              "Player's nationality is required."
            ),
            currentClub: Yup.string().required(
              "Player's current club is required."
            ),
          })}
          onSubmit={async (values) => {
            console.log(values);
            try {
              await $axios.post("/player/create", values);
              console.log("Player added successfully.");
              setSuccess(true);
            } catch (error) {
              setFailed(true);
              console.log(error.message, "Cannot add player.");
            }
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Box className="add-player-form-field">
                <Box>
                  <TextField
                    required
                    type="text"
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </Box>
                <Box>
                  <TextField
                    type="text"
                    label="Middle Name"
                    variant="outlined"
                    name="middleName"
                    {...formik.getFieldProps("middleName")}
                  />
                  {formik.touched.middleName && formik.errors.middleName ? (
                    <div>{formik.errors.middleName}</div>
                  ) : null}
                </Box>
                <Box>
                  <TextField
                    required
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
                </Box>
              </Box>

              <Box className="add-player-form-field">
                <Box sx={{ width: "100%" }}>
                  <TextField
                    required
                    sx={{ width: "100%" }}
                    type="text"
                    label="Player Image"
                    variant="outlined"
                    name="playerImage"
                    {...formik.getFieldProps("playerImage")}
                  />
                  {formik.touched.playerImage && formik.errors.playerImage ? (
                    <div>{formik.errors.playerImage}</div>
                  ) : null}
                </Box>
              </Box>
              <Box className="add-player-form-field">
                <Box sx={{ width: "50%" }}>
                  <FormControl fullWidth>
                    <InputLabel>Position</InputLabel>
                    <Select
                      required
                      label="Position"
                      name="position"
                      onChange={handleChange}
                      {...formik.getFieldProps("position")}
                    >
                      {position.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item}>
                            <Typography>{item}</Typography>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  {formik.touched.position && formik.errors.position ? (
                    <div>{formik.errors.position}</div>
                  ) : null}
                </Box>
                <Box sx={{ width: "50%" }}>
                  <TextField
                    required
                    sx={{ width: "100%" }}
                    type="date"
                    variant="outlined"
                    name="dob"
                    {...formik.getFieldProps("dob")}
                  />
                  {formik.touched.dob && formik.errors.dob ? (
                    <div>{formik.errors.dob}</div>
                  ) : null}
                </Box>
              </Box>

              <Box className="add-player-form-field">
                <Box sx={{ width: "50%" }}>
                  <Autocomplete
                    required
                    id="country-select-demo"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        required
                        {...params}
                        name="nationality"
                        label="Nationality"
                        variant="outlined"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "nationality", // disable autocomplete and autofill
                        }}
                        {...formik.getFieldProps("nationality")}
                      />
                    )}
                  />
                  {formik.touched.nationality && formik.errors.nationality ? (
                    <div>{formik.errors.nationality}</div>
                  ) : null}
                </Box>
                <Box sx={{ width: "50%" }}>
                  <FormControl fullWidth>
                    <InputLabel>Team</InputLabel>
                    <Select
                      required
                      value={teams}
                      label="Team"
                      name="currentClub"
                      onChange={handleChange}
                      {...formik.getFieldProps("currentClub")}
                    >
                      {teams.map((item) => {
                        return (
                          <MenuItem key={item._id} value={item._id}>
                            <h4>{item.name}</h4>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  {formik.touched.currentClub && formik.errors.currentClub ? (
                    <div>{formik.errors.currentClub}</div>
                  ) : null}
                </Box>
              </Box>
              <Box sx={{ margin: "20px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ marginRight: "10px" }}
                >
                  Update Player
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </BootstrapDialog>
    </Box>
  );
};

export default PlayerEditForm;
