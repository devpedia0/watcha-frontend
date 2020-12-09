import styled, { css } from "styled-components";

const Wrapper = styled.div`
    /* flex: ${(props) => (props.flex ? props.flex : "1")}; */
    width: ${(props) => (props.width ? props.width : "100%")} !important;
    height: ${(props) => (props.height ? props.height : "100%")};
    margin-right: ${(props) => (props.mr ? props.mr : "0px")};
    margin-left: ${(props) => (props.mr ? props.mr : "0px")};
    background: ${(props) => (props.src ? `url(${props.src})` : "#e4e6e7")};
    background-size: cover;
    border-radius: ${(props) => (props.radius ? props.radius : "2%")};
    border: 1px solid #ced4da;
    flex-grow: 0;
    flex-shrink: 0;

    ${(props) =>
        !props.src &&
        css`
            ::before {
                content: "+";
                display: flex;
                align-items: center;
                justify-content: center;
                height: inherit;
                font-size: 40px;
            }
        `}
`;

export default Wrapper;
