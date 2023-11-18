import React, { useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Product from "./components/Product";
import { useSelector } from "./core/hook";
import { client } from "./script/client";
import Message from "./components/Message";

function App() {
  let hiddenProduct = useSelector((state) => state.hiddenProduct);

  if (client.getCookie("userEmail")) {
    hiddenProduct = false;

    client.setApiKey(client.getCookie("apiKey"));
  }

  return (
    <>
      <Message />
      {hiddenProduct ? <Home /> : <></>}
      <Loading />
      {!hiddenProduct ? <Product /> : <></>}
    </>
  );
}

export default App;
