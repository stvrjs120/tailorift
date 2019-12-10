import React, { Component } from "react";
import Layout from "../Layout/Layout";
import SeamBuilder from "../../containers/SeamBuilder/SeamBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <SeamBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
