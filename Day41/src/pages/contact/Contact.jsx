import React, { Component } from "react";
import ContactFix from "./ContactFix";
import ContactDefault from "./ContactDefault";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickFix: false,
    };
  }

  handleClickFix = () => {
    this.setState({
      isClickFix: true,
    });
  };
  handleClickExit = () => {
    this.setState({
      isClickFix: false,
    });
  };

  render() {
    return this.state.isClickFix ? (
      <ContactFix handleClickExit={this.handleClickExit} />
    ) : (
      <ContactDefault handleClickFix={this.handleClickFix} />
    );
  }
}

export default Contact;
