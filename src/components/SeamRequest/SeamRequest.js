import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
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
  // console.log(seams);
  // console.log(client);

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <SeamClient clientInfo={client} />
        <form noValidate autoComplete="off">
          <TextField
            className={classes.detalle}
            id="outlined-detalle"
            label="Detalle de la costura"
            variant="outlined"
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="outlined-label-priority">Prioridad</InputLabel>
            <Select
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
            <Select labelId="outlined-label-estado" id="select-outlined-estado">
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
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₡</InputAdornment>
              }
            />
          </FormControl>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </form>
        <Seam seamList={seams} />
      </Grid>
    </Grid>
  );
};

export default seamRequest;
