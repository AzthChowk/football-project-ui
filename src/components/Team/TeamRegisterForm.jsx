import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import { AiOutlineClose } from "react-icons/ai";

import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { Formik } from "formik";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addTeam } from "../../../lib/apis/teams-apis";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../redux-store/snackbarSlice";
import "./team-register-form.css";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
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
  const [teamImage, setTeamImage] = useState(null);

  const addTeamMutation = useMutation({
    mutationKey: ["add-team"],
    mutationFn: (values) => addTeam(values),
    onSuccess: (response) => {
      dispatch(openSuccessSnackbar(response?.data?.message));
      handleClose();
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.data?.message));
    },
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
    <Box className="team-add-form">
      <Button variant="contained" sx={{ padding: 1 }} onClick={handleClickOpen}>
        Add Team
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
          Enter the team details.
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
            teamName: "",
            address: "",
            url: "",
            manager: "",
            coach: "",
          }}
          validationSchema={Yup.object({
            teamName: Yup.string().required("Team name is required."),
            address: Yup.string().required("Club Address is required."),
            url: Yup.string().required(false),
            manager: Yup.string().required("Manager's name is required."),
            coach: Yup.string().required("Coach's name is required."),
          })}
          onSubmit={async (values) => {
            let imageUr = "";

            //playerImage is image that we take as input
            if (teamImage) {
              console.log("teamImg here", teamImage);
              //dmtrulbdo - cloudname from cloudinary
              const cloudName = "dmtrulbd0";
              // creates form data object
              const data = new FormData();
              data.append("file", teamImage);
              data.append("upload_preset", "easterfc");
              data.append("cloud_name", cloudName);
              console.log("data here", data);

              try {
                const res = await axios.post(
                  `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                  data
                );
                console.log("res here", res);

                imageUr = res.data.secure_url;
              } catch (error) {
                dispatch(openErrorSnackbar("Image upload failed."));
              }
            }
            // this is where we store the image as url - check database model - name same
            values.teamLogo = imageUr;
            addTeamMutation.mutate(values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Box className="form-fields">
                <Grid className="team-add-forms">
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    label="Team Name"
                    name="teamName"
                    {...formik.getFieldProps("teamName")}
                  />
                  {formik.touched.teamName && formik.errors.teamName ? (
                    <div>{formik.errors.teamName}</div>
                  ) : null}
                </Grid>

                <Grid container spacing={2} className="team-add-forms">
                  <Grid item sm={6}>
                    <TextField
                      sx={{ width: "100%" }}
                      required
                      label="Manager"
                      name="manager"
                      {...formik.getFieldProps("manager")}
                    />
                    {formik.touched.manager && formik.errors.manager ? (
                      <div>{formik.errors.manager}</div>
                    ) : null}
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      required
                      sx={{ width: "100%" }}
                      label="Coach"
                      name="coach"
                      {...formik.getFieldProps("coach")}
                    />
                    {formik.touched.coach && formik.errors.coach ? (
                      <div>{formik.errors.coach}</div>
                    ) : null}
                  </Grid>
                </Grid>

                <Grid className="team-add-forms">
                  <TextField
                    required
                    sx={{ width: "100%" }}
                    label="Address"
                    name="address"
                    {...formik.getFieldProps("address")}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div>{formik.errors.address}</div>
                  ) : null}
                </Grid>

                <Grid className="team-add-forms">
                  <TextField
                    required
                    sx={{ width: "100%" }}
                    label="Website"
                    name="url"
                    {...formik.getFieldProps("url")}
                  />
                  {formik.touched.url && formik.errors.url ? (
                    <div>{formik.errors.url}</div>
                  ) : null}
                </Grid>
                <Grid>
                  <Grid sx={{ width: "100%" }}>
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
                        Upload Team Logo
                        <input
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(event) => {
                            const teamImage = event.target.files[0];
                            setLocalUrl(URL.createObjectURL(teamImage));
                            setTeamImage(teamImage);
                          }}
                        />
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ marginRight: "10px" }}
                  >
                    Add Team
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Box>
            </form>
          )}
        </Formik>
      </BootstrapDialog>
    </Box>
  );
}
