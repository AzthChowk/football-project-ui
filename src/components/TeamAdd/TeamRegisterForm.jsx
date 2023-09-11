import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import { AiOutlineClose } from "react-icons/ai";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { $axios } from "../../../lib/axios";
import "./team-register-form.css";

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
            name: "",
            logo: "",
            address: "",
            url: "",
            manager: "",
            coach: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Club name is required."),
            logo: Yup.string().required("Club logo is required."),
            address: Yup.string().required("Club Address is required."),
            url: Yup.string().required(false),
            manager: Yup.string().required("Manager's name is required."),
            coach: Yup.string().required("Coach's name is required."),
          })}
          onSubmit={async (values) => {
            console.log(values);
            try {
              await $axios.post("/team/create", values);
              console.log("TEAM CREATED SUCCESSFULLY.");
              setSuccess(true);
            } catch (error) {
              setFailed(true);
              console.log(error.message, "CANNOT CREATE TEAM");
            }
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Box className="add-team-form-fields">
                <Box sx={{ width: "100%" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    label="Team Name"
                    name="name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}
                </Box>
              </Box>

              <Box className="add-team-form-fields">
                <Box sx={{ width: "50%" }}>
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
                </Box>
                <Box sx={{ width: "50%" }}>
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
                </Box>
              </Box>
              <Box className="add-team-form-fields">
                <Box sx={{ width: "100%" }}>
                  <TextField
                    required
                    sx={{ width: "100%" }}
                    label="Upload the Team Logo"
                    name="logo"
                    {...formik.getFieldProps("logo")}
                  />
                  {formik.touched.logo && formik.errors.logo ? (
                    <div>{formik.errors.logo}</div>
                  ) : null}
                </Box>
              </Box>
              <Box className="add-team-form-fields">
                <Box sx={{ width: "100%" }}>
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
                </Box>
              </Box>
              <Box className="add-team-form-fields">
                <Box sx={{ width: "100%" }}>
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
                </Box>
              </Box>
              <Box>
                <Box sx={{ margin: "20px" }}>
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
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </BootstrapDialog>
    </Box>
  );
}
