import { Button, Grid, Popover, Stack, Typography } from "@mui/material";
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteNews } from "../../../lib/apis/news-apis";

const NewsCard = ({
  _id,
  newsTitle,
  newsAuthor,
  fullNews,
  newsHighlights,
  isFeaturedNews,
  newsImgUrl,
  category,
  tags,
  addedDate,
}) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const deleteNewsMutation = useMutation({
    mutationKey: ["delete-news"],
    mutationFn: () => deleteNews(_id),
    onSuccess: () => {
      queryClient.invalidateQueries("reporter-news");
    },
  });
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid sx={{ padding: "1rem" }}>
          <Typography sx={{ p: 2 }}>
            Are you sure you want to delete this product?
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              onClick={() => {
                handleClose();
                deleteNewsMutation.mutate();
              }}
            >
              Yes
            </Button>
            <Button variant="outlined" onClick={() => handleClose()}>
              No
            </Button>
          </Stack>
        </Grid>
      </Popover>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: "10px" }}>
        <img
          src={newsImgUrl}
          alt=""
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            textTransform: "capitalize",
            padding: "5px 10px",
          }}
        >
          {newsTitle.slice(0, 50)}
        </Typography>

        <Typography sx={{ fontSize: "10pt", padding: "0 10px" }}>
          {addedDate.split("T")[0]}
        </Typography>
        <Typography sx={{ padding: "5px 10px" }}>
          {newsHighlights.slice(0, 100)}
        </Typography>
        <Button
          variant="outlined"
          sx={{ margin: 1 }}
          onClick={() => navigate(`edit/${_id}`)}
        >
          <EditIcon />
        </Button>

        <Button variant="outlined" onClick={(_id) => handleClick(_id)}>
          <DeleteIcon />
        </Button>
      </Grid>
    </>
  );
};

export default NewsCard;
