import styled from "styled-components";

const Wrapper = styled.div`
    /* flex: ${(props) => (props.flex ? props.flex : "1")}; */
    width: ${(props) => (props.width ? props.width : "100%")} !important;
    height: ${(props) => (props.height ? props.height : "100%")};
    margin-right: ${(props) => (props.mr ? props.mr : "0px")};
    margin-left: ${(props) => (props.ml ? props.ml : "0px")};
    background: ${(props) =>
        props.src
            ? `url(${props.src})`
            : "url(https://d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg)"};
    background-size: cover;
    border-radius: ${(props) => (props.radius ? props.radius : "2%")};
    border: 1px solid #ced4da;
    flex-grow: 0;
    flex-shrink: 0;
`;

export default Wrapper;
