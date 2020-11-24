import React from "react";
import styled from "styled-components";
import FormNav from "../components/Form/FormNav";

const Wrapper = styled.div`
    background: #f8f8f8;
    margin: 91px auto 50px auto;
    width: ${(props) => (props.width ? props.width : "750px")};
    border-radius: ${(props) => (props.radius ? props.radius : "1%")};
    background: white;
    padding: 0 20px 20px 20px;
    border: 1px solid #ededed;

    .title {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 1.4rem;
        font-weight: bold;
    }

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
        margin-top: 82px;
        height: 100%;
    }
`;

const LayoutForm = ({ children }) => {
    return (
        <Wrapper>
            <FormNav />
            {children}
        </Wrapper>
    );
};

export default LayoutForm;
