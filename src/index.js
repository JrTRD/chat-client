import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./main.css";
import "react-notifications-component/dist/theme.css";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
