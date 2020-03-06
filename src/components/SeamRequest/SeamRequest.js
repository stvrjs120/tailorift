import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  Grid,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from '@material-ui/icons/Check';
import SeamClient from "./SeamClient/SeamClient";
import Seam from "./Seams/Seam";

const formStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        width: `100%`
      },
      [theme.breakpoints.up("md")]: {
        width: 245
      }
    }
  },
  detalle: {
    margin: theme.spacing(1),
    width: `98%`
  },
  formControl: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: `100%`
    },
    [theme.breakpoints.up("md")]: {
      width: 245
    }
  }
}));

const seamRequest = props => {
  const classes = formStyles();
  const seams = props.seams;
  const client = props.client;
  let newSeam = {
    detail: "",
    priority: "",
    status: 10,
    cost: 0
  };
  // console.log(seams);
  // console.log(client);

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <SeamClient clientInfo={client} />
        <form noValidate autoComplete="off">
          <TextField
            value={newSeam.detail}
            className={classes.detalle}
            id="outlined-detalle"
            label="Detalle de la costura"
            variant="outlined"
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="outlined-label-priority">Prioridad</InputLabel>
            <Select
              value={newSeam.priority}
              labelId="outlined-label-priority"
              id="outlined-select-priority"
            >
              <MenuItem value="">
                <em>Ninguna</em>
              </MenuItem>
              <MenuItem value={10}>Baja</MenuItem>
              <MenuItem value={20}>Media</MenuItem>
              <MenuItem value={30}>Alta</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="outlined-label-estado">Estado</InputLabel>
            <Select
              value={newSeam.status}
              labelId="outlined-label-estado"
              id="select-outlined-estado"
            >
              <MenuItem value={10}>Nuevo</MenuItem>
              <MenuItem value={20}>En proceso</MenuItem>
              <MenuItem value={30}>En espera</MenuItem>
              <MenuItem value={40}>Completado</MenuItem>
              <MenuItem value={40}>Entregado</MenuItem>
              <MenuItem value={40}>Anulado</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-adornment-amount">Costo</InputLabel>
            <OutlinedInput
              value={newSeam.cost}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₡</InputAdornment>
              }
            />
          </FormControl>
          <Fab
            onClick={() => props.seamAdded()}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
          <Fab
            onClick={props.check}
            color="secondary"
            aria-label="check"
            disabled={!props.checkable}
          >
            <CheckIcon />
          </Fab>
        </form>
        <List component="nav" aria-label="secondary mailbox folders">
          <Seam seamList={seams} clientName={client.clientName} removeSeam={props.seamRemoved} />
        </List>
      </Grid>
    </Grid>
  );
};

export default seamRequest;
