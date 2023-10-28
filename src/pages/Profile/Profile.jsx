import React from "react";
import { useQuery } from "react-query";
import { getReporterDetails } from "../../../lib/apis/user-apis";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import ChangePassword from "../../components/ChangePassword";

const Profile = () => {
  const userId = localStorage.userId;

  const { data: reporterData } = useQuery({
    queryKey: ["reporter-details"],
    queryFn: () => getReporterDetails(userId),
  });

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
        Your profile
      </Typography>
      <Grid container>
        <Grid item>
          <Typography>Name : </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ textTransform: "capitalize", padding: "0 10px" }}>
            {reporterData?.data?.firstName} {reporterData?.data?.middleName}{" "}
            {reporterData?.data?.lastName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>Email :</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ textTransform: "lowercase", padding: "0 10px" }}>
            {reporterData?.data?.email}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>Gender :</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ textTransform: "capitalize", padding: "0 10px" }}>
            {reporterData?.data?.gender}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>Role :</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ textTransform: "capitalize", padding: "0 10px" }}>
            {reporterData?.data?.role}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ padding: 1 }} />
      <Grid>
        <Typography variant="h6" sx={{ padding: "10px 0" }}>
          Add profile image
        </Typography>
        <input type="file"></input>
        <Button variant="outlined">Upload</Button>
      </Grid>
      <Divider sx={{ padding: 1 }} />
      <Grid>
        <ChangePassword />
      </Grid>
      <Divider sx={{ padding: 1 }} />
    </Box>
  );
};

export default Profile;
