import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../services/api";
import history from "../../history";
import { Icon } from "../../styles";

const images = [
    "https://images.watcha.net/user/768238/small/9681b5d769447364bd9cbe78d225acbdc38116dc.jpg",
    "https://images.watcha.net/user/1262803/small/3b36ee1183a7870b4b77db7512d5b86e1f146b5f.jpg",
    "https://images.watcha.net/user/400256/small/53f9a1ac521723eccdc06b80fe364b41d5c482b9.jpg",
    "https://images.watcha.net/user/145298/small/c7284d4b70f01cfed809ab77694f2499cf46eec5.jpg",
    "https://images.watcha.net/user/130008/small/213298ad9b141f27931d087f70a7c2a97b9d12df.png",
    "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_100,w_100/v1583633236/kw9yp7rnvqjni4vf3lsr.jpg",
    "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_100,w_100/v1530721104/ppvhnli1tpbuuursaxm6.jpg",
];

const Interest = ({ interestState, score }) => {
    switch (interestState) {
        case "WISH":
            return (
                <>
                    <Icon type="bookmarkGray" w="16px" h="16px" />
                    보고싶어요
                </>
            );
        default:
            return "★ " + (score || "3.0");
    }
};

const CardComment = ({ className, item, onClick }) => {
    const {
        userId,
        userName,
        description,
        isSpoiler,
        replyCount,
        likeCount,
        interestState,
        score,
        isLiked,
    } = item;

    const pathname = history.location.pathname;
    const pageId = pathname.split("/")[2];
    const [like, setLike] = useState(false);
    const [showDescription, setDescription] = useState(true);
    useEffect(() => {
        setDescription(!isSpoiler);
    }, [isSpoiler]);

    useEffect(() => {
        setLike(isLiked);
    }, [isLiked]);

    const handleClickLike = async () => {
        const baseUrl = `/contents/${pageId}/comments/${userId}/likes`;
        try {
            if (like) {
                await api.delete(baseUrl);
                setLike(false);
            } else {
                await api.post(baseUrl);
                setLike(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Wrapper className={className} onClick={onClick}>
            <div className="card-block">
                <Header>
                    <div className="title">
                        <img
                            alt=""
                            src={
                                images[
                                    Math.floor(Math.random(1) * images.length)
                                ]
                            }
                        />
                        <h2>{userName}</h2>
                    </div>
                    <div className="score">
                        <Interest interestState={interestState} score={score} />
                    </div>
                </Header>
                <Content className="content">
                    {showDescription
                        ? description
                        : "스포일러가 있어요!!"(
                              <span onClick={() => setDescription(true)}>
                                  보기
                              </span>
                          )}
                </Content>
                <Like>
                    <span className="icon-like" />
                    <em>{likeCount}</em>
                    <span className="icon-comment" />
                    <em>{replyCount}</em>
                </Like>
                <Footer>
                    <button
                        className={like ? "on" : ""}
                        onClick={handleClickLike}
                    >
                        좋아요
                    </button>
                </Footer>
            </div>
        </Wrapper>
    );
};

export default CardComment;

const Wrapper = styled.div`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
    padding: 0 5px;

    .card-block {
        padding: 0 12px;
        background-color: #f2f2f2;
        border-radius: 6px;
        overflow: hidden;
    }
`;

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;

    .title {
        flex: 1;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 22px;
        overflow: hidden;
        display: flex;
        align-items: center;

        img {
            display: block;
            border: solid 1px rgba(0, 0, 0, 0.08);
            border-radius: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            width: 56px;
            height: 56px;
            overflow: hidden;
            width: 32px;
            height: 32px;
            margin: 11px 8px 11px 0;
        }

        h2 {
            color: #1f1f1f;
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -0.7px;
            line-height: 22px;
            margin-bottom: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .score {
        display: flex;
        align-items: center;
        background: #fff;
        color: #4a4a4a;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 19px;
        box-sizing: border-box;
        min-width: 55px;
        height: 26px;
        padding: 0 8px;
        border: 1px solid #eaeaea;
        border-radius: 13px;
        margin: 15px 0 0 16px;
    }
`;

const Content = styled.div`
    position: relative;
    height: 120px;
    margin: 12px 0 15px;
    white-space: pre-wrap;
    opacity: 1;
    transition: opacity 400ms ease 0s;
    line-height: 1.5;

    span {
        color: #ff0558;
        font-weight: 500;
    }
`;

const Like = styled.div`
    display: flex;
    align-items: center;
    color: #787878;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    height: 44px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;

    .icon-like {
        width: 18px;
        height: 18px;
        margin: 0 3px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ljc1IDkuNDg1aC0zYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgzYTEgMSAwIDAgMCAxLTF2LTEwYTEgMSAwIDAgMC0xLTFNMjAuNjU3IDguNTY2YTIuMzYzIDIuMzYzIDAgMCAwLTEuNzc5LS44MTNIMTYuNjJsLjE2NC0uNjI3Yy4xMzctLjUyOC4yMDEtMS4xMi4yMDEtMS44NjMgMC0xLjkxOS0xLjM3NS0yLjc3OC0yLjczOC0yLjc3OC0uNDQ0IDAtLjc2Ni4xMjMtLjk4Ni4zNzYtLjIuMjI3LS4yODIuNTMtLjI0My45MzVsLjAzIDEuMjMtMi45MDMgMi45NGMtLjU5My42LS44OTQgMS4yMy0uODk0IDEuODcydjkuNjQ3YS41LjUgMCAwIDAgLjUuNWg3LjY4N2EyLjM4OCAyLjM4OCAwIDAgMCAyLjM0OC0yLjA3bDEuNDQ1LTcuNDUyYTIuNDQgMi40NCAwIDAgMC0uNTc0LTEuODk3Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K")
            center center / cover no-repeat;
    }

    .icon-comment {
        width: 18px;
        height: 18px;
        margin: 0 3px 0 13px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K")
            center center / cover no-repeat;
    }

    em {
        display: flex;
        align-items: center;
        color: #787878;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 19px;
        height: 44px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }
`;

const Footer = styled.div`
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    padding: 9.5px 0;
    margin: 0 -4px;

    button {
        background: none;
        padding: 0;
        border: none;
        margin: 0;
        cursor: pointer;
        color: #ff2f6e;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 22px;
        padding: 2px 8px;
        cursor: poiner;
    }

    button.on {
        background: rgb(255, 47, 110);
        color: rgb(255, 255, 255);
        border-radius: 3px;
    }
`;
