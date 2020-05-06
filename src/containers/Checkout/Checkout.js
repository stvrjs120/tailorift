import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    client: {
      clientName: "Steven Rojas",
      telephone: "87074821",
      deliverDate: "14/03/2020",
    },
    seams: [
      {
        id: 1,
        detail: "Vestido de noche",
        priority: 10,
        state: 10,
        cost: 17000,
      },
      {
        id: 2,
        detail: "Vestido de dia",
        priority: 4,
        state: 6,
        cost: 17000,
      },
    ],
  };

  removeSeamHandle = (id) => {
    const updatedSeams = this.state.seams.filter((x) => x.id !== id);

    this.setState({ seams: updatedSeams });
    this.updateCheckable(updatedSeams);
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          seams={this.state.seams}
          clientName={this.state.client.clientName}
          seamRemoved={this.removeSeamHandle}
        />
      </div>
    );
  }
}

export default Checkout;
