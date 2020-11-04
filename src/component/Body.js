import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    min-height: calc(100vh - 136px);
    margin-top: 74px;
    border: 1px solid red;

    @media only screen and (min-width: 1100px) {
        margin-top: 86px;
    }

    @media only screen and (min-width: 760px) {
        margin-top: 80px;
    }

    @media only screen and (min-width: 600px) {
        min-height: calc(100vh - 343px);
        margin-top: 74px;
    }
`;

const Body = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Body;
