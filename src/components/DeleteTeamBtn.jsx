import React from "react";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, Popover, Stack, Typography } from "@mui/material";

// ===menu====
import { useMutation, useQueryClient } from "react-query";
import { deleteTeam } from "../../lib/apis/teams-apis";

//icons

const DeleteTeamBtn = ({ teamId }) => {
  const [expand, setExpand] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleExpand = (event) => {
    setExpand(!expand);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteTeamMutation = useMutation({
    mutationKey: ["delete-team"],
    mutationFn: () => deleteTeam(teamId),
    onSuccess: () => {
      queryClient.invalidateQueries("teams-list");
    },
  });

  return (
    <Button variant="outlined">
      <DeleteIcon onClick={handleClick} />

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
            Are you sure you want to delete?
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
                deleteTeamMutation.mutate();
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
    </Button>
  );
};

export default DeleteTeamBtn;
