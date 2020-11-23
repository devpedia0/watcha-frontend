import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import PosterCard from "../PosterCard";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";

const imgSrc = [img1, img2, img3, img4, img5, img6];

const Wrapper = styled.div`
    margin-bottom: 20px;

    @media only screen and (min-width: 719px) {
        margin-bottom: 30px;
    }

    @media only screen and (min-width: 1100px) {
        margin-bottom: 42px;
    }
`;

const Title = styled.div`
    white-space: nowrap;
    max-width: 1320px;
    margin-right: 15px;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 29px;
    max-height: 58px;
    padding: 4px 20px 9px 0;

    p {
        color: #292a32;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.4px;
        line-height: 30px;
    }

    @media only screen and (min-width: 719px) {
        margin-right: 20px;
        margin-left: 20px;
        max-height: 60px;
        line-height: 30px;
        padding: 12px 0 14px;
    }
    @media only screen and (min-width: 760px) {
        margin: 0 3.5%;
    }
    @media only screen and (min-width: 1100px) {
        margin: 0 60px;
    }
    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }
`;

const Content = styled.div`
    position: relative;
    max-width: 1320px;
    margin-right: 20px;
    margin-left: 15px;

    @media only screen and (min-width: 719px) {
        margin-right: 20px;
        margin-left: 20px;
    }
    @media only screen and (min-width: 760px) {
        margin: 0 3.5%;
    }
    @media only screen and (min-width: 1100px) {
        margin: 0 60px;
    }
    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }
`;

const CardContainerNonVisible = styled.div`
    overflow: hidden;
`;

const CardContainer = styled.div`
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
`;

const ArrowButton = styled.div`
    right: ${(props) => (props.right ? "-5px" : null)};
    left: ${(props) => (props.left ? "-19px" : null)};
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
            const url = props.right
                ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=";
            return css`
                background: url(${url}) 12px center / 12px no-repeat
                    rgb(255, 255, 255);
            `;
        }}

        @media only screen and (min-width: 760px) {
            margin-top: calc((100vw - 60px) * 108 / 157 / 4 - 17px);
        }
        @media only screen and (min-width: 1100px) {
            margin-top: calc((100vw - 120px) * 108 / 157 / 5 - 17px);
        }
        @media only screen and (min-width: 1440px) {
            margin-top: calc(1320px * 108 / 157 / 5 - 17px);
        }
    }

    @media only screen and (min-width: 760px) {
        opacity: 1 !important;
    }
`;

const PostersRank = ({ size }) => {
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
            <Title>
                <p>박스오피스</p>
            </Title>
            <Content>
                <CardContainerNonVisible>
                    <CardContainer
                        ref={slider}
                        style={{
                            transform: `translateX(-${buttonCtrl.posX}px)`,
                        }}
                    >
                        {[...new Array(28)].map((_, idx) => (
                            <PosterCard
                                size={size}
                                key={idx}
                                idx={idx}
                                imgSrc={imgSrc[idx % 6]}
                            />
                        ))}
                    </CardContainer>
                </CardContainerNonVisible>
                <ArrowButton
                    left
                    show={buttonCtrl.left}
                    onClick={() => handleClickButton("left")}
                />
                <ArrowButton
                    right
                    show={buttonCtrl.right}
                    onClick={() => handleClickButton("right")}
                />
            </Content>
        </Wrapper>
    );
};

export default PostersRank;
