import { config } from "./config.js";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,
  apiKey: null,

  setUrl: function (url) {
    this.serverApi = url;
  },

  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },

  setDataCookie: function (apiKey, email) {
    document.cookie = `apiKey=${apiKey}`;
    document.cookie = `userEmail=${email}`;
  },

  getCookie: function (name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  },

  send: async function (url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;
    const headers = {};

    if (this.apiKey) {
      headers["X-Api-Key"] = `${this.apiKey}`;
    }

    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    const data = await response.json();

    return { response, data };
  },

  //http GET
  get: function (url) {
    return this.send(url);
  },

  //http POST
  post: function (url, body) {
    return this.send(url, "POST", body);
  },

  //http PUT
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },

  //http PATCH
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },

  //http DELETE
  delete: function (url, body) {
    return this.send(url, "DELETE", body);
  },
};
