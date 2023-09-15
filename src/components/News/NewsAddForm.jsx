import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/system";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { $axios } from "../../../lib/axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewsAddForm = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 500px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="container add-news-form">
      {success && <h1>Added Successfully.</h1>}
      <div>
        <h1>Add News</h1>
      </div>

      <Formik
        initialValues={{
          newsTitle: "",
          newsAuthor: "",
          fullNews: "",
          newsHighlights: "",
          isFeaturedNews: "",
          newsImgUrl: "",
          category: "",
        }}
        validationSchema={Yup.object({
          newsTitle: Yup.string().required("Required"),
          newsAuthor: Yup.string().required("Required"),
          fullNews: Yup.string().required("Required"),
          newsHighlights: Yup.string().required("Required"),
          isFeaturedNews: Yup.boolean().required("Required"),
          newsImgUrl: Yup.string().required("Required"),
          category: Yup.string().required("Required").isValid[("xyz", "abc")],
        })}
        onSubmit={async (values) => {
          console.log(values);
          try {
            await $axios.post("/news/create", values);
            console.log("News added successfully.");
            setSuccess(true);
          } catch (error) {
            setFailed(true);
            console.log(error.message, "Cannot add news.");
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="add-news-form-field">
              <h4>
                <label>News Title</label>
              </h4>
              <StyledTextarea
                name="newsTitle"
                {...formik.getFieldProps("newsTitle")}
              />
              {formik.touched.newsTitle && formik.errors.newsTitle ? (
                <div>{formik.errors.newsTitle}</div>
              ) : null}
            </div>

            <div className="add-news-form-field">
              <h4>
                <label>Author</label>
              </h4>
              <TextField
                name="newsAuthor"
                type="text"
                {...formik.getFieldProps("newsAuthor")}
              />
              {formik.touched.newsAuthor && formik.errors.newsAuthor ? (
                <div>{formik.errors.newsAuthor}</div>
              ) : null}
            </div>

            <div className="add-news-form-field">
              <h4>
                <label>News Highlights</label>
              </h4>
              <StyledTextarea
                name="newsHighlights"
                type="text"
                {...formik.getFieldProps("newsHighlights")}
              />
              {formik.touched.newsHighlights && formik.errors.newsHighlights ? (
                <div>{formik.errors.newsHighlights}</div>
              ) : null}
            </div>
            <div className="add-news-form-field">
              <h4>
                <label>Post in Featured Section</label>
              </h4>
              <TextField
                name="isFeaturedNews"
                type="text"
                {...formik.getFieldProps("isFeaturedNews")}
              />
              {formik.touched.isFeaturedNews && formik.errors.isFeaturedNews ? (
                <div>{formik.errors.isFeaturedNews}</div>
              ) : null}
            </div>
            <div className="add-news-form-field">
              <h4>
                <label>News Image</label>
              </h4>
              <TextField
                name="newsImgUrl"
                type="text"
                {...formik.getFieldProps("newsImgUrl")}
              />
              {formik.touched.newsImgUrl && formik.errors.newsImgUrl ? (
                <div>{formik.errors.newsImgUrl}</div>
              ) : null}
            </div>
            <div className="add-news-form-field">
              <h4>
                <label>Category</label>
              </h4>
              <TextField
                name="category"
                type="text"
                {...formik.getFieldProps("category")}
              />
              {formik.touched.category && formik.errors.category ? (
                <div>{formik.errors.category}</div>
              ) : null}
            </div>

            <div className="add-news-form-field">
              <h4>
                <label>Full News</label>
              </h4>
              <StyledTextarea
                name="fullNews"
                {...formik.getFieldProps("fullNews")}
              />
              {formik.touched.fullNews && formik.errors.fullNews ? (
                <div>{formik.errors.fullNews}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewsAddForm;
