import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import store from "./redux/store";
import authActions from "./redux/actions/authActions";

const userId = JSON.parse(localStorage.getItem("id"));
if (userId) {
    store.dispatch(authActions.initUser(userId));
}

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
