import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./index.css";
import App from "./App";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <SignUp />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
