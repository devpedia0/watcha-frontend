import React from "react";
import { Route } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import styled from "styled-components";

// css-lifknt-Self ebeya3l1
const Layout = styled.div``;

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    {/* <Header /> */}
                    <Component {...props} {...rest} />
                    <Footer />
                </Layout>
            )}
        />
    );
};

export default DefaultLayout;
