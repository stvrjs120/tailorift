import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Auxiliar from '../../../hoc/Aux/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

const modalStyles = theme => ({
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
  });

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        const { classes } = this.props;

        return (
            <Auxiliar>
            <Backdrop show={this.props.show} uncheck={this.props.modalClosed}/>
            <div 
                className={classes.modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Auxiliar>
        );
    }
}

export default withStyles(modalStyles)(Modal);