import React from "react";

import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { $axios } from "../../../lib/axios";

import "./login.css";
import { Box, Button, Typography } from "@mui/material";
const url = "http://localhost:9090/login";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Box>
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
            try {
              const response = await $axios.post("/login", values);
              // console.log(response);
              const accesstoken = response.data.accessToken;
              console.log(response.data.message);
              localStorage.setItem("accesstoken", accesstoken);
              navigate("/admin");
            } catch (error) {
              console.log(error.message);
            }
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
                <Typography>No Account? Create one</Typography>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
