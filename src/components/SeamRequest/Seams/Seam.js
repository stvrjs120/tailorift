import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const seam = props => {
  const seams = props.seamList;
  const clientName = props.clientName;

  return (
    <div>
      {seams.map((seam, index) => (
        <ListItem key={"newSeam" + index} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={seam.detail}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {clientName}
                </Typography>
                {" — Nuevo"}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </div>
  );
};

export default seam;
