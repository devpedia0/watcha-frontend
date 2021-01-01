import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../services/api";
import WishModal from "../../components/Modal/WishModal";

import { CardPoster, Header } from "../../components";

export default function Wish() {
    const [state, setState] = useState([]);
    const [wishVisible, setWishVisible] = useState(true);
    const [order, setOrder] = useState("가나다 순");
    const id = JSON.parse(localStorage.getItem("id"));
    const contentType = "MOVIES";

    // ?order=NEW&
    // if (props.state) {
    //     baseUrl = `/users/${id}/${contentType}/wishes?order=${props.state}&page=1&size=7`;
    // } else {
    //     baseUrl = `/users/${id}/${contentType}/wishes?page=1&size=7`;
    // }

    const orderRules = () => {
        // if (order === "가나다 순") {
        //     const baseUrl = `/users/${id}/${contentType}/wishes?order=TITLE&page=1&size=7`;
        // } else if (order === "평점 순") {
        //     const baseUrl = `/users/${id}/${contentType}/wishes?order=AVG_SCORE&page=1&size=7`;
        // } else if (order === "신작 순") {
        //     const baseUrl = `/users/${id}/${contentType}/wishes?order=NEW&page=1&size=7`;
        // } else if (order === "구작 순") {
        //     const baseUrl = `/users/${id}/${contentType}/wishes?order=OLD&page=1&size=7`;
        // }
    };

    useEffect(() => {
        const getDataAPI = async () => {
            const baseUrl = `/users/${id}/${contentType}/wishes?page=1&size=7`;
            const response = await api.get(baseUrl);
            setState(() => response.data);
        };
        getDataAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    // useEffect(() => {
    //     console.log("order", order);
    // }, [order]);

    const wishModal = () => {
        setWishVisible({ wishVisible: !setWishVisible });
    };

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
                            <div className="largeTitle" onClick={orderRules}>
                                보고싶어요
                            </div>
                        </div>
                        <div className="smallTitle">보고싶어요</div>
                    </header>
                    <Content>
                        <div className="filterBar">
                            <div>
                                <div
                                    className="margin"
                                    onClick={() => setWishVisible(!wishModal)}
                                >
                                    <button className="downArrow">
                                        <span className="dropDown"></span>
                                        <span className="dropTitle">
                                            {order}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Ul>
                            {state.map((item) => (
                                <StyledCard item={item} />
                            ))}
                        </Ul>
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
            <>
                <WishModal
                    wishModal={wishModal}
                    switchModal={wishVisible}
                    setOrder={setOrder}
                />
            </>
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
    display: block;
    width: 100%;

    .filterBar {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        background: rgb(251, 251, 251);
        height: 48px;
        bottom: -49px;
        width: 100%;

        .margin {
            margin: 0px 20px;

            .downArrow {
                background: none;
                padding: 0px;
                border: none;
                margin: 0px;
                cursor: pointer;

                .dropDown {
                    display: inline-block;
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=)
                        center center / contain no-repeat;
                    width: 24px;
                    height: 24px;
                    vertical-align: top;
                }

                .dropTitle {
                    color: rgb(0, 0, 0);
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: -0.5px;
                    line-height: 30px;
                    margin: 3px 0px 0px 2px;
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

const Ul = styled.ul`
    display: block;
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

const StyledCard = styled(CardPoster)`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 33.333333333333336%;
    padding: 0 5px;
    margin: 0 0 24px;

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
