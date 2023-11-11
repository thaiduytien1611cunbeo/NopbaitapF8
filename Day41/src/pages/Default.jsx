import React, { Component } from "react";
import "../assets/default.scss";
import "../assets/list_layout.scss";
import ItemTodo from "./ItemTodo";
import Loading from "../pages/Loading.jsx";

// import app
import { client } from "../script/client.js";
import { config } from "../script/config.js";

const { SERVER_API_AUTH } = config;
let listTodo;
client.setUrl(SERVER_API_AUTH);

const checkLogin = async () => {
  const email = client.getCookie("userEmail");
  if (!email) {
    try {
      let email = prompt("Please enter your email!", "example@example.com");
      const { data, response } = await client.get(`/api-key?email=${email}`);

      if (!response.ok) {
        throw new Error("Email không hợp lệ");
      }

      const apiKey = data.data.apiKey;
      client.setApiKey(apiKey);
      client.setDataCookie(apiKey, email);
    } catch (e) {
      console.log(e);
    }
  } else {
    const url = `/api-key?email=${client.getCookie("userEmail")}`;
    const { data, response } = await client.get(url);
    const apiKey = data.data.apiKey;
    client.setApiKey(apiKey);
  }

  return getListTodo();
};

const getListTodo = async function () {
  try {
    const { data, response } = await client.get(`/todos`);

    const listPost = data.data.listTodo;
    if (!response.ok) {
      throw new Error("Email không hợp lệ");
    }

    return listPost;
  } catch (e) {
    console.log(e);
  }
};

const addTodo = async function (todo) {
  console.log(todo);
  try {
    const { data, response } = await client.post("/todos", {
      todo,
    });

    console.log(response);
    console.log(data);

    if (!response.ok) {
      throw new Error("Có Lỗi");
    }
  } catch (e) {
    console.log(e);
  }
};

export class Default extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueInput: "",
      isEmpty: false,
      isLoading: false, //(true)
      listTodo: [],
    };
  }

  handleOnInput = (e) => {
    const value = e.target.value;
    this.setState({
      valueInput: value,
    });
  };

  handleAddTodo = (e) => {
    const value = this.state.valueInput;
    addTodo(value);
    e.target.previousSibling.value = "";

    const array = this.state.listTodo;
    array.push({
      _id: 3,
      todo: this.state.valueInput,
    });

    if (this.state.valueInput.trim()) {
      this.setState({
        listTodo: array,
      });
    }
  };

  async componentDidMount() {
    listTodo = await checkLogin();

    this.setState({
      listTodo: listTodo,
      isLoading: false,
    });
  }

  render() {
    return (
      <>
        <Loading hidden={this.state.isLoading} />
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
                {this.state.listTodo.map(({ _id, todo }) => (
                  <ItemTodo key={_id} value={todo} id={_id} />
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
