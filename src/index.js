import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
