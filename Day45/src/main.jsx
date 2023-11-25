import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/**
 * Chia:
 *  + Default làm sáng tối
 *  + App : có tiêu đề chào mừng
 *  + thanh trượt Slider làm -> bận cần và thanh progress
 *  + Table
 */
