import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../services/api";
import { CardList, CardPoster, HeaderDetail } from "../../components";

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

const UserContents = ({ match }) => {
    const { userId, contentType } = match.params;
    const [contents, setContents] = useState([]);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUrl = `/users/${userId}/${contentType}/ratings`;
        api.get(fetchUrl + `?page=1&size=10`).then((res) => {
            setContents(() => res.data);
        });
    }, [userId, contentType]);
    useEffect(() => {
        const apiKey = formatObj[contentType].apiKey;
        const fetchUrl = `/users/${userId}/ratings`;
        api.get(fetchUrl).then((res) => {
            setUserData(res.data[apiKey]);
        });
    }, [userId, contentType]);

    return (
        <section className="mainContainer">
            <HeaderDetail title={formatObj[contentType].title} />
            <Content>
                <Ul>
                    <Wrapper>
                        <StyledCardList
                            title="평가"
                            count={userData.ratingCount}
                            sizeHeader="sm"
                            addComponent={
                                <a
                                    className="toRated"
                                    href={`/users/${userId}/${contentType}/ratings`}
                                >
                                    더보기
                                </a>
                            }
                        >
                            {contents.map((item) => (
                                <StyledCard
                                    key={item.id}
                                    item={item}
                                    isRated={true}
                                    onClick={() =>
                                        (window.location = `/contents/${item.id}`)
                                    }
                                />
                            ))}
                        </StyledCardList>
                    </Wrapper>
                </Ul>

                <hr className="divider" />
                <ContentRow>
                    <ul className="visualUl">
                        <li className="textList">
                            <div className="listInner">
                                <div className="listTitle">
                                    <a
                                        href={`/users/${userId}/${contentType}/wishes`}
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
                                        href={`/users/${userId}/${contentType}/watchings`}
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
    );
};

export default UserContents;

const StyledCardList = styled(CardList)`
    padding-top: 100px;
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
