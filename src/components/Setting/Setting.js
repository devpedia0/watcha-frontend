import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Marketing from "../Modal/Marketing";
import Range from "../Modal/Range";
import SelectCountry from "../../pages/LoginSignUp/Languages/SelectCountry";
import LogOut from "../Modal/LogOut";
import Secession from "../Modal/Secession";


import AuthService from "../../services/auth.service";

export default function Setting(props) {
    const [facebook, setFacebook] = useState(true);
    const [twitter, setTwitter] = useState(true);
    const [marketing, setMarketing] = useState(true);
    const [range, setRange] = useState(true);
    const [lang, setLang] = useState(true);
    const [logOut, setLogOut] = useState(true);
    const [secession, setSecession] = useState(true);
    const [nation, setNation] = useState("대한민국");


    useEffect(() => {
        const getData = () => {
            AuthService.getUserInfo().then((response) => {
                if (response.data.countryCode === "US") {
                    setNation("미국");
                } else if (response.data.countryCode === "KR") {
                    setNation("대한민국");
                } else if (response.data.countryCode === "JP") {
                    setNation("일본");
                }
            });
        };
        getData();

        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);

    const marketingModal = () => {
        setMarketing({ marketing: !marketing });
    };

    const facebookChange = () => {
        setFacebook(() => !facebook);
    };

    const rangeModal = () => {
        setRange({ range: !range });
    };
    const twitterChange = () => {
        setTwitter(() => !twitter);
    };

    const languageModal = () => {
        setLang({ lang: !lang });
    };

    const logOutModal = () => {
        setLogOut({ logOut: !logOut });
    };

    const secessionModal = () => {
        setSecession({ secession: !secession });
    };

    return (
        <BackScreen className={props.switchModal ? "hideSetting" : ""}>
            <ModalContainer>
                <Background onClick={props.settingModal} />
                <Container>
                    <Header>
                        <div className="buttonBox" onClick={props.settingModal}>
                            <div className="leftBtn">
                                <button
                                    className="xB"
                                    aria-label="close"
                                ></button>
                            </div>

                        </div>
                        <div className="largeTitleBlock">
                            <div className="largeTitle">설정</div>
                        </div>

                        <div className="smallTitle">설정</div>
                    </Header>

                    <ChildrenContainer>
                        <div>
                            <div className="containerMargin">
                                <VisualUl>
                                    <TextList Pointer>
                                        <div
                                            className="inner"
                                            onClick={() =>
                                                setMarketing(!marketing)
                                            }
                                        >
                                            <div className="innerTitle">
                                                마케팅 정보
                                            </div>
                                        </div>
                                    </TextList>
                                    <TextList Pointer>
                                        <div
                                            className="inner"
                                            onClick={() => setRange(!range)}
                                        >
                                            <div className="innerTitle">
                                                공개 설정
                                            </div>
                                        </div>
                                    </TextList>
                                </VisualUl>
                                <Section>
                                    <div className="subCategoryTitle">
                                        SNS 연동 설정
                                    </div>
                                    <VisualUl Padding>
                                        <TextList>
                                            <div className="inner">
                                                <div className="innerTitle">
                                                    페이스북
                                                </div>
                                                <div className="extra">
                                                    <ToggleBtn aria-label="toggle">
                                                        <span
                                                            className={
                                                                facebook
                                                                    ? "active bar"
                                                                    : "inactive bar"
                                                            }
                                                            onClick={
                                                                facebookChange
                                                            }
                                                        ></span>
                                                        <span
                                                            className={
                                                                facebook
                                                                    ? "active circle"
                                                                    : "inactive circle"
                                                            }
                                                            onClick={
                                                                facebookChange
                                                            }
                                                        ></span>
                                                    </ToggleBtn>
                                                </div>
                                            </div>
                                        </TextList>
                                        <TextList>
                                            <div className="inner">
                                                <div className="innerTitle">
                                                    트위터
                                                </div>
                                                <div className="extra">
                                                    <ToggleBtn aria-label="toggle">
                                                        <span
                                                            className={
                                                                twitter
                                                                    ? "active bar"
                                                                    : "inactive bar"
                                                            }
                                                            onClick={
                                                                twitterChange
                                                            }
                                                        ></span>
                                                        <span
                                                            className={
                                                                twitter
                                                                    ? "active circle"
                                                                    : "inactive circle"
                                                            }
                                                            onClick={
                                                                twitterChange
                                                            }
                                                        ></span>
                                                    </ToggleBtn>
                                                </div>
                                            </div>
                                        </TextList>
                                    </VisualUl>
                                </Section>
                                <Section>
                                    <div className="subCategoryTitle">
                                        친구 설정
                                    </div>
                                    <VisualUl Padding>
                                        <TextList Pointer>
                                            <div className="inner">
                                                <div className="innerTitle">
                                                    페이스북 친구 추가
                                                </div>
                                            </div>
                                        </TextList>
                                    </VisualUl>
                                </Section>
                                <Section>
                                    <div className="subCategoryTitle">
                                        서비스 설정
                                    </div>
                                    <VisualUl Padding>
                                        <TextList>
                                            <div className="inner">
                                                <div className="innerTitle">
                                                    언어
                                                </div>
                                                <div className="extra">
                                                    <span className="languageValue">
                                                        한국어
                                                    </span>
                                                </div>
                                            </div>
                                        </TextList>
                                        <TextList>
                                            <div
                                                className="inner"
                                                onClick={() => setLang(!lang)}
                                            >
                                                <div className="innerTitle">
                                                    국가 및 지역
                                                </div>
                                                <div className="extra">
                                                    <span className="languageValue">
                                                        {nation}
                                                    </span>
                                                </div>
                                            </div>
                                        </TextList>
                                    </VisualUl>
                                </Section>
                                <Section>
                                    <div className="subCategoryTitle">
                                        고객 센터
                                    </div>
                                    <VisualUl Padding>
                                        <TextList Pointer>
                                            <div className="inner">
                                                <div className="innerTitle">
                                                    문의하기 / FAQ
                                                </div>
                                            </div>
                                        </TextList>
                                        <TextList Pointer>
                                            <div className="inner">
                                                <div className="innerTitle">
                                                    DB 수정/추가 요청하기
                                                </div>
                                            </div>
                                        </TextList>
                                    </VisualUl>
                                </Section>
                                <Section>
                                    <TextList Pointer>
                                        <div className="inner">
                                            <div className="innerTitle">
                                                공지사항
                                            </div>
                                        </div>
                                    </TextList>
                                </Section>
                                <Section>
                                    <TextList Pointer>
                                        <div className="inner">
                                            <div
                                                className="innerTitle"
                                                onClick={() =>
                                                    setLogOut(!logOut)
                                                }
                                            >
                                                로그아웃
                                            </div>
                                        </div>
                                    </TextList>
                                    <TextList Pointer>
                                        <div className="inner">
                                            <div
                                                className="innerTitle"
                                                onClick={() =>
                                                    setSecession(!secession)
                                                }
                                            >
                                                탈퇴하기
                                            </div>
                                        </div>
                                    </TextList>
                                </Section>
                            </div>
                        </div>
                    </ChildrenContainer>
                </Container>
                <>
                    <Marketing
                        marketingModal={marketingModal}
                        switchModal={marketing}
                    />
                    <Range rangeModal={rangeModal} switchModal={range} />
                    <SelectCountry
                        languageModal={languageModal}
                        switchModal={lang}
                    />
                    <LogOut logOutModal={logOutModal} switchModal={logOut} />
                    <Secession
                        secessionModal={secessionModal}
                        switchModal={secession}
                    />
                </>
            </ModalContainer>
        </BackScreen>
    );
}

const BackScreen = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 55;
    overflow: hidden scroll;
    &.hideSetting {
        display: none;
    }
`;

const ModalContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.56);
    @media (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
        ::after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            height: 100%;
            margin-left: -0.25em;
        }
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 50;
    @media (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
    }
`;

const Container = styled.div`
    position: relative;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    overflow: hidden;
    z-index: 100;
    @media (min-width: 719px) {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        text-align: left;
        width: 375px;
        height: auto;
        min-height: 540px;
        border-radius: 6px;
        overflow: auto;
    }
`;

const Header = styled.header`
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
    position: absolute;
    top: 0px;
    text-align: left;
    height: auto;
    .buttonBox {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .leftBtn {
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K);
            padding: 0px;
            border: none;
            cursor: pointer;
            width: 24px;
            height: 24px;
            margin: 10px 0px;
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
`;

const ChildrenContainer = styled.div`
    box-sizing: border-box;
    height: 100%;
    padding: 96px 0px 0px;
    overflow-y: scroll;
    @media (min-width: 719px) {
        height: auto;
        overflow: auto;
    }
    .containerMargin {
        margin: 0px 20px;
    }
`;

const VisualUl = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 8px 0px 0px;
    ${(props) => props.Padding && `padding: 0px`}
`;

const TextList = styled.li`
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
    cursor: ${(props) => (props.Pointer ? "pointer" : "")};
    .inner {
        display: flex;
        flex: 1 1 0%;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        min-height: 48px;
        border-bottom: 1px solid rgb(234, 233, 232);
        .innerTitle {
            flex: 1 1 0%;
            white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .languageValue {
            color: rgb(160, 160, 160);
            vertical-align: top;
        }
    }
`;

const Section = styled.section`
    margin: 32px 0px;
    .subCategoryTitle {
        color: rgb(140, 140, 140);
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 19px;
        padding: 5px 0px;
    }
`;

const ToggleBtn = styled.button`
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    .bar {
        display: inline-block;
        background: rgb(237, 237, 237);
        vertical-align: top;
        width: 52px;
        height: 20px;
        border-radius: 20px;
        margin: 6px 3px;
        transition: all 300ms ease 0s;
        &.active {
            background: rgba(255, 47, 110, 0.4);
        }
        &.inactive {
            background: rgb(237, 237, 237);
        }
    }
    .circle {
        display: inline-block;
        position: absolute;
        top: 3px;
        left: 3px;
        background: rgb(255, 255, 255);
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px 0px,
            rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;
        transition: all 300ms ease 0s;
        &.active {
            background: rgb(255, 47, 110);
            left: 29px;
        }
        &.inactive {
            background: rgb(255, 255, 255);
            left: 3px;
        }
    }
`;
