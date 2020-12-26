import React, { useState, useEffect } from "react";
import styled from "styled-components";
import history from "../../history";

// import DecksRecommend from "./DecksRecommend/DecksRecommend";
import api from "../../services/api";
import { CardListInfinite } from "../../components";

// const dummy = {
//     id: "few",
//     posterImagePath:
//         "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1466068952/oykv1z4xwesjvkvmpwya.jpg",
//     isNetflixContent: true,
//     isWatchaContent: true,
//     mainTitle: "title",
//     score: 3.2,
// };
// const dataDummy = {
//     user: {
//         name: "강탑구",
//         img:
//             "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1466068952/oykv1z4xwesjvkvmpwya.jpg",
//     },
//     title: "짜릿한 병맛을 원하는 그대에게",
//     likes: 1950,
//     comments: 13,
//     contents: "요즘 대세는 병맛? 막나가는, 브레이크 없는 병맛의 질주",
//     posters: [...new Array(12)].map((item) => dummy),
// };

const Decks = () => {
    const [data, setData] = useState({});
    const pathname = history.location.pathname;
    const pageId = pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get(`/public/collections/${pageId}?size=12`);
            setData(res.data);
        };
        fetchData();

        // setData(dataDummy);
    }, [pageId]);

    if (Object.keys(data).length === 0) return null;

    return (
        <Wrapper>
            <div className="deck-container">
                <DeckHeader>
                    <ul>
                        {[...new Array(6)].map((item, idx) => (
                            <li key={idx}>
                                <img
                                    src={
                                        data.list[idx]
                                            ? data.list[idx].posterImagePath +
                                              "?w=280&h=400"
                                            : ""
                                    }
                                    alt=""
                                ></img>
                            </li>
                        ))}
                    </ul>
                    <div className="deck-header-user">
                        <img
                            src="https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1466068952/oykv1z4xwesjvkvmpwya.jpg"
                            alt=""
                        />
                        <span>{data.userName}</span>
                    </div>
                </DeckHeader>
                <DeckContent>
                    <h1>{data.title}</h1>
                    <ul>
                        <li>좋아요: {data.likes || 1950}</li>
                        <li>| 댓글: {data.comments || 13}</li>
                    </ul>
                    <p>{data.description}</p>
                </DeckContent>
                <CardListInfinite
                    posters={data.list}
                    fetchUrl={`/public/collections/${pageId}/contents`}
                />
            </div>
        </Wrapper>
    );
};

export default Decks;

const Wrapper = styled.div`
    padding: 28px 0 113px;

    @media only screen and (min-width: 719px) {
        padding-top: 90px;
        padding-bottom: unset;
    }

    .deck-container {
        margin: 0 auto;
        border: 1px solid #e3e3e3;
        border-radius: 6px;
        overflow: hidden;

        @media only screen and (min-width: 719px) {
            max-width: 640px;
        }
    }
`;

const DeckHeader = styled.div`
    position: relative;

    ul {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
    }

    li {
        position: relative;
        overflow: hidden;
        background: #f8f8f8;
        display: block;
        position: absolute;
        top: 0;
        transform: translate3d(0%, 0, 0);
        width: 40%;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.65);

        @media only screen and (min-width: 440px) {
            width: 167px;
        }
    }
    li:nth-child(1) {
        transform: translate3d(0%, 0, 0);
        z-index: 8;
    }
    li:nth-child(2) {
        transform: translate3d(64%, 0, 0);
        z-index: 7;
    }
    li:nth-child(3) {
        transform: translate3d(129%, 0, 0);
        z-index: 6;
    }
    li:nth-child(4) {
        transform: translate3d(194%, 0, 0);
        z-index: 5;
    }
    li:nth-child(5) {
        transform: translate3d(258%, 0, 0);
        z-index: 4;
    }
    li:nth-child(6) {
        transform: translate3d(323%, 0, 0);
        z-index: 3;
    }

    &:after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 8;
        background-image: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.4),
            rgba(20, 20, 20, 0.6) 48%,
            rgba(20, 20, 20, 0.95) 95%
        );
    }

    .deck-header-user {
        position: absolute;
        right: 0;
        bottom: 5px;
        left: 0;
        z-index: 20;
        display: flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
        height: 64px;
        padding: 0 20px;

        img {
            display: block;
            border: solid 1px rgba(0, 0, 0, 0.08);
            border-radius: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 56px;
            height: 56px;
            overflow: hidden;
            width: 40px;
            height: 40px;
            margin-left: -2px;
            border-color: rgba(255, 255, 255, 0.3);
            margin-right: 10px;
        }

        span {
            display: flex;
            align-items: center;
            color: #ffffff;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 20px;
        }
    }

    @media only screen and (min-width: 440px) {
        height: 263px;
        padding-top: 0;
    }
`;

const DeckContent = styled.div`
    margin: 0 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    h1 {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.7px;
        line-height: 28px;
        margin: 16px 0 2px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0 0 35px;
    }

    li {
        display: inline-block;
        color: #8c8c8c;
        vertical-align: top;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -0.2px;
        line-height: 18px;
    }
    li:nth-child(1) {
        margin-right: 5px;
    }

    p {
        white-space: pre-line;
        font-size: 15px;
        font-weight: 400;
        -webkit-letter-spacing: -0.2px;
        -moz-letter-spacing: -0.2px;
        -ms-letter-spacing: -0.2px;
        letter-spacing: -0.2px;
        line-height: 24px;
        word-break: break-all;
        max-height: 168px;
        margin: 0;
        overflow: hidden;
        white-space: pre-wrap;
    }
`;
