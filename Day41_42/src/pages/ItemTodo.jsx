import React, { Component } from "react";
import { debounce } from "lodash";
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

const updateTodo = async function (id, body) {
  const url = `/todos/${id}`;

  try {
    console.log(body);
    const { data, response } = await client.patch(url, body);

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
      isCompleted: false,
      updateValue: props.value,
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

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      updateValue: value,
    });
  };

  handleClickUpdate = (e) => {
    this.handleInput();
    this.setState({
      isClickFix: !this.state.isClickFix,
    });

    updateTodo(this.props.id, {
      isCompleted: this.state.isCompleted,
      todo: this.state.updateValue,
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

    if (element.checked) {
      this.setState({
        isCompleted: true,
        style: {
          textDecoration: "line-through",
        },
      });
    } else {
      this.setState({
        isCompleted: false,
        style: {
          textDecoration: "",
        },
      });
    }
  };

  render() {
    // console.log("render");
    return (
      <>
        <form className="form-item" id={this.props.id}>
          <input
            type="text"
            className="input-item"
            defaultValue={this.state.updateValue}
            onChange={debounce(() => {
              console.log(this.handleChange);
              this.handleChange;
            }, 200)}
            disabled={this.state.disabled}
            style={this.state.style}
          />
          {this.state.isClickFix ? (
            <>
              <div className="item-contact item-contact-fix" id="item-contact">
                <div className="contact-left">
                  <label>
                    {this.state.isCompleted ? "Completed" : "Not Completed"}
                    <input
                      type="checkbox"
                      className="input-check"
                      onClick={this.handleClickCheckBox}
                      defaultChecked={this.state.isCompleted}
                    />
                  </label>
                </div>
                <div className="contact-right">
                  <button className="btn-exit" onClick={this.handleClickFix}>
                    Thoát
                  </button>
                  <button className="btn-fix" onClick={this.handleClickUpdate}>
                    Update
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
