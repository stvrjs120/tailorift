import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const formStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        width: `100%`,
      },
      [theme.breakpoints.up("md")]: {
        width: 245,
      },
    },
  },
}));

const seamClient = (props) => {
  const classes = formStyles();
  const { clientInfo } = props;

  return (
    <form className={classes.root} noValidate>
      <TextField
        id="standard-basic"
        label="Nombre del cliente"
        value={clientInfo.clientName}
      />
      <TextField
        id="standard-basic"
        label="Telefono"
        value={clientInfo.telephone}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Fecha de entrega"
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </form>
  );
};

export default seamClient;
