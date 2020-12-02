import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

// Components
import { Header, Footer } from "../components";
const Wrapper = styled.div`
    max-width: 1320px;
    margin-bottom: 20px;
    margin-right: 15px;
    margin-left: 15px;
    @media only screen and (min-width: 719px) {
        margin-bottom: 30px;
        margin-right: 20px;
        margin-left: 20px;
    }
    @media only screen and (min-width: 760px) {
        margin-right: 3.5%;
        margin-left: 3.5%;
    }
    @media only screen and (min-width: 1100px) {
        margin-bottom: 42px;
        margin-right: 60px;
        margin-left: 60px;
    }
    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }
`;

const Layout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Header />
                    <Wrapper>
                        <Component {...props} {...rest} />
                    </Wrapper>
                    <Footer />
                </>
            )}
        />
    );
};

export default Layout;
