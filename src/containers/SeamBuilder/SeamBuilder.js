import React, { Component } from "react";
import Auxiliar from "../../hoc/Auxiliar";
import SeamRequest from "../../components/SeamRequest/SeamRequest";

class SeamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    client: {
      clientName: "Steven Rojas",
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
    ]
  };

  addSeamHandler = seam => {
    const updatedSeams = {
      ...this.state.seams,
      seam
    };

    this.setState({ seams: updatedSeams });
  };

  editSeamHandler = seam => {};

  removeSeamHandle = seam => {};

  render() {
    return (
      <Auxiliar>
        <SeamRequest
          client={this.state.client}
          seams={this.state.seams}
          seamAdded={this.addSeamHandler}
        />
      </Auxiliar>
    );
  }
}

export default SeamBuilder;
