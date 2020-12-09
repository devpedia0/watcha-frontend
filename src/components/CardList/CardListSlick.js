import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

const CardListSlick = ({
    title,
    description,
    posterUrl,
    sizeCard,
    sizeHeader,
    children,
}) => {
    const slider = useRef();
    const [buttonCtrl, setButtonCtrl] = useState({
        posX: 0,
        left: false,
        right: true,
    });

    const handleClickButton = (type) => {
        const childNum = slider.current.children.length;
        const childWidth = slider.current.children[0].clientWidth;
        const childTotalWidth = childNum * childWidth;
        const dist = slider.current.offsetWidth;
        const newPosX =
            type === "right" ? buttonCtrl.posX + dist : buttonCtrl.posX - dist;

        setButtonCtrl({
            posX: newPosX,
            left: newPosX > 0,
            right: newPosX <= childTotalWidth - dist,
        });
    };

    return (
        <Wrapper>
            <Header size={sizeHeader}>
                {posterUrl ? (
                    <>
                        <img src={posterUrl} alt="" />
                        <div className="infoWrapper">
                            <p>{description}</p>
                            <div className="title">{title}</div>
                        </div>
                    </>
                ) : (
                    <div className="title">{title}</div>
                )}
            </Header>
            <Content>
                <div className="slickWrapper">
                    <div
                        className="slickBlock"
                        ref={slider}
                        style={{
                            transform: `translateX(-${buttonCtrl.posX}px)`,
                        }}
                    >
                        {children}
                    </div>
                    <ArrowButton
                        type="left"
                        show={buttonCtrl.left}
                        onClick={() => handleClickButton("left")}
                        size={sizeCard}
                    />
                    <ArrowButton
                        type="right"
                        show={buttonCtrl.right}
                        onClick={() => handleClickButton("right")}
                        size={sizeCard}
                    />
                </div>
            </Content>
        </Wrapper>
    );
};

export default CardListSlick;

const Wrapper = styled.div`
    margin-bottom: 20px;

    @media only screen and (min-width: 719px) {
        margin-bottom: 30px;
    }

    @media only screen and (min-width: 1100px) {
        margin-bottom: 42px;
    }
`;
const Header = styled.div`
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0px 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;

    img {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        margin: 4px 10px 4px 0px;
        background-size: contain;

        @media only screen and (min-width: 719px) {
            width: 42px;
            height: 42px;
        }
    }

    .infoWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: calc(100% - 74px);

        p {
            color: rgb(116, 116, 123);
            font-size: 15px;
            font-weight: normal;
            letter-spacing: -0.2px;
            line-height: 19px;
            margin-bottom: 1px;
        }
    }

    .title {
        color: #292a32;
        font-weight: 700;

        ${(props) =>
            props.size === "sm"
                ? css`
                      font-size: 19px;
                      letter-spacing: -0.7px;
                      line-height: 28px;
                      margin: 8px 0;
                  `
                : css`
                      font-size: 22px;
                      letter-spacing: -0.4px;
                      line-height: 30px;
                  `}
    }
`;

const Content = styled.div`
    position: relative;

    .slickWrapper {
        overflow: hidden;
    }

    .slickBlock {
        transition: 500ms;
        width: 100%;
        padding: 0px;
        white-space: nowrap;
        margin-top: 0px;
        margin-bottom: 0px;
        margin: 0px -4px;
        transition: 500ms;

        @media only screen and (min-width: 719px) {
            margin-right: 28px;
            margin-left: 20px;
            margin: 0px -5px;
        }
        @media only screen and (min-width: 760px) {
            margin-right: 0px;
            margin-left: 0px;
            margin: 0px -8px;
        }
    }
`;

const ArrowButton = styled.div`
    right: ${(props) => (props.type === "right" ? "-5px" : null)};
    left: ${(props) => (props.type === "left" ? "-19px" : null)};
    display: ${(props) => (props.show ? "flex" : "none")};
    position: absolute;
    top: 0px;
    z-index: 22;
    overflow: visible;
    align-items: center;
    height: 100%;
    transition: all 300ms ease 0s;
    opacity: 0;
    align-items: flex-start;

    ::after {
        content: "";
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        border: 1px solid rgb(249, 249, 249);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
        border-radius: 50%;
        background-size: 12px;
        width: 34px;
        height: 34px;
        cursor: pointer;
        transition: opacity 300ms ease 0s;

        ${(props) => {
            const url =
                props.type === "right"
                    ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=";
            return css`
                background: url(${url}) 12px center / 12px no-repeat
                    rgb(255, 255, 255);
            `;
        }}

        @media only screen and (min-width: 760px) {
            margin-top: ${(props) =>
                props.size === "sm"
                    ? "calc((100vw - 120px) * 108 / 157 / 5 - 17px)"
                    : "calc((100vw - 120px) * 108 / 157 / 4 - 17px)"};
        }
        @media only screen and (min-width: 1100px) {
            margin-top: ${(props) =>
                props.size === "sm"
                    ? "calc((100vw - 120px) * 108 / 157 / 6 - 17px)"
                    : "calc((100vw - 120px) * 108 / 157 / 5 - 17px)"};
        }
        @media only screen and (min-width: 1440px) {
            margin-top: ${(props) =>
                props.size === "sm"
                    ? "calc((100vw - 120px) * 108 / 157 / 7 - 17px)"
                    : "calc((100vw - 120px) * 108 / 157 / 6 - 17px)"};
        }
    }

    @media only screen and (min-width: 760px) {
        opacity: 1 !important;
    }
`;
