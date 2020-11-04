import React from "react";
import { Route } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import styled from "styled-components";

// css-lifknt-Self ebeya3l1
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0px);
    margin-top: 74px;

    width: 100%;
    @media only screen and (min-width: 600px) {
        min-height: calc(100vh - 343px);
        margin-top: 74px;
    }

    @media only screen and (min-width: 760px) {
        margin-top: 80px;
    }

    @media only screen and (min-width: 1100px) {
        margin-top: 86px;
    }
`;

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Header />
                    <Component {...props} {...rest} />
                    <Footer />
                </Layout>
            )}
        />
    );
};

export default DefaultLayout;
