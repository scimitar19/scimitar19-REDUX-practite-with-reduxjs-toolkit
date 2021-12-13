import React from "react";
import ReactDOM from "react-dom";
import Store from "./store/index.js";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
