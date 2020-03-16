import React, { Component } from "react";
import Auxiliar from "../../hoc/Aux/Auxiliar";
import SeamRequest from "../../components/SeamRequest/SeamRequest";
import Modal from '../../components/UI/Modal/Modal';
import SeamSummary from "../../components/SeamRequest/SeamSummary/SeamSummary";
import { CircularProgress, withStyles } from '@material-ui/core';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-seams';

const userStyles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
});

class SeamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  counter = 2;

  state = {
    customer: {
      customerName: "Steven Rojas",
      telephone: "87074821",
      deliverDate: "14/03/2020"
    },
    seams: [
      {
        id: 1,
        detail: "Vestido de noche",
        priority: 10,
        state: 10,
        cost: 17000
      },
      {
        id: 2,
        detail: "Vestido de dia",
        priority: 4,
        state: 6,
        cost: 17000
      }
    ],
    checkable: false,
    checking: false,
    loading: false
  };

  updateCheckable = (seams) => {
    this.setState({checkable: seams.length > 0});
  }

  addSeamHandler = () => {
    this.counter++;

    const updatedSeams = [
      ...this.state.seams,
      {
        id: this.counter,
        detail: "Vestido de nuevo",
        priority: 4,
        state: 6,
        cost: 17000
      }
    ];

    this.setState({ seams: updatedSeams });
    this.updateCheckable(updatedSeams);
  };

  editSeamHandler = seam => {};

  removeSeamHandle = (id) => {
    const updatedSeams = this.state.seams.filter(x => x.id !== id);

    this.setState({ seams: updatedSeams });
    this.updateCheckable(updatedSeams);
  };

  checkHandler = () => {
    this.setState({checking: true});
  };

  checkCancelHandler = () => {
    this.setState({checking: false});
  };

  checkContinueHandler = () => {
    this.setState({loading: true});

    const seams = {
      seams: this.state.seams,
      customer: this.state.customer
    }
    axios.post('/seams.json', seams)
      .then(response => {
        this.setState({loading: false, checking: false});
      })
      .catch(error => {
        this.setState({loading: false, checking: false});
      });
  };

  render() {
    const { classes } = this.props;

    let seamSummary = <SeamSummary 
      checkCancelled={this.checkCancelHandler}
      checkContinued={this.checkContinueHandler}
      customerName={this.state.customerName} 
      seams={this.state.seams} />

    if (this.state.loading) {
      seamSummary = <div className={classes.root}>
        <CircularProgress />
      </div>
    }

    return (
      <Auxiliar>
        
        <SeamRequest
          customer={this.state.customer}
          seams={this.state.seams}ß
          seamAdded={this.addSeamHandler}
          seamRemoved={this.removeSeamHandle}
          checkable={this.state.checkable}
          check={this.checkHandler}
        />
        <Modal 
          show={this.state.checking}
          modalClosed={this.checkCancelHandler}>
          {seamSummary}
        </Modal>
      </Auxiliar>
    );
  }
}

export default withStyles(userStyles)(withErrorHandler(SeamBuilder, axios));
