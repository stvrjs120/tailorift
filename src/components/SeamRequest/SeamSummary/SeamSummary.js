import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Auxiliar';
import Button from '../../UI/Button/Button';
import { withStyles } from '@material-ui/core/styles';

const seamSummaryStyles = theme => ({
    controls: {
        '& > *': {
          margin: theme.spacing(1),
        },

        textAlign: 'right'
      }
  });

class SeamSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {
        const { classes } = this.props;

        const seamsSummary = this.props.seams
            .map((seam, index) => {
                return <li key={index}>{index} - {seam.detail}</li>
            });
            
        return (
            <Aux>
                <h3>Resumen de Costura</h3>
                <p>{this.props.clientName}</p>
                <ul>
                    {seamsSummary}
                </ul>
                <div className={classes.controls}>
                    <Button
                        event={this.props.checkCancelled} 
                        variant="outlined">
                        Cancelar
                    </Button>
                    <Button 
                        event={this.props.checkContinued}
                        variant="contained" 
                        color="primary">
                        Crear
                    </Button>
                </div>
            </Aux>
        );
    }
}

export default withStyles(seamSummaryStyles)(SeamSummary);