import React from "react";
import { Route } from "react-router-dom";

// Components
import { Header, Footer } from "../components";

const Layout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Header />
                    <Component {...props} {...rest} />
                    <Footer />
                </>
            )}
        />
    );
};

export default Layout;
