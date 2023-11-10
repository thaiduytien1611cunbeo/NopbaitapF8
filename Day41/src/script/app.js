import { client } from "./client.js";
import { config } from "./config.js";

const { SERVER_API_AUTH, PAGE_LIMIT } = config;

client.setUrl(SERVER_API_AUTH);

export const app = {
  isLogin: false,
  listPost: null,

  getApiKey: async function (email) {
    try {
      const { data, response } = await client.get(`/api-key?email=${email}`);

      if (!response.ok) {
        throw new Error("Email không hợp lệ");
      }

      const apiKey = data.data.apiKey;

      client.setApiKey(apiKey);

      client.setDataCookie(apiKey, email);

      this.isLogin = true;

      this.getListTodo();
    } catch (e) {
      console.log(e);
    }
  },

  checkLogin: function () {
    const email = client.getCookie("userEmail");
    if (!email) {
      this.importEmail();
    } else {
      this.getApiKey(email);
    }
  },

  importEmail: function () {
    window.addEventListener("load", () => {
      let email = prompt("Please enter your email!", "example@example.com");
      this.getApiKey(email);
    });
  },

  getListTodo: async function () {
    if (this.isLogin) {
      try {
        const { data, response } = await client.get(`/todos`);

        this.listPost = data.data.listTodo;
        if (!response.ok) {
          throw new Error("Email không hợp lệ");
        }

        console.log(data.data.listTodo);
        return data.data.listTodo;
      } catch (e) {
        console.log(e);
      }
    }
  },

  preventSubmit: function () {
    document.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  },

  start: function () {
    this.checkLogin();
    this.preventSubmit();
  },
};

app.start();
