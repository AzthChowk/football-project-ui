import React from "react";

import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import * as Yup from "yup";

import { Box, Button, Typography } from "@mui/material";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../../lib/apis/admin-apis";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../redux-store/snackbarSlice";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginMutation = useMutation({
    mutationKey: ["user-login"],
    mutationFn: (values) => loginAdmin(values),
    onSuccess: (response) => {
      localStorage.setItem("accesstoken", response?.data?.accessToken);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userRole", response?.data?.findUser?.role);
      localStorage.setItem("userId", response?.data?.findUser?._id);
      localStorage.setItem("email", response?.data?.findUser?.email);
      dispatch(openSuccessSnackbar(response?.data?.message));
      if (response?.data?.findUser?.role === "Administrator")
        navigate("/admin");
      if (response?.data?.findUser?.role === "Reporter") navigate(`/reporter`);
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });

  return (
    <>
      <Box sx={{ margin: 10 }}></Box>

      <Box className="login-card">
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            password: Yup.string().required("Password is required."),

            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required."),
          })}
          onSubmit={async (values) => {
            loginMutation.mutate(values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ padding: "10px 0" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  type="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </Box>
              <Box sx={{ padding: "10px 0" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Password"
                  type="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                />

                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </Box>
              <Box>
                <Button type="submit">Log In</Button>
                <Link to="/register">
                  <Typography>No Account? Create one</Typography>
                </Link>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default LoginPage;
