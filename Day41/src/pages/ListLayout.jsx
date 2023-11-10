import React, { Component } from "react";
import "../assets/list_layout.scss";
import ItemTodo from "./ItemTodo";
import { app } from "../script/app";

console.log(await app.getListTodo());
export class ListLayout extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return this.state.isEmpty ? (
      <div className="item-space">Không có todo</div>
    ) : (
      <div className="list-todo">
        {this.state.listTodo.map(({ id, todo }) => (
          <ItemTodo key={id} value={todo} />
        ))}
      </div>
    );
  }
}

export default ListLayout;
