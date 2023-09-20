import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Button, Grid, Box, Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import "./text-area-full-news.css";
import axios from "axios";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../../redux-store/snackbarSlice";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addNews } from "../../../lib/apis/news-apis";

const NewsAddForm = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [localUrl, setLocalUrl] = useState(null);
  const [newsImg, setNewImg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewsMutation = useMutation({
    mutationKey: ["add-news"],
    mutationFn: (values) => addNews(values),
    onSuccess: (response) =>
      dispatch(
        openSuccessSnackbar(
          response?.data?.message || "News added successfully."
        )
      ),
    onError: (error) => {
      dispatch(
        openErrorSnackbar(
          error?.message || "Something went wrong, cannot add news."
        )
      );
    },
  });

  return (
    <Grid>
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
          newsTitle: Yup.string().required("News title is required."),
          fullNews: Yup.string().required("Full news is required."),
          newsHighlights: Yup.string().required("News highlights is required."),
          isFeaturedNews: Yup.boolean().required("Required"),

          category: Yup.string().required("Required").isValid[("xyz", "abc")],
        })}
        onSubmit={async (values) => {
          let imageUrl = "";

          //playerImage is image that we take as input
          if (newsImg) {
            //dmtrulbdo - cloudname from cloudinary
            const cloudName = "dmtrulbd0";
            // creates form data object
            const data = new FormData();
            data.append("file", newsImg);
            data.append("upload_preset", "vcyz8tr5");
            data.append("cloud_name", cloudName);
            console.log("data here", data);

            try {
              const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                data
              );

              imageUrl = res.data.secure_url;
            } catch (error) {
              dispatch(openErrorSnackbar("Image upload failed."));
            }
          }
          // this is where we store the image as url - check database model - name same
          values.newsAuthor = localStorage.getItem("userId");
          values.newsImgUrl = imageUrl;
          console.log(values);

          addNewsMutation.mutate(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ margin: "10px 0" }}
            >
              <TextField
                fullWidth
                required
                name="newsTitle"
                label="News Title"
                variant="outlined"
                {...formik.getFieldProps("newsTitle")}
              />
              {formik.touched.newsTitle && formik.errors.newsTitle ? (
                <div>{formik.errors.newsTitle}</div>
              ) : null}
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ margin: "10px 0", display: "flex" }}
            >
              <Grid>
                <TextField
                  fullWidth
                  required
                  name="isFeaturedNews"
                  id="outlined-basic"
                  label="Is featured news"
                  variant="outlined"
                  type="text"
                  {...formik.getFieldProps("isFeaturedNews")}
                />
                {formik.touched.isFeaturedNews &&
                formik.errors.isFeaturedNews ? (
                  <div>{formik.errors.isFeaturedNews}</div>
                ) : null}
              </Grid>
              <Grid sx={{ padding: "0 10px" }}>
                <TextField
                  fullWidth
                  required
                  name="category"
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  {...formik.getFieldProps("category")}
                />
                {formik.touched.category && formik.errors.category ? (
                  <div>{formik.errors.category}</div>
                ) : null}
              </Grid>
              <Grid sx={{ padding: "0 10px" }}>
                <TextField
                  fullWidth
                  name="tags"
                  id="outlined-basic"
                  label="tags"
                  variant="outlined"
                  {...formik.getFieldProps("tags")}
                />
                {formik.touched.tags && formik.errors.tags ? (
                  <div>{formik.errors.tags}</div>
                ) : null}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ margin: "10px 0" }}
            >
              <TextareaAutosize
                minRows={1}
                className="text-area-full-news"
                placeholder="News highlights"
                name="newsHighlights"
                {...formik.getFieldProps("newsHighlights")}
              />

              {formik.touched.newsHighlights && formik.errors.newsHighlights ? (
                <div>{formik.errors.newsHighlights}</div>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ margin: "10px 0" }}
            >
              <TextareaAutosize
                minRows={10}
                className="text-area-full-news"
                placeholder="Full news..."
                name="fullNews"
                {...formik.getFieldProps("fullNews")}
              />

              {formik.touched.fullNews && formik.errors.fullNews ? (
                <div>{formik.errors.fullNews}</div>
              ) : null}
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="outlined" component="label">
                    Upload News Image
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(event) => {
                        const newsImg = event.target.files[0];
                        setLocalUrl(URL.createObjectURL(newsImg));
                        setNewImg(newsImg);
                      }}
                    />
                  </Button>
                </Stack>
                <Box sx={{ width: "100%", padding: 1 }}>
                  {localUrl && (
                    <img
                      src={localUrl}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "1px solid #999",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid>
                <Button variant="contained" type="submit">
                  Add News
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default NewsAddForm;
