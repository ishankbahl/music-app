import React, { Component } from 'react';
import WrappedComponent from "../../ComponentWrappers";

import { Navbar, Posts } from "../../components";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default WrappedComponent(App);