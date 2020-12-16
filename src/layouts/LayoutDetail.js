import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

// Components
import { Header, Footer } from "../components";

const LayoutDetail = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <StyledHeader />
                    <Component {...props} {...rest} />
                    <StyledFooter />
                </>
            )}
        />
    );
};

export default LayoutDetail;

const StyledHeader = styled(Header)`
    display: none;

    @media only screen and (min-width: 719px) {
        display: block;
    }
`;

const StyledFooter = styled(Footer)`
    @media only screen and (min-width: 719px) {
        display: none;
    }
`;
