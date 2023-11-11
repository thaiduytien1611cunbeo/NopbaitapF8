import React, { Component } from "react";
import { client } from "../script/client.js";

const postDelete = async function (id) {
  console.log(id);
  const url = `/todos/${id}`;
  try {
    const { data, response } = await client.delete(url);

    console.log(response);
    console.log(data);

    if (!response.ok) {
      throw new Error("Có Lỗi");
    }
  } catch (e) {
    console.log(e);
  }
};

export class ItemTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      isClickFix: false,
      style: {
        textDecoration: "",
      },
    };
  }

  handleInput = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  handleClickFix = () => {
    this.handleInput();
    this.setState({
      isClickFix: !this.state.isClickFix,
    });
  };

  handleDelete = (e) => {
    let element = e.target.parentNode;
    while (!element.classList.contains("form-item")) {
      element = element.parentNode;
    }

    postDelete(element.id);

    element.remove();
  };

  handleClickCheckBox = (e) => {
    const element = e.target;
    const label = element.previousSibling;
    if (element.checked) {
      label.innerText = "Completed";
      this.setState = {
        style: {
          textDecoration: "line-through",
        },
      };
    } else {
      label.innerText = "Not Completed";
      this.setState = {
        style: {
          textDecoration: "",
        },
      };
    }
  };

  render() {
    console.log("render");
    return (
      <>
        <form className="form-item" id={this.props.id}>
          <input
            type="text"
            className="input-item"
            defaultValue={this.props.value}
            disabled={this.state.disabled}
            style={this.state.style}
          />
          {this.state.isClickFix ? (
            <>
              <div className="item-contact item-contact-fix" id="item-contact">
                <div className="contact-left">
                  <label htmlFor="check">Not Completed</label>
                  <input
                    type="checkbox"
                    className="input-check"
                    id="check"
                    onClick={this.handleClickCheckBox}
                  />
                </div>
                <div className="contact-right">
                  <button className="btn-exit" onClick={this.handleClickFix}>
                    Thoát
                  </button>
                  <button className="btn-fix" onClick={this.handleClickFix}>
                    Sửa
                  </button>
                  <button className="btn-delete" onClick={this.handleDelete}>
                    Xóa
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="item-contact" id="item-contact">
                <button className="btn-fix" onClick={this.handleClickFix}>
                  Sửa
                </button>

                <button className="btn-delete" onClick={this.handleDelete}>
                  Xóa
                </button>
              </div>
            </>
          )}
        </form>
      </>
    );
  }
}

export default ItemTodo;
