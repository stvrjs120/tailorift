import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const seams = (props) => {
  const seamsList = props.seamList;
  const clientName = props.clientName;

  return (
    <div>
      {seamsList.map((seam) => (
        <ListItem key={seam.id} alignItems="flex-start">
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
            <IconButton
              onClick={() => props.removeSeam(seam.id)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </div>
  );
};

export default seams;
