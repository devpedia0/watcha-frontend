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
                    <Content>
                        <Component {...props} {...rest} />
                    </Content>

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

const Content = styled.div`
    padding-top: 0px;
    padding-bottom: 56px;

    @media only screen and (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }
`;
