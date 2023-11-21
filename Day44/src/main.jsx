import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./assets/default.scss";
import Provider from "./core/Provider";

// const domain = "dev-wlfeduqhi2t7c782.us.auth0.com";
// const clientId = "WJaVnZe3jEyDiqKteCZGEQle6RDIJSqW";
// console.log(domain, clientId);

const domain = "dev-wlfeduqhi2t7c782.us.auth0.com";
const clientId = "NjL8UKc8tm5WbJMjuiPLgCIuWQDG0lfR";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
);
