import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

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
import * as Yup from "yup";
import { countries } from "../../../components/Countries.js";

import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";

// react -query
import { useMutation, useQueryClient } from "react-query";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../../../../lib/apis/players-apis.js";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../../redux-store/snackbarSlice.js";
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

export default function PlayerAddForm() {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [age, setAge] = React.useState("");
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localUrl, setLocalUrl] = useState(null);
  const [playerImage, setPlayerImage] = useState(null);
  const queryClient = useQueryClient();

  //add player

  const addPlayerMutation = useMutation({
    mutationKey: ["add-player"],
    mutationFn: (values) => addPlayer(values),
    onSuccess: (res) => {
      dispatch(openSuccessSnackbar(res?.data?.message));
      navigate("/admin/players");
      handleClose();
      queryClient.invalidateQueries("players-data");
    },
    onError: (res) => {
      dispatch(openErrorSnackbar(res?.data?.message));
    },
  });

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamList = await axios.post("http://localhost:9090/teams");

        setTeams(teamList.data);
      } catch (error) {
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
      <Button variant="contained" onClick={handleClickOpen}>
        Add Player
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
            position: "",
            jerseyNumber: "",
            dob: "",
            nationality: "",
            currentClub: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Player's first name is required."),
            middleName: Yup.string().nullable(),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Player's last name is required."),
            position: Yup.string().required("Player position is required."),
            jerseyNumber: Yup.number().required("Jersey number is required."),
            dob: Yup.date().required("Player's date of birth is required."),
            nationality: Yup.string().required(
              "Player's nationality is required."
            ),
            currentClub: Yup.string().required(
              "Player's current club is required."
            ),
          })}
          onSubmit={async (values) => {
            let imageUrl = "";

            //playerImage is image that we take as input
            if (playerImage) {
              //dmtrulbdo - cloudname from cloudinary
              const cloudName = "dmtrulbd0";
              // creates form data object
              const data = new FormData();
              data.append("file", playerImage);
              data.append("upload_preset", "vcyz8tr5");
              data.append("cloud_name", cloudName);

              try {
                const res = await axios.post(
                  `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                  data
                );

                imageUrl = res.data.secure_url;
              } catch (error) {
                dispatch(openErrorSnackbar("Image upload failed."));
              }
            }
            // this is where we store the image as url - check database model - name same
            values.playerImageUrl = imageUrl;
            addPlayerMutation.mutate(values);
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
                        {option.label}
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
                          autoComplete: "new-password", // disable autocomplete and autofill
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
                            <h4>{item.teamName}</h4>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  {formik.touched.currentClub && formik.errors.currentClub ? (
                    <div>{formik.errors.currentClub}</div>
                  ) : null}
                </Box>
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
              </Box>

              <Box className="add-player-form-field">
                <Box sx={{ width: "100%" }}>
                  <TextField
                    required
                    type="text"
                    label="Jersey Number"
                    variant="outlined"
                    name="jerseyNumber"
                    sx={{ width: "100%" }}
                    {...formik.getFieldProps("jerseyNumber")}
                  />
                  {formik.touched.jerseyNumber && formik.errors.jerseyNumber ? (
                    <div>{formik.errors.jerseyNumber}</div>
                  ) : null}
                </Box>
                <Box sx={{ width: "100%" }}>
                  {localUrl && (
                    <img
                      src={localUrl}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        border: "1px solid #999",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="outlined" component="label">
                      Upload Player Image
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(event) => {
                          const playerImage = event.target.files[0];
                          setLocalUrl(URL.createObjectURL(playerImage));
                          setPlayerImage(playerImage);
                        }}
                      />
                    </Button>
                  </Stack>
                </Box>
              </Box>
              <Box sx={{ margin: "20px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ marginRight: "10px" }}
                >
                  Add Player
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
}
