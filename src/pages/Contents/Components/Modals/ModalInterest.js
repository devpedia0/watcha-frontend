import React from "react";
import styled from "styled-components";
import { ModalWrapper } from "../../../../components";
import { Icon } from "../../../../styles";

import { useDispatch, useSelector } from "react-redux";
import { contentActions } from "../../../../redux/actions";

const ModalInterest = ({ onCloseModal, onChangeModal }) => {
    const dispatch = useDispatch();
    const {
        data: {
            contentInfo: { mainTitle, productionDate, category },
        },
        userData: { interestState },
    } = useSelector((state) => state.content);

    const handleChangeInterest = (interest) => {
        dispatch(contentActions.changeInterestState(interest));
        onCloseModal();
    };

    return (
        <ModalWrapper width="" onCloseModal={onCloseModal}>
            <ContentHeader>
                <img
                    src="https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605860774/brjxqof6s9jx6tlerasw.jpg"
                    alt=""
                />
                <div className="titleWrapper">
                    <h2>{mainTitle}</h2>
                    <p>{`${category} ・ ${
                        productionDate ? productionDate.split("-")[0] : ""
                    }`}</p>
                </div>
            </ContentHeader>
            <ContentRow interestState={interestState}>
                <div
                    className="contentRowLeft"
                    onClick={() => handleChangeInterest("WISH")}
                >
                    <Icon
                        type={
                            interestState === "WISH"
                                ? "bookmarkRed"
                                : "bookmark"
                        }
                        w="48px"
                        h="48px"
                    />

                    <span>보고 싶어요</span>
                </div>
                <div
                    className="contentRowRight"
                    onClick={() => handleChangeInterest("WATCHING")}
                >
                    <Icon
                        type={
                            interestState === "WATCHING"
                                ? "watchingBlue"
                                : "watching"
                        }
                        w="48px"
                        h="48px"
                    />
                    <span>보는중</span>
                </div>
            </ContentRow>

            <ContentButton onClick={() => onChangeModal("comment")}>
                <span>코멘트 작성하기</span>
                <Icon type="comment" w="32px" h="32px" m="12px 0px" />
            </ContentButton>
            <ContentButton onClick={() => handleChangeInterest(null)}>
                <span>관심없어요</span>
                <Icon type="cancel" w="32px" h="32px" m="12px 0px" />
            </ContentButton>
            <ContentFooter onClick={onCloseModal}>취소</ContentFooter>
        </ModalWrapper>
    );
};

export default ModalInterest;

const ContentHeader = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(240, 240, 240);

    img {
        position: relative;
        overflow: hidden;
        background: rgb(248, 248, 248);
        width: 48px;
        height: 68px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 3px;
        margin: 20px 14px 20px 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background: ${(props) =>
            props.src
                ? `url(${props.src}) center center / cover no-repeat`
                : "#f1f1f1"};
    }
    .titleWrapper {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        justify-content: center;
        padding: 10px 0px;

        h2 {
            color: rgb(0, 0, 0);
            font-size: 19px;
            font-weight: 700;
            letter-spacing: -0.7px;
            line-height: 28px;
        }

        p {
            color: rgb(120, 120, 120);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 20px;
        }
    }
`;

const ContentRow = styled.div`
    border-bottom: 1px solid rgb(240, 240, 240);

    .contentRowLeft {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        box-sizing: border-box;
        width: 50%;
        padding: 13px 0px 15px;
        cursor: pointer;
        border-right: 1px solid rgb(240, 240, 240);
        color: ${(props) =>
            props.status === "WISH" ? "rgb(255, 47, 110)" : "rgb(0, 0, 0)"};
    }

    .contentRowRight {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        box-sizing: border-box;
        width: 50%;
        padding: 13px 0px 15px;
        cursor: pointer;

        color: ${(props) =>
            props.status === "WATCHING" ? "RGB(0,160,255)" : "rgb(0, 0, 0)"};
    }
`;

const ContentButton = styled.div`
    display: inline-flex;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    width: 100%;
    border-bottom: 1px solid rgb(240, 240, 240);
    cursor: pointer;

    span {
        flex: 1 1 0%;
        text-align: left;
    }
`;

const ContentFooter = styled.div`
    align-items: center;
    font-size: 15px;
    letter-spacing: -0.5px;
    line-height: 20px;
    border-bottom: 1px solid rgb(240, 240, 240);
    cursor: pointer;
    display: inline-block;
    color: rgb(255, 47, 110);
    font-weight: 500;
    text-align: center;
    width: 100%;
    padding: 15px 0px;
`;
