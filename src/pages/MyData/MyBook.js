import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import AuthService from "../../services/auth.service";

export default function MyBook() {
    const [rated, setRated] = useState({
        book: 0,
    });

    const [wishes, setWishes] = useState({
        book: 0,
    });

    const [watching, setWatching] = useState({
        book: 0,
    });

    useEffect(() => {
        const getData = async () => {
            // const response = AuthService.getUserRating().then((response) => {
            AuthService.getUserRating().then((response) => {
                setRated({
                    book: response.data.book.ratingCount,
                });
                setWishes({
                    book: response.data.book.wishCount,
                });
                setWatching({
                    book: response.data.book.watchingCount,
                });
            });
        };
        getData();
    }, []);
    return (
        <Page>
            <Header />
            <Section>
                <section className="container">
                    <header className="header">
                        <div className="backBtn">
                            <div className="btnIcon"></div>
                        </div>
                        <div className="largeTitleBlock">
                            <div className="largeTitle">책</div>
                        </div>
                        <div className="smallTitle">책</div>
                    </header>
                    <Content>
                        <div className="rating">
                            <header className="ratingHeader">
                                <h2 className="ratingTitle">평가</h2>
                                <span className="titleNumber">
                                    {rated.book}
                                </span>
                                <div className="topRight">
                                    <div className="viewMore">
                                        <a href="/">더보기</a>
                                    </div>
                                </div>
                            </header>
                        </div>

                        <hr className="divider" />
                        <ContentRow>
                            <ul className="visualUl">
                                <li className="textList">
                                    <div className="listInner">
                                        <div className="listTitle">
                                            <a href="/" className="localLink">
                                                보고싶어요
                                                <span className="number">
                                                    {wishes.book}
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
                                                    {watching.book}
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
            {/* <Footer>
        <nav className="footerNav">
          <ul className="navTabUl">
            <li className="navItem"></li>
          </ul>
        </nav>
      </Footer> */}
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

    .container {
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

    .rating {
        margin: 0px 20px;

        .ratingHeader {
            overflow: hidden;

            .ratingTitle {
                float: left;
                color: rgb(0, 0, 0);
                font-size: 19px;
                font-weight: 700;
                letter-spacing: -0.7px;
                line-height: 28px;
                margin: 8px 0px;
            }
            .titleNumber {
                display: inline-block;
                color: rgb(160, 160, 160);
                font-size: 15px;
                font-weight: 400;
                letter-spacing: -0.5px;
                line-height: 20px;
                margin: 12px 0px 12px 6px;
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

        .cheatBlock {
            display: none;
            position: absolute;
            top: 0;
            z-index: 1;
            left: 0;
            background-color: #fff;
            width: 0;
            height: 100%;
        }

        .arrow_left {
            display: none;
            position: absolute;
            top: 0px;
            z-index: 2;
            left: 10px;
            -webkit-box-align: center;
            align-items: center;
            height: 100%;
            opacity: 0;
            transition: all 300ms ease 0s;

            .backward {
                background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=")
                    12px center / 12px no-repeat rgb(255, 255, 255);
                box-sizing: border-box;
                border: 1px solid rgb(249, 249, 249);
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
                width: 34px;
                height: 34px;
                cursor: pointer;
                transition: opacity 300ms ease 0s;
            }
        }

        .arrow_right {
            display: flex;
            position: absolute;
            top: 0px;
            z-index: 2;
            right: 10px;
            -webkit-box-align: center;
            align-items: center;
            height: 100%;
            opacity: 0;
            transition: all 300ms ease 0s;

            .forward {
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                background-color: rgb(255, 255, 255);
                box-sizing: border-box;
                border: 1px solid rgb(249, 249, 249);
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
                background-size: 12px;
                width: 34px;
                height: 34px;
                cursor: pointer;
                transition: opacity 300ms ease 0s;

                > img {
                    opacity: 0.4;
                }
            }
        }
    }

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

// const Footer = styled.footer`
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
