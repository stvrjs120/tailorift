import React from 'react';
import Aux from '../../../hoc/Auxiliar';
import Button from '../../UI/Button/Button';
import { makeStyles } from '@material-ui/core/styles';

const seamSummaryStyles = makeStyles(theme => ({
    controls: {
        '& > *': {
          margin: theme.spacing(1),
        },

        textAlign: 'right'
      }
  }));

const seamSummary = props => {
    const classes = seamSummaryStyles();

    const seamsSummary = props.seams
        .map((seam, index) => {
            return <li key={index}>{index} - {seam.detail}</li>
        });
    
    return (
        <Aux>
            <h3>Resumen de Costura</h3>
            <p>{props.clientName}</p>
            <ul>
                {seamsSummary}
            </ul>
            <div className={classes.controls}>
                <Button
                    event={props.checkCancelled} 
                    variant="outlined">
                    Cancelar
                </Button>
                <Button 
                    event={props.checkContinued}
                    variant="contained" 
                    color="primary">
                    Crear
                </Button>
            </div>
        </Aux>
    );
};

export default seamSummary;