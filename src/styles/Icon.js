import styled from "styled-components";

const Icon = styled.i`
    display: inline-block;
    width: ${(props) => (props.w ? props.w : "10px")};
    height: ${(props) => (props.h ? props.h : "10px")};
    margin: ${(props) => (props.margin ? props.margin : 0)};
    background: ${(props) =>
        props.type
            ? `url(${
                  props.theme.svg[props.type]
              }) center center / cover no-repeat;`
            : ""};
`;

export default Icon;
