import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Auxiliar from '../../../hoc/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

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
        transition: 'all 0.3s ease-out'
    }
  }));

const modal = props => {
    const classes = modalStyles();

    return(
        <Auxiliar>
            <Backdrop show={props.show} uncheck={props.modalClosed}/>
            <div 
                className={classes.modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliar>
    );
};

export default modal;