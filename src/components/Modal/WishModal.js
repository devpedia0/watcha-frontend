import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function WishModal(props) {
    const [state, setState] = useState("가나다 순");

    const handleState = (e) => {
        if (e.target.id === "1") {
            setState("가나다 순");
            console.log("h1", state);
        } else if (e.target.id === "2") {
            setState("평점 순");
            console.log("h1", state);
        } else if (e.target.id === "3") {
            setState("신작 순");
            console.log("h1", state);
        } else if (e.target.id === "4") {
            setState("구작 순");
            console.log("h1", state);
        }
        // props.wishModal();
    };

    useEffect(() => {
        props.setOrder(state);
    }, [state]);

    return (
        <BackScreen className={props.switchModal ? "hideForm" : ""}>
            <ModalContainer>
                <Background onClick={props.wishModal} />
                <div className="halfBottomModal">
                    <Header title="선택">
                        <div className="leftBtn" onClick={props.wishModal}>
                            <button ariaLabel="xBtn" className="xBtn" />
                        </div>
                        <HeaderTitle>보고싶어요</HeaderTitle>
                    </Header>
                    <LanguageContainer>
                        <div>
                            <div className="containerMargin">
                                <LanguageUl>
                                    <li
                                        onClick={handleState}
                                        className="language"
                                    >
                                        <div className="languageInner">
                                            <div className="title" id="1">
                                                가나다 순
                                            </div>
                                            <div className="extra">
                                                <span
                                                    className={
                                                        state === "가나다 순"
                                                            ? "checker"
                                                            : ""
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        onClick={handleState}
                                        className="language"
                                    >
                                        <div className="languageInner">
                                            <div className="title" id="2">
                                                평점 순
                                            </div>
                                            <div className="extra">
                                                <span
                                                    className={
                                                        state === "평점 순"
                                                            ? "checker"
                                                            : ""
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        onClick={handleState}
                                        className="language"
                                    >
                                        <div className="languageInner">
                                            <div className="title" id="3">
                                                신작 순
                                            </div>
                                            <div className="extra">
                                                <span
                                                    className={
                                                        state === "신작 순"
                                                            ? "checker"
                                                            : ""
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        onClick={handleState}
                                        className="language"
                                    >
                                        <div className="languageInner">
                                            <div className="title" id="4">
                                                구작 순
                                            </div>
                                            <div className="extra">
                                                <span
                                                    className={
                                                        state === "구작 순"
                                                            ? "checker"
                                                            : ""
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </li>
                                </LanguageUl>
                            </div>
                        </div>
                    </LanguageContainer>
                </div>
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
    &.hideForm {
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
    .halfBottomModal {
        position: relative;
        background: rgb(255, 255, 255);
        width: 100%;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
        overflow: hidden;
        z-index: 300;
        @media (min-width: 719px) {
            display: inline-block;
            position: relative;
            vertical-align: middle;
            text-align: left;
            width: 375px;
            height: auto;
            min-height: 320px;
            border-radius: 6px;
            overflow: auto;
        }
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 100;
    @media (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
    }
`;

const Header = styled.header`
    left: 0px;

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
    position: absolute;
    top: 0px;
    .leftBtn {
        cursor: pointer;
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

const LanguageContainer = styled.div`
    box-sizing: border-box;
    height: 100%;
    padding: 44px 0px 0px;
    overflow-y: scroll;
    @media (min-width: 719px) {
        box-sizing: content-box;
        height: auto;
        overflow: auto;
    }
    .containerMargin {
        margin: 0px 20px;
    }
`;

const LanguageUl = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    .language {
        text-align: left;
        box-sizing: border-box;
        min-height: 48px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        color: rgb(0, 0, 0);
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 22px;
    }
    .extra {
        .checker {
            display: inline-block;
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTMgMTQuMzAzbDcuNTQzLTcuMzY0YTEuMjY1IDEuMjY1IDAgMCAxIDEuNzc4LjAxIDEuMjM1IDEuMjM1IDAgMCAxLS4wMSAxLjc1OEw5Ljg5NiAxNy44M2EyLjUyIDIuNTIgMCAwIDEtLjAyNS0uMDI2bC00Ljc2OC00LjgzN2ExLjI2IDEuMjYgMCAwIDEgLjAwNi0xLjc3NSAxLjI0MSAxLjI0MSAwIDAgMSAxLjc2Mi4wMDdsMy4wMzggMy4wODMuMDIxLjAyMXoiLz4KPC9zdmc+Cg==)
                center center / contain no-repeat;
            vertical-align: top;
            width: 24px;
            height: 24px;
        }
    }
    .languageInner {
        display: flex;
        flex: 1 1 0%;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        min-height: 48px;
        border-bottom: 1px solid rgb(234, 233, 232);
        .title {
            flex: 1 1 0%;
            white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
