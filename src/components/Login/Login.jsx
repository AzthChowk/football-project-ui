import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { $axios } from "../../../lib/axios";

import "./login.css";
const url = "http://localhost:9090/login";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-card">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          password: Yup.string().required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          try {
            const response = await $axios.post("/login", values);
            // console.log(response);
            const accesstoken = response.data.accessToken;
            console.log(response.data.message);
            localStorage.setItem("accesstoken", accesstoken);
            navigate("/admin/dashboard");
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Email"
              variant="standard"
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
            />

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <TextField
              label="Password"
              variant="standard"
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
            />

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <button type="submit">Log In</button>
            <h4>Forgot Password</h4>
          </form>
        )}
      </Formik>
      {/* <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log("nepal");
        }}
      >
        <Form>
          <div className="login-card-cts">
            <div>
              <TextField
                label="Email"
                variant="standard"
                type="text"
                name="email"
              />
            </div>
            <div>
              <TextField
                label="Password"
                variant="standard"
                type="password"
                name="password"
              />
            </div>

            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik> */}
    </div>
  );
};

export default Login;
