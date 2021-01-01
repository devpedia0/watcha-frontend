import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuthService from "../../services/auth.service";
import api from "../../services/api";

export default function Private(props) {
    const [checked, setChecked] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await AuthService.getUserInfo();
            setChecked(() => response.data.accessRange);

            // console.log('useEffect', checked); //PUBLIC
        };
        getData();
    }, []);

    const handleChange = (accessRange) => {
        api.put("/users/settings", { accessRange }).then((response) => {
            if (response.status === 200) {
                AuthService.getUserInfo().then((newData) => {
                    console.log(newData.data.accessRange);
                });
            }
            setChecked(accessRange);
        });
    };

    return (
        <BackScreen className={props.switchModal ? "hideRange" : ""}>
            <ModalContainer>
                <Background onClick={props.rangeModal} />
                <Container>
                    <Header>
                        <div className="buttonBox" onClick={props.rangeModal}>
                            <div className="leftBtn">
                                <button
                                    className="xB"
                                    aria-label="close"
                                ></button>
                            </div>
                        </div>
                        <em className="title">공개 정보</em>
                    </Header>

                    <ChildrenContainer>
                        <div>
                            <div className="containerMargin">
                                <VisualUl>
                                    <li
                                        className="list"
                                        onClick={() => handleChange("PUBLIC")}
                                    >
                                        <div className="radioContainer">
                                            <span
                                                id="1"
                                                className={
                                                    checked === "PUBLIC"
                                                        ? "radioImg active"
                                                        : "radioImg inactive"
                                                }
                                            ></span>
                                        </div>
                                        <div className="titleContainer">
                                            <div className="title">
                                                전체공개
                                            </div>
                                            <div className="sub">
                                                왓챠피디아의 모든 유저에게
                                                공개합니다.
                                            </div>
                                        </div>
                                    </li>

                                    <li
                                        className="list"
                                        onClick={() => handleChange("FRIEND")}
                                    >
                                        <div className="radioContainer">
                                            <span
                                                id="2"
                                                className={
                                                    checked === "FRIEND"
                                                        ? "radioImg active"
                                                        : "radioImg inactive"
                                                }
                                            ></span>
                                        </div>
                                        <div className="titleContainer">
                                            <div className="title">
                                                친구공개
                                            </div>
                                            <div className="sub">
                                                내가 팔로우하는 유저에게
                                                공개합니다.
                                            </div>
                                        </div>
                                    </li>

                                    <li
                                        className="list"
                                        onClick={() => handleChange("PRIVATE")}
                                    >
                                        <div className="radioContainer">
                                            <span
                                                id="3"
                                                className={
                                                    checked === "PRIVATE"
                                                        ? "radioImg active"
                                                        : "radioImg inactive"
                                                }
                                            ></span>
                                        </div>
                                        <div className="titleContainer">
                                            <div className="title">비공개</div>
                                            <div className="sub">
                                                아무에게도 공개하지 않습니다.
                                            </div>
                                        </div>
                                    </li>
                                </VisualUl>
                            </div>
                        </div>
                    </ChildrenContainer>
                </Container>
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
    &.hideRange {
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
    .buttonBox {
        display: flex;
        z-index: 2;
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
    .title {
        display: inline-block;
        position: absolute;
        right: 0px;
        left: 0px;
        z-index: 1;
        text-align: center;
        margin: 11px 0px;
        font-style: normal;
    }
`;

const ChildrenContainer = styled.div`
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

const VisualUl = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    .list {
        display: flex;
        cursor: pointer;
        .radioContainer {
            .radioImg {
                display: inline-block;
                width: 24px;
                height: 24px;
                vertical-align: top;
                margin: 20px 12px 20px 4px;
                animation: 250ms ease 0s 1 normal none running animation-glcxcy;
                &.active {
                    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+MjAxQ0NFNUEtRjFCQS00NDgyLTk2MzYtN0NCQjlGRjY2RTAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJDb21wb25lbnRzKFdlYiktLy1DSkstLy1Td2l0Y2hlcy0mYW1wOy1TbGlkZXJzLS8tUmFkaW8tLy1TZWxlY3RlZCI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJib3VuZHMiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMTIsNyBDOS4yLDcgNyw5LjIgNywxMiBDNywxNC44IDkuMiwxNyAxMiwxNyBDMTQuOCwxNyAxNywxNC44IDE3LDEyIEMxNyw5LjIgMTQuOCw3IDEyLDcgTDEyLDcgWiBNMTIsMiBDNi41LDIgMiw2LjUgMiwxMiBDMiwxNy41IDYuNSwyMiAxMiwyMiBDMTcuNSwyMiAyMiwxNy41IDIyLDEyIEMyMiw2LjUgMTcuNSwyIDEyLDIgTDEyLDIgWiBNMTIsMjAgQzcuNiwyMCA0LDE2LjQgNCwxMiBDNCw3LjYgNy42LDQgMTIsNCBDMTYuNCw0IDIwLDcuNiAyMCwxMiBDMjAsMTYuNCAxNi40LDIwIDEyLDIwIEwxMiwyMCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGRjJGNkUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")
                        center center / contain no-repeat;
                }
                &.inactive {
                    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+RTNGQ0NDNTEtRjNCNy00QUZBLTkxQkMtRjREN0IxQUU4N0JDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJDb21wb25lbnRzKFdlYiktLy1DSkstLy1Td2l0Y2hlcy0mYW1wOy1TbGlkZXJzLS8tUmFkaW8tLy1CYXNlIj4KICAgICAgICAgICAgPHJlY3QgaWQ9ImJvdW5kcyIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwyIEM2LjUsMiAyLDYuNSAyLDEyIEMyLDE3LjUgNi41LDIyIDEyLDIyIEMxNy41LDIyIDIyLDE3LjUgMjIsMTIgQzIyLDYuNSAxNy41LDIgMTIsMiBMMTIsMiBaIE0xMiwyMCBDNy42LDIwIDQsMTYuNCA0LDEyIEM0LDcuNiA3LjYsNCAxMiw0IEMxNi40LDQgMjAsNy42IDIwLDEyIEMyMCwxNi40IDE2LjQsMjAgMTIsMjAgTDEyLDIwIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0NBQ0FDQSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+")
                        center center / contain no-repeat;
                }
            }
        }
        .titleContainer {
            flex: 1 1 0%;
            padding: 10px 0px;
            border-bottom: 1px solid rgb(240, 240, 240);
            .title {
                color: rgb(0, 0, 0);
                font-size: 17px;
                font-weight: 400;
                letter-spacing: -0.7px;
                line-height: 22px;
                margin: 0px 0px 2px;
            }
            .sub {
                color: rgb(140, 140, 140);
                font-size: 14px;
                font-weight: 400;
                letter-spacing: -0.3px;
                line-height: 19px;
            }
        }
    }
`;
