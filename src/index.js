import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import authActions from "./redux/actions/authActions";
import history from "./history";
import "react-datepicker/dist/react-datepicker.css";

const token = JSON.parse(localStorage.getItem("token"));
if (token) {
    store.dispatch(authActions.signin());
} else {
    history.push("/login");
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
