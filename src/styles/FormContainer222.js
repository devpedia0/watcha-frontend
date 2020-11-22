import styled from "styled-components";

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

export default FormContainer;
