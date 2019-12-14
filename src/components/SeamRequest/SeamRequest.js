import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  Grid
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

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
  const rows = props.seams;
  console.log(rows);

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <form className={classes.root} noValidate>
          <TextField id="standard-basic" label="Nombre del cliente" />
          <TextField id="standard-basic" label="Telefono" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha de entrega"
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </form>
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
        </form>
        <div className={classes.root}>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Pedido 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pedido 2" />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default seamRequest;
