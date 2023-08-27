import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { $axios } from "../../../lib/axios";
import "./team-register-form.css";

import * as Yup from "yup";

const TeamRegisterForm = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  // const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      {success && <h1>Added Successfully.</h1>}
      <h1>Register Team</h1>
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
          name: Yup.string().required("Required"),
          logo: Yup.string().required("Required"),
          address: Yup.string().required("Required"),
          url: Yup.string().required("Required"),
          manager: Yup.string().required("Required"),
          coach: Yup.string().required("Required"),
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
            <div className="add-team-form-fields">
              <TextField
                required
                label="Team Name"
                name="name"
                {...formik.getFieldProps("name")}
              />
            </div>
            <div className="add-team-form-fields">
              <TextField
                required
                label="Upload the Team Logo"
                name="logo"
                {...formik.getFieldProps("logo")}
              />
            </div>
            <div className="add-team-form-fields">
              <TextField
                required
                label="Address"
                name="address"
                {...formik.getFieldProps("address")}
              />
            </div>
            <div className="add-team-form-fields">
              <TextField
                required
                label="Website"
                name="url"
                {...formik.getFieldProps("url")}
              />
            </div>
            <div className="add-team-form-fields">
              <TextField
                required
                label="Manager"
                name="manager"
                {...formik.getFieldProps("manager")}
              />
            </div>
            <div className="add-team-form-fields">
              <TextField
                required
                label="Coach"
                name="coach"
                {...formik.getFieldProps("coach")}
              />
            </div>
            <button type="submit">Create Team</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default TeamRegisterForm;
