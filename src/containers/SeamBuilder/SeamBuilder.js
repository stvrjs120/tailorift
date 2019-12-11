import React, { Component } from "react";
import Auxiliar from "../../hoc/Auxiliar";
import SeamRequest from "../../components/SeamRequest/SeamRequest";

class SeamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    data: []
  };

  render() {
    return (
      <Auxiliar>
        <SeamRequest seams={this.state.data} />
      </Auxiliar>
    );
  }
}

export default SeamBuilder;
