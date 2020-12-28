import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import store from "./redux/store";
import api from "./services/api";

api.get("/users/3")
    .then((res) => {
        //console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
