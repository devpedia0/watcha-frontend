import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import api from "./services/api";

// const getData = async () => {
//     const res = await api.get("./admin/participants?page=1&size=3500");
//     console.log(res.data);
// };
// getData();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
