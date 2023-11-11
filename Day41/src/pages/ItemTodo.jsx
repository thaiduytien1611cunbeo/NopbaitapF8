import React, { Component } from "react";
import Contact from "./contact/Contact";

export class ItemTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      isHidden: false,
    };
  }

  handleInput = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  handleDelete = () => {
    console.log(1);
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };

  render() {
    return (
      <>
        <form className="form-item" hidden={this.state.isHidden}>
          <input
            type="text"
            className="input-item"
            defaultValue={this.props.value}
            disabled={this.state.disabled}
          />
          <Contact
            selectInput={this.handleInput}
            deleteForm={this.handleDelete}
          />
        </form>
      </>
    );
  }
}

export default ItemTodo;
