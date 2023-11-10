import React, { Component } from "react";
import Contact from "./contact/Contact";

export class ItemTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <form className="form-item">
          <input
            type="text"
            className="input-item"
            defaultValue={this.props.value}
          />
          <Contact />
        </form>
      </>
    );
  }
}

export default ItemTodo;
