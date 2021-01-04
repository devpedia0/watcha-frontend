import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Divider, Loader } from "../../styles";
import { CardListSlick, CardPoster, Card } from "../../components";
import api from "../../services/api";
import history from "../../history";
import queryString from "query-string";
import { randomUserImg } from "../../utils/helperFunc";

const Searches = ({ match }) => {
    const query = queryString.parse(history.location.search).query;
    const currentUrl = match.url;

    const [state, setState] = useState({
        data: {},
        isFetching: true,
    });

    useEffect(() => {
        setState({ data: {}, isFetching: true });
        api.get(`/public/searches?query=${query}`)
            .then((res) => {
                setState({
                    data: res.data,
                    isFetching: false,
                });
            })
            .catch((err) => {
                console.error(err.response);
            });
    }, [query]);

    if (!query) {
        alert("검색내용을 입력해주세요.");
        return history.goBack();
    }

    if (state.isFetching) return <Loader height="800px" />;

    return (
        <Section>
            <section className="section">
                <Wrapper>
                    <CardListSlick title="상위 검색 결과" sizeHeader="sm">
                        {state.data.topResults.map((item) => (
                            <StyledCard key={item.id} item={item} />
                        ))}
                    </CardListSlick>
                </Wrapper>
                <hr className="divider" />
            </section>
            <section className="section">
                <Wrapper>
                    <CardListSlick
                        title="영화"
                        sizeHeader="sm"
                        addComponent={
                            <Link href={`${currentUrl}/movies?query=${query}`}>
                                더보기
                            </Link>
                        }
                        horizon
                    >
                        {state.data.movies.map((item) => (
                            <Card
                                key={item.id}
                                radius="4%"
                                width="33%"
                                imageUrl={item.posterImagePath}
                                title={item.mainTitle}
                                subTitle={
                                    item.productionDate?.split("-")[0] +
                                    (item.countryCode
                                        ? " • " + item.countryCode
                                        : "") +
                                    (item.author ? " • " + item.author : "")
                                }
                            />
                        ))}
                    </CardListSlick>
                    <Divider />
                </Wrapper>
            </section>
            <section className="section">
                <Wrapper>
                    <CardListSlick
                        title="TV 프로그램"
                        sizeHeader="sm"
                        addComponent={
                            <Link
                                href={`${currentUrl}/tv_shows?query=${query}`}
                            >
                                더보기
                            </Link>
                        }
                        ratedMovie="ratedMovie"
                        horizon
                    >
                        {state.data.tvShows.map((item) => (
                            <Card
                                key={item.id}
                                radius="4%"
                                width="33%"
                                imageUrl={item.posterImagePath}
                                title={item.mainTitle}
                                subTitle={
                                    item.productionDate?.split("-")[0] +
                                    (item.countryCode
                                        ? " • " + item.countryCode
                                        : "") +
                                    (item.author ? " • " + item.author : "")
                                }
                            />
                        ))}
                    </CardListSlick>
                    <Divider />
                </Wrapper>
            </section>
            <section className="section">
                <Wrapper>
                    <CardListSlick
                        title="책"
                        sizeHeader="sm"
                        addComponent={
                            <Link href={`${currentUrl}/books?query=${query}`}>
                                더보기
                            </Link>
                        }
                        ratedMovie={"ratedMovie"}
                        horizon
                    >
                        {state.data.books.map((item) => (
                            <Card
                                key={item.id}
                                radius="4%"
                                width="33%"
                                imageUrl={item.posterImagePath}
                                title={item.mainTitle}
                                subTitle={
                                    item.productionDate?.split("-")[0] +
                                    (item.countryCode
                                        ? " • " + item.countryCode
                                        : "") +
                                    (item.author ? " • " + item.author : "")
                                }
                            />
                        ))}
                    </CardListSlick>
                    <Divider />
                </Wrapper>
            </section>
            <section className="section">
                <Wrapper>
                    <CardListSlick
                        title="사용자"
                        sizeHeader="sm"
                        addComponent={
                            <Link
                                href={`${currentUrl}/people/users?query=${query}`}
                            >
                                더보기
                            </Link>
                        }
                        ratedMovie={"ratedMovie"}
                        horizon
                    >
                        {state.data.users.map((item) => (
                            <Card
                                key={item.id}
                                radius="50%"
                                width="33%"
                                imageUrl={randomUserImg()}
                                title={item.name}
                                subTitle={
                                    item.description ? item.description : ""
                                }
                            />
                        ))}
                    </CardListSlick>
                    <Divider />
                </Wrapper>
            </section>
        </Section>
    );
};

export default Searches;

const Section = styled.section`
    padding-top: 0px;
    margin: 0 20px;
    padding-bottom: 56px;

    @media (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }

    .section {
        padding: 8px 0px 0px;

        .headerTitle {
            margin: 0px 20px;
            .header {
                overflow: hidden;
                .searchTitle {
                    float: left;
                    color: rgb(0, 0, 0);
                    font-size: 19px;
                    font-weight: 700;
                    letter-spacing: -0.7px;
                    line-height: 28px;
                    margin: 8px 0px;
                }

                .topRight {
                    float: right;
                    .viewMore {
                        margin: 12px 0px;

                        > a {
                            color: rgb(255, 47, 110);
                            text-decoration: none;
                        }
                    }
                }
            }
        }

        .scrollBarContainer {
            position: relative;
            -webkit-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

            .scrollBar {
                overflow-x: auto;
                overflow-y: hidden;
                -webkit-overflow-scrolling: touch;

                .scrollingInner {
                    -webkit-transition: 500ms;
                    transition: 500ms;
                    .scrollRow {
                        margin: 0px 20px;
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.div`
    list-style: none;
    padding: 0px;
    white-space: nowrap;
    margin-bottom: 0px;
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

const Link = styled.a`
    float: right;
    margin: 12px 0;
    font-weight: 500;
    color: #ff2f6e;
    cursor: pointer;
    &:hover {
        color: #ff2f6e;
    }
`;
