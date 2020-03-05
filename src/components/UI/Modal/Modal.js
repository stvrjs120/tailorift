import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles(theme => ({
    modal: {
        [theme.breakpoints.up('sm')]: {
            width: 500,
            left: `calc(50% - 250px)`
        },

        position: `fixed`,
        zIndex: `500`,
        backgroundColor: `white`,
        width: `70%`,
        border: `1px solid #CCC`,
        boxShadow: `1px 1px 1px black`,
        padding: `16px`,
        left: `15%`,
        top: `30%`,
        boxSizing: `border-box`,
        transition: `all 0.3 ease-out`
    }
  }));

const modal = props => {
    const classes = modalStyles();

    return(
        <div className={classes.modal}>
            {props.children}
        </div>
    );
};

export default modal;