import React, { useState } from "react";
import styled from "styled-components";
import { Icon, Button } from "../../../../styles";

const Bookmark = ({ data, status, onClickClose, handleClick }) => {
    const [user] = useState("few");

    return (
        <ModalContainer onClick={onClickClose}>
            <ContentBox onClick={(e) => e.stopPropagation()}>
                {user ? (
                    <>
                        <Icon type="close" w="24px" h="24px" margin="10px 0" />
                        <div className="contents-info">
                            <Icon type="bookmarkGray" w="88px" h="88px" />
                            <p>
                                내 보관함에 작품을 담으려면 로그인이 필요해요.
                                회원가입 혹은 로그인해주세요.
                            </p>
                        </div>
                        <Button pink mb="10px">
                            회원가입
                        </Button>

                        <Button mb="50px" color="rgb(255, 47, 110)">
                            로그인
                        </Button>
                    </>
                ) : (
                    <>
                        <ContentHeader>
                            <img src={data.imgUrl} alt="" />
                            <div className="titleWrapper">
                                <h2>{data.title}</h2>
                                <p>{`${data.category} ・ ${data.year}`}</p>
                            </div>
                        </ContentHeader>
                        <ContentRow status={status}>
                            <div
                                className="contentRowLeft"
                                onClick={() => handleClick("wish")}
                            >
                                <Icon
                                    type={
                                        status === "wish"
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
                                onClick={() => handleClick("watching")}
                            >
                                <Icon
                                    type={
                                        status === "watching"
                                            ? "watchingBlue"
                                            : "watching"
                                    }
                                    w="48px"
                                    h="48px"
                                />
                                <span>보는중</span>
                            </div>
                        </ContentRow>

                        <ContentButton>
                            <span>코멘트 작성하기</span>
                            <Icon
                                type="comment"
                                w="32px"
                                h="32px"
                                margin="12px 0px"
                            />
                        </ContentButton>
                        <ContentButton onClick={() => handleClick("")}>
                            <span>관심없어요</span>
                            <Icon
                                type="cancel"
                                w="32px"
                                h="32px"
                                margin="12px 0px"
                            />
                        </ContentButton>
                        <ContentFooter onClick={onClickClose}>
                            취소
                        </ContentFooter>
                    </>
                )}
            </ContentBox>
        </ModalContainer>
    );
};

export default Bookmark;

const ModalContainer = styled.div`
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

const ContentBox = styled.div`
    background: rgb(255, 255, 255);
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: auto;
    padding: 0 20px;

    .contents-info {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.7px;
        line-height: 30px;
        white-space: pre-line;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 100px;
    }

    @media only screen and (min-width: 719px) {
        display: inline-block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        vertical-align: middle;
        text-align: left;
        width: 375px;
        height: auto;
        border-radius: 6px;
        overflow: auto;
        margin: auto 0;
    }
`;

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
            props.status === "wish" ? "rgb(255, 47, 110)" : "rgb(0, 0, 0)"};
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
            props.status === "watching" ? "RGB(0,160,255)" : "rgb(0, 0, 0)"};
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
