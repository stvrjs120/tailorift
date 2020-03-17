import React, { Component } from "react";
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
  Fab,
  withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from '@material-ui/icons/Check';
import Seam from "./Seams/Seam";
import axios from "../../axios-seams";

const formStyles = theme => ({
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
});

class SeamRequest extends Component {
  // const classes = formStyles();
  // const seams = props.seams;
  // const customer = props.customer;
  // let newSeam = {
  //   detail: "",
  //   priority: "",
  //   status: 10,
  //   cost: 0
  // };
  state = {
    priorities: null,
    newSeam: {
      detail: "",
      priority: "",
      status: 10,
      cost: 0
    }
  };

  componentDidMount() {
    axios.get('https://react2seams.firebaseio.com/priorities.json')
      .then(response => {
        this.setState({priorities: response.data});
      })
  }

  render() {
    const { classes } = this.props;
    const priorities = this.state.priorities;

    let jsxPriorities = Object.keys(priorities)
      .map(igKey => {
        return [...Array( priorities[igKey] )].map( ( _, i) => {
          return <MenuItem key={igKey+i} value={10}>Baja</MenuItem>
        })
      });

    return (
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          {/* <SeamCustomer customerInfo={customer} /> */}
          <form noValidate autoComplete="off">
            <TextField
              value={this.state.newSeam.detail}
              className={classes.detalle}
              id="outlined-detalle"
              label="Detalle de la costura"
              variant="outlined"
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="outlined-label-priority">Prioridad</InputLabel>
              <Select
                value={this.state.newSeam.priority}
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
                value={this.state.newSeam.status}
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
                value={this.state.newSeam.cost}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">₡</InputAdornment>
                }
              />
            </FormControl>
            <Fab
              onClick={() => this.props.seamAdded()}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
            <Fab
              onClick={this.props.check}
              color="secondary"
              aria-label="check"
              disabled={!this.props.checkable}
            >
              <CheckIcon />
            </Fab>
          </form>
          <List component="nav" aria-label="secondary mailbox folders">
            <Seam seamList={this.props.seams} customerName={this.props.customer.customerName} removeSeam={this.props.seamRemoved} />
          </List>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(formStyles)(SeamRequest);
