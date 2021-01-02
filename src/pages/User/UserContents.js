import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuthService from "../../services/auth.service";
import api from "../../services/api";
import history from "../../history";
import { CardListSlick, CardPoster, HeaderDetail } from "../../components";

const formatObj = {
    movies: {
        title: "영화",
        apiKey: "movie",
    },
    books: {
        title: "책",
        apiKey: "book",
    },
    tv_shows: {
        title: "TV 프로그램",
        apiKey: "tvShow",
    },
};

export default function UserContents() {
    const pathSplit = history.location.pathname.split("/");
    const userId = pathSplit[2];
    const contentType = pathSplit[4];

    const [contents, setContents] = useState([]);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const baseUrl = `/users/${userId}/${contentType}/ratings`;
        api.get(baseUrl + `?page=1&size=7`).then((res) => {
            setContents(() => res.data);
        });
    }, [userId, contentType]);

    useEffect(() => {
        const apiKey = formatObj[contentType].apiKey;
        AuthService.getUserRating().then((res) => {
            setUserData(res.data[apiKey]);
        });
    }, [contentType]);

    return (
        <Section>
            <section className="mainContainer">
                <HeaderDetail title={formatObj[contentType].title} />
                <Content>
                    <Ul>
                        <Wrapper>
                            <CardListSlick
                                title="평가"
                                count={userData.ratingCount}
                                sizeHeader="sm"
                                addComponent={
                                    <a
                                        className="toRated"
                                        href={`/user/${userId}/detail/ratedMovie`}
                                    >
                                        더보기
                                    </a>
                                }
                            >
                                {contents.map((item) => (
                                    <StyledCard key={item.id} item={item} />
                                ))}
                            </CardListSlick>
                        </Wrapper>
                    </Ul>

                    <hr className="divider" />
                    <ContentRow>
                        <ul className="visualUl">
                            <li className="textList">
                                <div className="listInner">
                                    <div className="listTitle">
                                        <a
                                            href={`/user/${userId}/detail/wish`}
                                            className="localLink"
                                        >
                                            보고싶어요
                                            <span className="number">
                                                {userData.wishCount}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="textList">
                                <div className="listInner">
                                    <div className="listTitle">
                                        <a
                                            href={`/user/${userId}/detail/watching`}
                                            className="localLink"
                                        >
                                            보는중
                                            <span className="number">
                                                {userData.watchingCount}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </ContentRow>
                </Content>
            </section>
        </Section>
    );
}

const Section = styled.section`
    .mainContainer {
        padding: 88px 0px 0px;
        display: block;

        .header {
            display: block;
            position: fixed;
            left: 0px;
            z-index: 50;
            background: rgb(255, 255, 255);
            box-sizing: border-box;
            font-size: 17px;
            font-weight: 700;
            letter-spacing: -0.5px;
            line-height: 22px;
            width: 100%;
            padding: 0px 16px;
            border-bottom: 1px solid rgb(227, 227, 227);
            top: 62px;
            text-align: left;
            height: auto;

            .backBtn {
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;

                .btnIcon {
                    background-position: initial;
                    background-size: initial;
                    background-repeat: initial;
                    background-attachment: initial;
                    background-origin: initial;
                    background-clip: initial;
                    background-color: initial;
                    padding: 0px;
                    border: none;
                    cursor: pointer;
                    width: 24px;
                    height: 24px;
                    margin: 10px 0px;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTYuNzU1IDExLjk4OGw0Ljk1OCA0Ljk1OGEuOTguOTggMCAxIDEtMS4zODcgMS4zODdMNCAxMi4wMDdsLjAwNS0uMDA1TDQgMTEuOTk3bDYuMzQzLTYuMzQzYS45Ny45NyAwIDEgMSAxLjM3MyAxLjM3M2wtNC45NjEgNC45NnoiLz4KICAgICAgICA8cGF0aCBkPSJNNiAxMWgxM2ExIDEgMCAwIDEgMCAySDZ2LTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=) !important;
                }
            }
            .largeTitleBlock {
                display: flex;
                transform: translate3d(0px, 0px, 0px);
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                height: 30px;
                margin: 0px 4px 10px;
                opacity: 1;
                transition: all 150ms ease 0s;

                .largeTitle {
                    display: inline-block;
                    font-weight: 700;
                    letter-spacing: -1.2px;
                    font-size: 22px;
                    line-height: 29px;
                    white-space: nowrap;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .smallTitle {
                position: absolute;
                top: 0px;
                right: 0px;
                left: 0px;
                white-space: nowrap;
                text-align: center;
                font-size: 17px;
                font-weight: 700;
                letter-spacing: -0.5px;
                line-height: 22px;
                margin: 11px 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                opacity: 0;
                transition: all 300ms ease 0s;
            }
        }
    }
`;

const Content = styled.section`
    padding: 16px 0px 0px;
    display: block;
    .divider {
        border-width: 0px 0px 1px;
        border-top-style: initial;
        border-right-style: initial;
        border-left-style: initial;
        border-top-color: initial;
        border-right-color: initial;
        border-left-color: initial;
        border-image: initial;
        border-bottom-style: solid;
        border-bottom-color: rgb(240, 240, 240);
        margin: 0px 20px;
    }
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0px;
    white-space: nowrap;
    margin: 0 20px;
    ::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 100%;
    }
`;

const Wrapper = styled.div`
    list-style: none;
    padding: 0px;
    white-space: nowrap;
    margin-bottom: 0px;

    .toRated {
        color: #ff2f6e;
        text-decoration: none;
        float: right;
        padding-top: 17px;
    }
`;
const StyledCard = styled(CardPoster)`
    width: 33.3333333%;
    @media (min-width: 520px) {
        width: 25%;
    }
    @media (min-width: 680px) {
        width: 20%;
    }
    @media (min-width: 840px) {
        width: 16.6667%;
    }
    @media (min-width: 960px) {
        width: 14.2857%;
    }
    @media (min-width: 1100px) {
        width: 12.5%;
    }
    @media (min-width: 1200px) {
        width: 11.11111111111111%;
    }
    @media (min-width: 1360px) {
        width: 10%;
    }
    @media (min-width: 1750px) {
        width: 8.333333333333334%;
    }
    @media (min-width: 1920px) {
        width: 7.6923076923076925%;
    }
`;

const ContentRow = styled.div`
    margin: 0px 20px;

    .visualUl {
        list-style: none;
        padding: 0px;
        margin: 16px 0px;

        .textList {
            text-align: left;
            box-sizing: border-box;
            min-height: 48px;
            display: flex;
            flex-direction: column;
            color: rgb(0, 0, 0);
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -0.7px;
            line-height: 22px;

            .listInner {
                display: flex;
                flex: 1 1 0%;
                -webkit-box-align: center;
                align-items: center;
                box-sizing: border-box;
                min-height: 48px;
                border-bottom: 1px solid rgb(234, 233, 232);
                .listTitle {
                    flex: 1 1 0%;
                    white-space: pre-wrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .localLink {
                        color: rgb(0, 0, 0);
                        text-decoration: none;
                        display: block;
                        padding: 13px 0px;
                    }
                    .number {
                        float: right;
                        color: rgb(160, 160, 160);
                    }
                }
            }
        }
    }
`;
