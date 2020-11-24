import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

const CardListForm = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default CardListForm;
