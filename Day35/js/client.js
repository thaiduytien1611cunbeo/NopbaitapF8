import { config } from "./config.js";
const { SERVER_API } = config;


export const client = {
    send: async function (url, method = "GET", body=null) {
        url = `${SERVER_API}${url}`;
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if(body) {
            options.body = JSON.stringify(body);
        }
        
        const response = await fetch(url, options);

        document.querySelector('.loadingio-spinner-gear-hmyjdw1v7b6').classList.add('hidden');

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

