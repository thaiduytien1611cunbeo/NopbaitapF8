import React, { Component } from "react";
import { debounce } from "lodash";
import "../assets/default.scss";
import "../assets/list_layout.scss";
import ItemTodo from "./ItemTodo";
import Loading from "./Loading";

// import app
import { client } from "../script/client.js";
import { config } from "../script/config.js";

const { SERVER_API_AUTH } = config;
client.setUrl(SERVER_API_AUTH);

const checkLogin = async () => {
  const email = client.getCookie("userEmail");
  if (!email) {
    try {
      let email = prompt("Please enter your email!", "example@example.com");

      const { data, response } = await client.get(`/api-key?email=${email}`);

      if (!response.ok) {
        checkLogin();
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
    client.setDataCookie(apiKey, client.getCookie("userEmail"));
  }
};

const getListTodo = async function () {
  await checkLogin();
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
  try {
    const { data, response } = await client.post("/todos", {
      todo,
    });

    if (!response.ok) {
      throw new Error("Có Lỗi");
    }

    return data.data;
  } catch (e) {
    console.log(e);
  }
};

const searchTodo = async function (todo) {
  const url = `/todos?q=${todo}`;
  try {
    const { data, response } = await client.get(url);

    console.log(response);
    console.log(data);

    if (!response.ok) {
      throw new Error("Có Lỗi");
    }

    return data.data.listTodo;
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
      isHiddenLoading: false,
      listTodo: [],
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      valueInput: value,
    });
  };

  handleAddTodo = async (e) => {
    const value = this.state.valueInput;

    if (value.trim()) {
      this.setState({
        listTodo: [await addTodo(value), ...this.state.listTodo],
      });
    }

    e.target.previousSibling.value = "";
  };

  handleSearchTodo = async (e) => {
    const value = this.state.valueInput;

    if (value.trim()) {
      this.setState({
        listTodo: await searchTodo(value),
      });
    }
  };

  async componentDidMount() {
    const listTodo = await getListTodo();
    console.log(listTodo);
    this.setState({
      isHiddenLoading: true,
      listTodo: listTodo,
      isCompleted: true,
    });
  }

  render() {
    return (
      <>
        {console.log("render")}
        <Loading hidden={this.state.isHiddenLoading} />
        <div className="main">
          <h1 className="heading">Welcome to Todo App!</h1>
          <form className="input_btn">
            <input
              type="text"
              className="input"
              placeholder="Thêm một việc làm mới"
              onChange={this.handleChange}
            />
            <button className="btn btn-add" onClick={this.handleAddTodo}>
              Thêm mới
            </button>
            <button className="btn btn-search" onClick={this.handleSearchTodo}>
              Tìm Kiếm
            </button>
          </form>
          <div id="root-list">
            {this.state.isEmpty ? (
              <div className="item-space">Không có todo</div>
            ) : (
              <div className="list-todo">
                {this.state.listTodo.map(({ _id, todo, isCompleted }) => (
                  <ItemTodo
                    key={_id}
                    value={todo}
                    completed={isCompleted}
                    id={_id}
                  />
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
