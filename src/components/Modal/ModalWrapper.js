import React from "react";
import styled from "styled-components";

const ModalWrapper = ({ width, onCloseModal, children }) => {
    return (
        <Wraper onClick={onCloseModal}>
            <InnerWrapper width={width} onClick={(e) => e.stopPropagation()}>
                {children}
            </InnerWrapper>
        </Wraper>
    );
};

export default ModalWrapper;

const Wraper = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.56);
    overflow: hidden scroll;
    text-align: center;
    padding: 20px 0px;
    overflow: auto;

    @media only screen and (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
        vertical-align: middle;
    }
`;

const InnerWrapper = styled.div`
    background: rgb(255, 255, 255);
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: auto;
    padding: 0 20px;

    @media only screen and (min-width: 719px) {
        width: ${(props) => (props.width ? props.width : "375px")};
        display: inline-block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        vertical-align: middle;
        text-align: left;
        border-radius: 6px;
        overflow: auto;
        margin: auto 0;
    }
`;