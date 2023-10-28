import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Typography, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation, useQueryClient } from "react-query";
import { updatePassword } from "../../lib/apis/user-apis";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../redux-store/snackbarSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const id = localStorage.userId;
  const updatePasswordMutation = useMutation({
    mutationKey: ["update-password"],
    mutationFn: (values) => updatePassword(values),
    onSuccess: (response) => {
      dispatch(
        openSuccessSnackbar(
          response?.data?.message || "Password updated successfully."
        )
      );
      navigate("/reporter/profile");
    },
    onError: (response) => {
      dispatch(
        openErrorSnackbar(response?.data?.message || "Something went wrong.")
      );
    },
  });
  return (
    <>
      <Typography variant="h6" sx={{ padding: "10px 0" }}>
        Change password
      </Typography>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          currentPassword: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Current password is required."),
          newPassword: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("New password is required."),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Confirmation password is required."),
        })}
        onSubmit={(values) => {
          values.id = id;
          updatePasswordMutation.mutate(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid sx={{ padding: "10px 0" }}>
              <TextField
                type="password"
                label="Current Password"
                variant="outlined"
                {...formik.getFieldProps("currentPassword")}
              />
              {formik.touched.currentPassword &&
              formik.errors.currentPassword ? (
                <div>{formik.errors.currentPassword}</div>
              ) : null}
            </Grid>
            <Grid sx={{ padding: "10px 0" }}>
              <TextField
                type="password"
                label="New Password"
                variant="outlined"
                {...formik.getFieldProps("newPassword")}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div>{formik.errors.newPassword}</div>
              ) : null}
            </Grid>

            <Grid sx={{ padding: "10px 0" }}>
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </Grid>

            <Button
              variant="contained"
              type="submit"
              disabled={updatePasswordMutation?.isLoading}
            >
              Change and Save
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ChangePassword;
