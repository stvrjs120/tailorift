import React from 'react';
import { Button } from '@material-ui/core';

const button = (props) => {
    return(
        <Button 
            onClick={props.event}
            variant={props.variant} 
            color={props.color}
        >
            {props.children}
        </Button>
    );
};

export default button;