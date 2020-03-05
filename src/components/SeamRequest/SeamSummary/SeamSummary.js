import React from 'react';
import Aux from '../../../hoc/Auxiliar';

const seamSummary = props => {
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
        </Aux>
    );
};

export default seamSummary;