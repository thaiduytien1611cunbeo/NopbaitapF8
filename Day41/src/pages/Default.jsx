import React, { Component } from "react";
import "../assets/default.scss";
import "../assets/list_layout.scss";
import ItemTodo from "./ItemTodo";

export class Default extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueInput: "",
      isEmpty: false,
      listTodo: [
        {
          id: 1,
          todo: "adjs",
        },
        {
          id: 2,
          todo: "sffsfsf",
        },
      ],
    };
  }

  handleOnInput = (e) => {
    const value = e.target.value;
    this.setState({
      valueInput: value,
    });
  };

  handleAddTodo = () => {
    const array = this.state.listTodo;
    array.push({
      id: 3,
      todo: this.state.valueInput,
    });
    console.log(array);
    if (this.state.valueInput.trim()) {
      this.setState({
        listTodo: array,
      });
    }
  };

  render() {
    return (
      <>
        <div className="main">
          <h1 className="heading">Welcome to Todo App!</h1>
          <form className="input_btn">
            <input
              type="text"
              className="input"
              placeholder="Thêm một việc làm mới"
              onInput={this.handleOnInput}
            />
            <button className="btn" onClick={this.handleAddTodo}>
              Thêm mới
            </button>
          </form>
          <div id="root-list">
            {this.state.isEmpty ? (
              <div className="item-space">Không có todo</div>
            ) : (
              <div className="list-todo">
                {this.state.listTodo.map(({ id, todo }) => (
                  <ItemTodo key={id} value={todo} />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Default;
