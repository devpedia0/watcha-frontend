import React, { useState } from "react";
import styled from "styled-components";
import Language from "./Language";

export default function SelectForm(props) {
    const [lang, setLang] = useState(true);

    const languageModal = () => {
        setLang({ lang: !lang });
    };

    return (
        <BackScreen className={props.switchModal ? "hideSelectForm" : ""}>
            <ModalContainer>
                <Background onClick={props.languageModal} />
                <HalfBottomModal>
                    <Header title="선택">
                        <div className="leftBtn" onClick={props.languageModal}>
                            <button
                                className="xBtn"
                                aria-label="close"
                            ></button>
                        </div>
                        <HeaderTitle>선택</HeaderTitle>
                    </Header>
                    <LanRegion>
                        <div className="lanRegionInner">
                            <div className="lanRegionMargin">
                                <OptionUl>
                                    <li className="optionList">
                                        <span className="title">언어</span>
                                        <span onClick={() => setLang(!lang)}>
                                            한국어
                                        </span>
                                    </li>
                                    <li className="optionList">
                                        <span className="title">국가/지역</span>
                                        대한민국
                                    </li>
                                </OptionUl>
                            </div>
                        </div>
                    </LanRegion>
                </HalfBottomModal>
                <>
                    <Language
                        languageModal={languageModal}
                        switchModal={lang}
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
    z-index: 100;
    overflow: hidden scroll;
    &.hideSelectForm {
        display: none;
    }
`;

const ModalContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 150;
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
    z-index: 200;
    @media (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
    }
`;

const HalfBottomModal = styled.div`
    position: absolute;
    background: rgb(255, 255, 255);
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    bottom: 0px;
    left: 0px;
    height: 320px;
    overflow: hidden;
    min-height: 320px !important;
    z-index: 250;
    @media (min-width: 719px) {
        position: relative !important;
        display: inline-block;
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
    z-index: 300;
    background: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    width: 100%;
    height: 44px;
    padding: 0px 16px;
    border-bottom: 1px solid rgb(227, 227, 227);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    top: 0px;
    position: absolute;
    .leftBtn {
        position: relative;
        z-index: 2;
        .xBtn {
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K);
            padding: 0px;
            border: none;
            cursor: pointer;
            width: 24px;
            height: 24px;
            margin: 10px 0px;
        }
    }
`;

const HeaderTitle = styled.em`
    display: inline-block;
    position: absolute;
    right: 0px;
    left: 0px;
    z-index: 1;
    text-align: center;
    margin: 11px 0px;
`;

const LanRegion = styled.div`
    display: block;
    .lanRegionInner {
        margin: 0px 20px;
        .lanRegionMargin {
            margin: 60px 0px 0px;
        }
    }
`;

const OptionUl = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    .optionList {
        display: flex;
        align-items: center;
        color: rgb(0, 0, 0);
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 22px;
        height: 48px;
        border-bottom: 1px solid rgb(240, 240, 240);
        cursor: pointer;
        .title {
            flex: 1 1 0%;
            color: rgb(120, 120, 120);
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
