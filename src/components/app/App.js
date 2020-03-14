import React, { Component } from "react";
import Layout from '../../hoc/Layout/Layout';
import SeamBuilder from "../../containers/SeamBuilder/SeamBuilder";

class App extends Component {
  
  render() {
    return (
      <div>
        <Layout>
          <SeamBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
