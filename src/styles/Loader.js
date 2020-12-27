import styled from "styled-components";

const Loader = styled.div`
    height: ${(props) => (props.height ? props.height : "50px")};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ::after {
        content: "";
        width: 35px;
        height: 35px;
        border: 3px solid #d8d8d8;
        border-top: 3px solid #e73873;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        z-index: 10;
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

export default Loader;
