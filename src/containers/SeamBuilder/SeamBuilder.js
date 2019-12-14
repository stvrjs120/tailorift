import React, { Component } from "react";
import Auxiliar from "../../hoc/Auxiliar";
import SeamRequest from "../../components/SeamRequest/SeamRequest";

class SeamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    seams: []
  };

  addSeamHandler = (seam) => {
    const updatedSeams = {
      ...this.state.seams,
      seam
    };

    this.setState({seams: updatedSeams});
  }

  editSeamHandler = (seam) => {

  }

  removeSeamHandle = (seam) => {

  }

  render() {
    return (
      <Auxiliar>
        <SeamRequest seams={this.state.seams} />
      </Auxiliar>
    );
  }
}

export default SeamBuilder;
