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

  handleClick = () => {
    this.props.selectInput();
    this.setState({
      isClickFix: !this.state.isClickFix,
    });
  };

  render() {
    return this.state.isClickFix ? (
      <ContactFix
        handleClick={this.handleClick}
        deleteForm={this.props.deleteForm}
      />
    ) : (
      <ContactDefault
        handleClick={this.handleClick}
        deleteForm={this.props.deleteForm}
      />
    );
  }
}

export default Contact;
