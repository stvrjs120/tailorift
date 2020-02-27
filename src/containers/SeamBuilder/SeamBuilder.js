import React, { Component } from "react";
import Auxiliar from "../../hoc/Auxiliar";
import SeamRequest from "../../components/SeamRequest/SeamRequest";

class SeamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  counter = 2;

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
  };

  editSeamHandler = seam => {};

  removeSeamHandle = (id) => {
    const updatedSeams = this.state.seams.filter(x => x.id !== id);

    this.setState({ seams: updatedSeams });
  };

  render() {
    return (
      <Auxiliar>
        <SeamRequest
          client={this.state.client}
          seams={this.state.seams}
          seamAdded={this.addSeamHandler}
          seamRemoved={this.removeSeamHandle}
        />
      </Auxiliar>
    );
  }
}

export default SeamBuilder;
