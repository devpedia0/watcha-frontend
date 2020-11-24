import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
const defaultStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "50px",
        transform: "translate(-50%, -50%)",
        width: "750px",
        height: "700px",
        overflowY: "scroll",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "5",
    },
};

ReactModal.setAppElement("#root");

const Wrapper = styled.div`
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const Modal = ({
    title,
    isOpen,
    modalStyle = defaultStyle,
    onClick,
    onClickClose,
    onAfterOpen,
    children,
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            style={modalStyle}
            onRequestClose={onClickClose}
            onAfterOpen={onAfterOpen}
            className="card"
        >
            <Wrapper className="card-header bg-white d-flex justify-content-between">
                <h3>{title}</h3>
                <div>
                    <button
                        className="btn btn-secondary mr-1"
                        type="button"
                        onClick={onClickClose}
                    >
                        닫기
                    </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onClick}
                    >
                        사용하기
                    </button>
                </div>
            </Wrapper>
            <div className="card-body">{children}</div>
        </ReactModal>
    );
};

export default Modal;
