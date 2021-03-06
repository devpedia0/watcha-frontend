import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { contentActions, modalActions } from "../../../../redux/actions";

import { ModalWrapper, Svg } from "../../../../components";
import { Icon } from "../../../../styles";

const ModalComment = ({ title, onCloseModal }) => {
    const dispatch = useDispatch();
    const {
        userData: { commentDescription },
    } = useSelector((state) => state.content);
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput(commentDescription || "");
    }, [commentDescription]);

    const handleClickSubmit = async () => {
        if (!input) return;
        dispatch(contentActions.createComment(input));
        dispatch(modalActions.closeModal());
    };

    return (
        <ModalWrapper width="640px" onCloseModal={onCloseModal}>
            <Header>
                <Icon
                    type="close"
                    w="24px"
                    h="24px"
                    m="auto 0"
                    onClick={onCloseModal}
                />
                <h3>{title}</h3>
                <span className={input ? "on" : ""} onClick={handleClickSubmit}>
                    {commentDescription ? "코멘트수정" : "코멘트작성"}
                </span>
            </Header>
            <SectionSNS>
                <span>SNS</span>
                <div className="svg-box">
                    <Svg type="twitter" color="#73C8FA" w="22px" h="18px" />
                </div>
            </SectionSNS>
            <TextArea
                placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </ModalWrapper>
    );
};

export default ModalComment;

const Header = styled.div`
    background: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid rgb(227, 227, 227);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    h3 {
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    span {
        float: right;
        line-height: 44px;
        font-weight: 400;
        color: rgb(210, 210, 210);

        &.on {
            cursor: pointer;
            color: RGB(255, 5, 88);
        }
    }
`;

const SectionSNS = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid rgb(240, 240, 240);

    .svg-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border: 1px solid rgb(210, 210, 210);
        border-radius: 6px;
    }
`;

const TextArea = styled.textarea`
    border: none;
    height: 400px;
    width: 100%;
    margin-top: 30px;
    font-size: 17px;
    font-weight: 400;
`;
