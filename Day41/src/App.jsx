import React, { Component } from "react";
import Default from "./pages/Default";

export class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: false,
    // };
  }

  render() {
    return (
      <>
        <Default />
        {/* {this.state.isLoading && <Loading />} */}
      </>
    );
  }
}

export default App;
