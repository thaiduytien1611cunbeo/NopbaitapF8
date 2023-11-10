import React, { Component } from "react";
import Default from "./pages/Default";
import Loading from "./pages/Loading";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <>
        <Default />
        {this.state.isLoading && <Loading />}
      </>
    );
  }
}

export default App;
