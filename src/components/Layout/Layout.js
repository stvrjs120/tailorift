import React from "react";
import Auxiliar from "../../hoc/Auxiliar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const layout = props => (
  <Auxiliar>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Tailorift
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <main>{props.children}</main>
  </Auxiliar>
);

export default layout;
