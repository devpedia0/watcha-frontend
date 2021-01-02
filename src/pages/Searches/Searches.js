import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Divider, Loader } from "../../styles";
import { CardListSlick, CardPoster, Header, Card } from "../../components";
import api from "../../services/api";
import history from "../../history";
import queryString from "query-string";
function Searches() {
    const query = queryString.parse(history.location.search).query;

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
                console.error(err);
            });
    }, [query]);

    if (!query) {
        alert("검색내용을 입력해주세요.");
        return history.goBack();
    }

    if (state.isFetching) return <Loader height="800px" />;
    console.log(state.data.movies);
    return (
        <Page>
            <Header />
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
                            addComponent={<div>더보기</div>}
                            ratedMovie="ratedMovie"
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
                            addComponent={<div>더보기</div>}
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
                            addComponent={<div>더보기</div>}
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
                            addComponent={<div>더보기</div>}
                            ratedMovie={"ratedMovie"}
                            horizon
                        >
                            {state.data.users.map((item) => (
                                <Card
                                    key={item.id}
                                    radius="4%"
                                    width="33%"
                                    imageUrl={item.profileImagePath}
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
        </Page>
    );
}

export default Searches;

const Page = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

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
// ###
// const Ul = styled.ul`
//     list-style: none;
//     padding: 0px;
//     white-space: nowrap;
//     margin-top: 14px;
//     margin-bottom: 0px;
//     margin-right: -5px !important;
//     margin-left: -5px !important;

//     ::after {
//         content: "";
//         display: inline-block;
//         width: 20px;
//         height: 100%;
//     }
// `;

// const Li = styled.li`
//     display: inline-block;
//     vertical-align: top;
//     box-sizing: border-box;
//     width: 33.333333333333336%;
//     padding: 0 5px;
//     margin: 0 0 24px;

//     @media (min-width: 520px) {
//         width: 25%;
//     }

//     @media (min-width: 680px) {
//         width: 20%;
//     }

//     @media (min-width: 840px) {
//         width: 16.6667%;
//     }

//     @media (min-width: 960px) {
//         width: 14.2857%;
//     }

//     @media (min-width: 1100px) {
//         width: 12.5%;
//     }

//     .contentPosterBlock {
//         position: relative;
//         width: 100%;
//         height: 0;
//         padding-bottom: 145.37037037037038%;

//         .lazyLoading {
//             position: relative;
//             overflow: hidden;
//             position: absolute;
//             top: 0;
//             left: 0;
//             box-sizing: border-box;
//             width: 100%;
//             height: 100%;
//             border: 1px solid #eae9e8;
//             border-radius: 5px;
//             background: #f8f8f8;
//             -webkit-transition: 300ms;
//             transition: 300ms;

//             .styledImg {
//                 vertical-align: top;
//                 width: 100%;
//                 height: 100%;
//                 opacity: 1;
//                 object-fit: cover;
//                 transition: opacity 420ms ease 0s;
//             }
//         }

//         .badge {
//             display: block;
//             position: relative;
//             float: right;
//             background: url("https://an2-img.amz.wtchn.net/image/v1/updatable_images/2570/original/f72039e19e3d483c3c6d8178c526a1c979537975.png")
//                 center center / 17px no-repeat rgb(255, 255, 255);
//             box-sizing: border-box;
//             width: 24px;
//             height: 24px;
//             padding: 4px 3px 3px 4px;
//             margin: 4px 4px 0px 0px;
//             border: 1px solid rgba(0, 0, 0, 0.07);
//             border-radius: 50%;
//             opacity: 1;
//             transition: opacity 300ms ease 0s;

//             @media (min-width: 719px) {
//                 margin: 6px 6px 0px 0px;
//                 background-size: 20px;
//                 width: 30px;
//                 height: 30px;
//                 padding: 4px;
//             }
//         }
//     }

//     .contentInfo {
//         text-align: left;
//         width: calc(100% - 10px);
//         margin: 5px 10px 0 0;

//         .contentTitle {
//             color: rgb(41, 42, 50);
//             font-size: 16px;
//             font-weight: 500;
//             letter-spacing: -0.3px;
//             line-height: 22px;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//         }
//         .contentRating {
//             color: rgb(255, 161, 54);
//             font-size: 13px;
//             font-weight: 400;
//             letter-spacing: -0.2px;
//             line-height: 18px;
//             white-space: nowrap;
//             height: 18px;
//             overflow: hidden;
//             text-overflow: ellipsis;

//             @media (min-width: 719px) {
//                 margin-top: 2px;
//             }
//         }
//     }
// `;

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
