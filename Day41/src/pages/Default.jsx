import React, { Component } from "react";
import "../assets/default.scss";
import ListLayout from "./ListLayout";

export class Default extends Component {
  constructor() {
    super();
  }

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
            />
            <button className="btn">Thêm mới</button>
          </form>
          <div id="root-list">
            <ListLayout />
          </div>
        </div>
      </>
    );
  }
}

export default Default;
