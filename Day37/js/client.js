import { config } from "./config.js";
const { SERVER_API } = config;


export const client = {
    serverApi: SERVER_API,
    token: null,

    setUrl: function(url) {
        this.serverApi = url;
    },

    setToken: function (token) {
        this.token = token;
    },

    send: async function (url, method = "GET", body=null) {
        url = `${this.serverApi}${url}`;
        const headers = {
            "Content-Type": "application/json",
        };

        if(this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        } 

        const options = {
            method,
            headers,
        };

        if(body) {
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
    } ,
    
    //http PATCH
    patch: function (url, body) {
        return this.send(url, "PATCH", body);
    },

    //http DELETE
    delete: function (url, body) {
        return this.send(url, "DELETE", body);
    }
}

