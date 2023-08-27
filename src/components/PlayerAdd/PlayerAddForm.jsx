import React from "react";
import { Formik, Form, useField } from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { $axios } from "../../../lib/axios";
import "./add-player-form.css";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const PlayerAddForm = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  // const [loading, setLoading] = useState(false);
  return (
    <div className="container">
      {success && <h1>Added Successfully.</h1>}
      <h1>Add Player</h1>
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
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          middleName: Yup.string(),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          playerImage: Yup.string().required("Required"),
          position: Yup.string().required("Required"),
          dob: Yup.date().required("Required"),
          nationality: Yup.string().required("Required"),
          currentClub: Yup.string().required("Required"),
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
            <div className="add-player-form-field">
              <TextField
                type="text"
                label="First Name"
                variant="outlined"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="add-player-form-field">
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
            </div>
            <div className="add-player-form-field">
              <TextField
                type="text"
                label="Last Name"
                variant="outlined"
                name="lastName"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div className="add-player-form-field">
              <TextField
                type="text"
                label="Player Image"
                variant="outlined"
                name="playerImage"
                {...formik.getFieldProps("playerImage")}
              />
              {formik.touched.playerImage && formik.errors.playerImage ? (
                <div>{formik.errors.playerImage}</div>
              ) : null}
            </div>
            <div className="add-player-form-field">
              <TextField
                type="text"
                label="Position"
                variant="outlined"
                name="position"
                {...formik.getFieldProps("position")}
              />
              {formik.touched.position && formik.errors.position ? (
                <div>{formik.errors.position}</div>
              ) : null}
            </div>
            <div className="add-player-form-field">
              <TextField
                type="date"
                variant="outlined"
                name="dob"
                {...formik.getFieldProps("dob")}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div>{formik.errors.dob}</div>
              ) : null}
            </div>
            <div className="add-player-form-field">
              <TextField
                type="text"
                label="Nationality"
                variant="outlined"
                name="nationality"
                {...formik.getFieldProps("nationality")}
              />
              {formik.touched.nationality && formik.errors.nationality ? (
                <div>{formik.errors.nationality}</div>
              ) : null}
            </div>
            <div className="add-player-form-field">
              <TextField
                type="text"
                label="Current Team"
                variant="outlined"
                name="currentClub"
                {...formik.getFieldProps("currentClub")}
              />
              {formik.touched.currentClub && formik.errors.currentClub ? (
                <div>{formik.errors.currentClub}</div>
              ) : null}
            </div>

            {/* <MySelect
            label="Current Team"
            name="team"
            {...formik.getFieldProps("team")}
          >
            <option value="">Select Current Team</option>

            <option value="designer">64db5d254120dd3027ebdeb6</option>
          </MySelect> */}

            <button type="submit">Add Player</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PlayerAddForm;
