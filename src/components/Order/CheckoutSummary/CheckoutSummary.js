import React from "react";

import { Button, makeStyles } from "@material-ui/core";
import Seams from "../../SeamRequest/Seams/Seams";

const ckSummStyles = makeStyles((theme) => ({
  root: {
    textAlign: `center`,
    width: `80%`,
    margin: `auto`,
    [theme.breakpoints.down("sm")]: {
      width: `500px`,
    },
  },
}));

const checkoutSummary = (props) => {
  const classes = ckSummStyles();

  return (
    <div className={classes.root}>
      <h1>Resumen de costuras</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Seams
          seamList={props.seams}
          clientName={props.clientName}
          removeSeam={props.seamRemoved}
        />
      </div>
      <Button variant="contained" color="secondary">
        Cancelar
      </Button>
      <Button variant="contained" color="primary">
        Crear
      </Button>
    </div>
  );
};

export default checkoutSummary;
