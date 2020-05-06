import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import SeamBuilder from "../../containers/SeamBuilder/SeamBuilder";
import Checkout from "../../containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Router path="/checkout" component={Checkout} />
            <Router path="/" exact component={SeamBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
