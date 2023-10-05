import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTeamDetails } from "../../../lib/apis/teams-apis";
import TeamSquad from "./TeamSquad";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TeamsDetails = () => {
  const [value, setValue] = React.useState(0);
  const params = useParams();
  const teamId = params.id;

  // team details
  const { data } = useQuery({
    queryKey: ["team-details"],
    queryFn: () => getTeamDetails(teamId),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="container">
      <Box
        sx={{
          padding: "20px",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          // height: { xs: "100px", sm: "150px", md: "200px", xl: "200px" },
        }}
      >
        <Box
          className="container"
          sx={{ display: { xs: "flex" }, alignItems: "center" }}
        >
          <img
            src={data?.data?.teamLogo}
            alt={data?.data.teamName}
            style={{ width: "70px" }}
          />
          <Typography variant="h4" sx={{ fontWeight: 900, padding: 2 }}>
            {data?.data?.teamName}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: "#D0E7D2",
            padding: "5px 20px",
            borderRadius: "50px",
          }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Overview" {...a11yProps(0)} sx={{ color: "#008849" }} />
            <Tab label="Squad" {...a11yProps(1)} sx={{ color: "#008849" }} />
            <Tab label="Stats" {...a11yProps(2)} sx={{ color: "#008849" }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography sx={{ textTransform: "uppercase", fontWeight: 700 }}>
            {data?.data?.teamName}
          </Typography>
          <Typography>Address : {data?.data?.address}</Typography>
          <Typography>Manager : {data?.data?.manager}</Typography>
          <Typography>Coach : {data?.data?.coach}</Typography>
          <Typography>Website : {data?.data?.url}</Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TeamSquad tId={teamId} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Stats
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default TeamsDetails;
