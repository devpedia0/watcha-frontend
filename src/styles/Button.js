import styled, { css } from "styled-components";

const Button = styled.button`
    width: ${(props) => (props.w ? props.w : "100%")};
    height: ${(props) => (props.h ? props.h : "44px")};
    margin-top: ${(props) => (props.mt ? props.mt : 0)};
    margin-left: ${(props) => (props.ml ? props.ml : 0)};
    margin-right: ${(props) => (props.mr ? props.mr : 0)};
    margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
    padding: ${(props) => (props.padding ? props.padding : 0)};
    border-radius: ${(props) => (props.radius ? props.radius : "6px")};
    background: ${(props) => (props.bg ? props.bg : "white")};
    color: ${(props) => (props.color ? props.color : "black")};

    border: none;
    cursor: pointer;
    text-align: center;

    ${(props) =>
        props.pink &&
        css`
            background: rgb(255, 47, 110);
            color: rgb(255, 255, 255);
        `}
`;

export default Button;
