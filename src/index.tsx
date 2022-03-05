import React from "react";
import ReactDOM from "react-dom";
import App from "./_app/App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
