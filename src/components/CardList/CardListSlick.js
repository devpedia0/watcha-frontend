import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
const CardListSlick = ({
    title,
    description,
    posterUrl,
    count,
    sizeHeader,
    horizon,
    userId,
    fetchMore,
    onClickfetch = () => {},
    addComponent: AddComponent,
    children,
}) => {
    const slider = useRef();
    const [scollCtrl, setScrollCtrl] = useState({
        leftWidth: 0,
        slideWidth: 0,
    });
    const [buttonCtrl, setButtonCtrl] = useState({
        posX: 0,
        left: false,
        right: true,
        show: true,
    });

    useEffect(() => {
        try {
            const childNum = slider.current.children.length;
            const childWidth = slider.current.children[0].clientWidth;
            const slideWidth = slider.current.offsetWidth;
            const curWidth = buttonCtrl.posX + slideWidth;
            const childTotalWidth = horizon
                ? Math.ceil(childNum / 3) * childWidth
                : childNum * childWidth;

            let leftWidth = childTotalWidth - curWidth;
            setScrollCtrl({ leftWidth, slideWidth });
            setButtonCtrl((state) => ({
                ...state,
                right: fetchMore || 50 < leftWidth,
            }));
        } catch (err) {
            console.log(err);
        }
    }, [buttonCtrl.posX, horizon, fetchMore]);

    const handleClickButton = (type) => {
        const { leftWidth, slideWidth } = scollCtrl;

        let newPosX;
        if (type === "right") {
            if (leftWidth > slideWidth || fetchMore) {
                newPosX = buttonCtrl.posX + slideWidth;
            } else newPosX = buttonCtrl.posX + leftWidth;
        } else {
            newPosX =
                buttonCtrl.posX <= slideWidth
                    ? 0
                    : buttonCtrl.posX - slideWidth;
        }
        setButtonCtrl({
            posX: newPosX,
            left: newPosX > 0,
            right: fetchMore || 50 < leftWidth - slideWidth,
        });
    };

    const handleMouseOver = () => {
        if (!buttonCtrl.show) {
            setButtonCtrl({ ...buttonCtrl, show: true });
        }
    };

    return (
        <Wrapper>
            <Header size={sizeHeader}>
                {userId ? (
                    <div className="title-block">
                        <a
                            className="user-info"
                            href={`/users/${userId}`}
                            alt=""
                        >
                            <img className="user-img" src={posterUrl} alt="" />
                            <div className="infoWrapper">
                                <p>{title}</p>
                                <div className="titleBlock">
                                    <div className="title">{description}</div>
                                </div>
                            </div>
                        </a>
                        <div className="titleRight">{AddComponent}</div>
                    </div>
                ) : (
                    <div className="titleBlock">
                        <div className="title">
                            {title}
                            <span>{count}</span>
                        </div>

                        <div className="titleRight">{AddComponent}</div>
                    </div>
                )}
            </Header>
            <Content
                onMouseOver={handleMouseOver}
                onMouseLeave={() =>
                    setButtonCtrl({ ...buttonCtrl, show: false })
                }
            >
                <div className="slickWrapper">
                    <div
                        className={`slickBlock ${horizon && "horizon"}`}
                        ref={slider}
                        style={{
                            transform: `translateX(-${buttonCtrl.posX}px)`,
                        }}
                    >
                        {children}
                    </div>
                    <ArrowButton
                        type="left"
                        show={buttonCtrl.show && buttonCtrl.left}
                        onClick={() => handleClickButton("left")}
                    />
                    <ArrowButton
                        type="right"
                        show={buttonCtrl.show && buttonCtrl.right}
                        onClick={() => {
                            onClickfetch();
                            handleClickButton("right");
                        }}
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
    /* max-width: 1320px; */
    padding: 12px 0px 14px;
    overflow: hidden;
    text-overflow: ellipsis;

    .title-block {
        display: flex;
        justify-content: space-between;
    }

    .user-info {
        display: flex;
    }
    .titleBlock {
        flex: 1;
        display: flex;
        justify-content: space-between;
        span {
            display: inline-block;
            color: rgb(160, 160, 160);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 20px;
            margin: 12px 0px 12px 6px;
        }
    }
    .user-img {
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
        flex: 1;
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
        justify-content: space-between;
        color: #292a32;
        font-weight: 700;
        ${(props) =>
            props.size === "lg"
                ? css`
                      font-size: 22px;
                      letter-spacing: -0.4px;
                      line-height: 30px;
                  `
                : css`
                      font-size: 19px;
                      letter-spacing: -0.7px;
                      line-height: 28px;
                      margin: 8px 0;
                  `}
    }
    .titleRight {
        float: right;
    }
`;

const Content = styled.div`
    position: relative;
    .slickWrapper {
        overflow: scroll;
    }
    .slickBlock {
        width: 100%;
        padding: 0px;
        white-space: nowrap;
        margin-top: 0px;
        margin-bottom: 0px;
        margin: 0px -4px;
        transition: 500ms;
        &.horizon {
            list-style: none;
            padding: 0;
            margin: 0;
            width: auto;
            height: 228px;
            display: flex;
            flex-flow: column wrap;
            align-content: flex-start;
            margin-right: -5px;
            margin-left: 0px;
            margin-top: 4px;
            margin-bottom: 16px;
        }
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
    height: 50%;
    transition: all 300ms ease 0s;
    opacity: 0;
    align-items: flex-end;
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
    }
    @media only screen and (min-width: 760px) {
        opacity: 1 !important;
    }
`;
