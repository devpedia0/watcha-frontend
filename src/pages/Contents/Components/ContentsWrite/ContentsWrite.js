import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { contentActions, modalActions } from "../../../../redux/actions";

import { BoxImg } from "../../../../components";
import { Button, Icon } from "../../../../styles";

const ContentsWrite = ({ onChangeModal }) => {
    const dispatch = useDispatch();
    const {
        userData: { commentDescription },
    } = useSelector((state) => state.content);

    const handleDelete = () => {
        dispatch(contentActions.deleteComment());
    };

    const handleEdit = () => {
        dispatch(modalActions.setModal("comment"));
    };

    return (
        <>
            {!commentDescription ? (
                <SectionComment>
                    <h3>
                        이 작품에 대한 KyungYoonHa 님의 평가를 글로 남겨보세요.
                    </h3>
                    <Button
                        basic
                        w="254px"
                        h="40px"
                        onClick={() => onChangeModal("comment")}
                    >
                        코멘트 남기기
                    </Button>
                </SectionComment>
            ) : (
                <SectionComment>
                    <BoxImg
                        width="56px"
                        height="56px"
                        radius="50%"
                        src="https://d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg"
                    />
                    <div className="comment-textarea">{commentDescription}</div>
                    <div className="comment-icons">
                        <button onClick={handleDelete}>
                            <Icon type="trashcan" w="17px" h="17px" />
                            <span>삭제</span>
                        </button>
                        <span>|</span>
                        <button onClick={handleEdit}>
                            <Icon type="write" w="17px" h="17px" />
                            <span>수정</span>
                        </button>
                    </div>
                </SectionComment>
            )}
        </>
    );
};

export default ContentsWrite;

const SectionComment = styled.div`
    margin-bottom: 12px;
    padding: 12px 20px;
    background: #fff;
    display: flex;
    align-items: center;

    h3 {
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        color: rgb(74, 74, 74);
        margin-right: 20px;
    }

    @media only screen and (min-width: 1023px) {
        border: 1px solid #e3e3e3;
        border-radius: 6px;
    }

    .comment-textarea {
        flex: 1;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        word-break: break-all;
        margin: 0px 16px;
    }

    .comment-icons {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.2px;
        line-height: 17px;
        display: flex;

        button {
            display: flex;
            align-items: center;
            background: none;
            margin-left: 5px;
        }

        i,
        span {
            margin: 5px;
            line-height: 17px;
        }
    }
`;
