import React from "react";
import styled from "styled-components";
import FormNav from "../component/Form/FormNav";

const Wrapper = styled.div`
    background: #f8f8f8;
    margin-top: 71px;
    padding-top: 2px;
    padding-bottom: 50px;
    width: 100%;

    a {
        padding: 15px 25px;
    }

    label {
        margin: 10px 0;
    }

    h2 {
        font-size: 1.4rem;
        font-weight: bold;
    }

    @media only screen and (min-width: 737px) {
        margin-top: 62px;
        height: 100%;
    }
`;

const FormContainer = styled.div`
    width: ${(props) => (props.width ? props.width : "750px")};
    border-radius: ${(props) => (props.radius ? props.radius : "1%")};
    background: white;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid #ededed;

    .title {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const FormLayout = ({ children }) => {
    return (
        <Wrapper>
            <FormNav />
            <FormContainer>{children}</FormContainer>
        </Wrapper>
    );
};

export default FormLayout;
