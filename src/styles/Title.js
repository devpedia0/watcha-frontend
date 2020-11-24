import styled from "styled-components";

const Title = styled.div`
    border-top: ${(props) => (props.line ? "1px solid #f0f0f0" : "")};
    padding: 20px 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

export default Title;
