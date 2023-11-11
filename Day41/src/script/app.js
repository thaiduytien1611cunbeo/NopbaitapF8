import { client } from "./client.js";
import { config } from "./config.js";

const { SERVER_API_AUTH, PAGE_LIMIT } = config;

client.setUrl(SERVER_API_AUTH);

export let listTodo = null;

export const checkLogin = async () => {
  const email = client.getCookie("userEmail");
  if (!email) {
    return false;
  }
  return true;
};

export const getApiKey = async () => {
  if (!(await checkLogin())) {
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
  return true;
};

export const getListTodo = async function () {
  if (await getApiKey()) {
    try {
      const { data, response } = await client.get(`/todos`);

      const listPost = data.data.listTodo;
      if (!response.ok) {
        throw new Error("Email không hợp lệ");
      }

      listTodo = listPost;

      return data.data.listTodo;
    } catch (e) {
      console.log(e);
    }
  }
};

const preventSubmit = function () {
  document.addEventListener("submit", function (e) {
    e.preventDefault();
  });
};

preventSubmit();
console.log(getListTodo());
