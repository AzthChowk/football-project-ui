import Box from "@mui/material/Box/Box";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import "./register-form.css";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../../lib/apis/admin-apis";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../redux-store/snackbarSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addAdminMutation = useMutation({
    mutationKey: ["add-admin"],
    mutationFn: (values) => addAdmin(values),
    onSuccess: (response) => {
      navigate("/login");
      dispatch(openSuccessSnackbar(response?.data?.message));
    },
    onError: (response) => {
      console.log("res", response);
      dispatch(
        openErrorSnackbar(
          response?.response?.data?.message || "Something went wrong."
        )
      );
    },
  });
  return (
    <Box className="register-page" sx={{ padding: 1 }}>
      <Grid container className="container user-register">
        {/* ===== Grid left ===== */}
        <Grid
          className="user-register-lft"
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, mt: 2, textTransform: "uppercase" }}
          >
            Register
          </Typography>
          <img
            src="/404robot.svg"
            alt=""
            style={{ width: "55%" }}
            className="center"
          />
        </Grid>

        {/* =======Grid -Right ================ */}
        <Grid
          item
          className="user-register-rgt"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: 2,
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, padding: 1 }}>
            Fill up the details.
          </Typography>
          <Formik
            initialValues={{
              firstName: "",
              middleName: "",
              lastName: "",
              email: "",
              password: "",
              gender: "",
              role: "Administrator",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("First name is required."),
              middleName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .nullable(),
              lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Last name is required."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required."),

              password: Yup.string()
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
                  message: "Please create a stronger password",
                })
                .required("Password is required."),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirmation password is required."),
              gender: Yup.string(),
              role: Yup.string().required("Role is required."),
            })}
            onSubmit={async (values) => {
              addAdminMutation.mutate(values);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Grid sx={{ display: "flex" }}>
                  <Grid sx={{ padding: 1, width: "100%" }}>
                    <TextField
                      required
                      type="text"
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div>{formik.errors.firstName}</div>
                    ) : null}
                  </Grid>
                  <Grid sx={{ padding: 1, width: "100%" }}>
                    <TextField
                      type="text"
                      name="middleName"
                      label="Middle Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      {...formik.getFieldProps("middleName")}
                    />
                    {formik.touched.middleName && formik.errors.middleName ? (
                      <div>{formik.errors.middleName}</div>
                    ) : null}
                  </Grid>
                  <Grid sx={{ padding: 1, width: "100%" }}>
                    <TextField
                      required
                      type="text"
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      {...formik.getFieldProps("lastName")}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div>{formik.errors.lastName}</div>
                    ) : null}
                  </Grid>
                </Grid>

                <Grid sx={{ padding: 1 }}>
                  <TextField
                    required
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </Grid>
                <Grid sx={{ padding: 1 }}>
                  <TextField
                    required
                    type="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </Grid>
                <Grid sx={{ padding: 1 }}>
                  <TextField
                    required
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                  ) : null}
                </Grid>
                <Grid sx={{ display: "flex", width: "100%" }}>
                  <Grid sx={{ padding: 1, width: "100%" }}>
                    <TextField
                      required
                      type="text"
                      name="gender"
                      label="Gender"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      {...formik.getFieldProps("gender")}
                    />
                    {formik.touched.gender && formik.errors.gender ? (
                      <div>{formik.errors.gender}</div>
                    ) : null}
                  </Grid>
                  <Grid sx={{ padding: 1, width: "100%" }}>
                    <TextField
                      required
                      type="text"
                      name="role"
                      label="Role"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      {...formik.getFieldProps("role")}
                    />
                    {formik.touched.role && formik.errors.role ? (
                      <div>{formik.errors.role}</div>
                    ) : null}
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ margin: 1 }}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
          <Link to="/login">
            <Typography sx={{ padding: 1 }}>
              Already have an account. Login here
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
