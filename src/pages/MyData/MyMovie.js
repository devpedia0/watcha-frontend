import React, { useState, useEffect } from "react";
import styled from "styled-components";

import AuthService from "../../services/auth.service";
import api from "../../services/api";

import { CardListSlick, CardPoster, Header } from "../../components";

export default function MyMovie() {
    const [rated, setRated] = useState({
        movie: 0,
    });

    const [wishes, setWishes] = useState({
        movie: 0,
    });

    const [watching, setWatching] = useState({
        movie: 0,
    });

    const [state, setState] = useState([]);

    const id = JSON.parse(localStorage.getItem("id"));
    const contentType = "MOVIES";

    useEffect(() => {
        const getDataAPI = async () => {
            const baseUrl = `/users/${id}/${contentType}/ratings`;

            const response = await api.get(baseUrl + `?page=1&size=7`);

            setState(() => response.data);
            console.log(response);
        };
        getDataAPI();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getData = async () => {
            AuthService.getUserRating().then((response) => {
                setRated({
                    movie: response.data.movie.ratingCount,
                });
                setWishes({
                    movie: response.data.movie.wishCount,
                });
                setWatching({
                    movie: response.data.movie.watchingCount,
                });
            });
        };
        getData();
    }, []);

    return (
        <Page>
            <Header />
            <Section>
                <section className="mainContainer">
                    <header className="header">
                        <div className="backBtn">
                            <div className="btnIcon"></div>
                        </div>
                        <div className="largeTitleBlock">
                            <div className="largeTitle">영화</div>
                        </div>
                        <div className="smallTitle">영화</div>
                    </header>
                    <Content>
                        <Ul>
                            <Wrapper>
                                <CardListSlick
                                    title="평가"
                                    count={rated.movie}
                                    ratedMovie={"ratedMovie"}
                                    sizeHeader="sm"
                                    addComponent={<div>더보기</div>}
                                >
                                    {state.map((item) => (
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
                                                href="/wish"
                                                className="localLink"
                                            >
                                                보고싶어요
                                                <span className="number">
                                                    {wishes.movie}
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="textList">
                                    <div className="listInner">
                                        <div className="listTitle">
                                            <a href="/" className="localLink">
                                                보는중
                                                <span className="number">
                                                    {watching.movie}
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

            <Footer>
                <nav className="footerNav">
                    <ul className="navTabUl">
                        <li className="navItem"></li>
                    </ul>
                </nav>
            </Footer>
        </Page>
    );
}

const Page = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const Section = styled.section`
    padding-top: 0px;
    padding-bottom: 56px;

    @media (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }

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
    <<<<<<< HEAD .divider {
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

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: 51;
    background: #fff;
    box-sizing: border-box;
    width: 100%;
    border-top: 1px solid #d2d2d2;
    @media (min-width: 719px) {
        display: none;
    }
    .footerNav {
        box-sizing: border-box;
        height: 56px;
        padding: 8px 0 4px;
        .navTabUl {
            list-style: none;
            padding: 0;
            margin: 0;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
            overflow: hidden;
            .navItem {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                text-align: center;
                height: 100%;
            }
        }
    }
`;

// const Footer = styled.footer
//   position: fixed;
//   bottom: 0;
//   z-index: 51;
//   background: #fff;
//   box-sizing: border-box;
//   width: 100%;
//   border-top: 1px solid #d2d2d2;

//   @media (min-width: 719px) {
//     display: none;
//   }

//   .footerNav {
//     box-sizing: border-box;
//     height: 56px;
//     padding: 8px 0 4px;

//     .navTabUl {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//       display: -webkit-box;
//       display: -webkit-flex;
//       display: -ms-flexbox;
//       display: flex;
//       height: 100%;
//       overflow: hidden;

//       .navItem {
//         -webkit-flex: 1;
//         -ms-flex: 1;
//         flex: 1;
//         text-align: center;
//         height: 100%;
//       }
//     }
//   }
// `;
