import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles(theme => ({
    backdrop: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '100',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }));

const backdrop = props => {
    const classes = modalStyles();

    return(
        props.show ? <div className={classes.backdrop} onClick={props.uncheck}></div> : null
    );
};

export default backdrop;