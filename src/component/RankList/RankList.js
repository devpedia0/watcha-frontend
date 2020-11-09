import React, { useState, useRef } from "react";
import styled from "styled-components";
import RankListCard from "./RankListCard";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";

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

const CardContainer = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    transition: 500ms;

    padding: 0px;
    white-space: nowrap;
    margin-top: 0px;
    margin-bottom: 0px;
    margin: 0px -4px;
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
    display: flex;
    position: absolute;
    top: 0px;
    z-index: 2;
    right: -9px;
    align-items: center;
    height: 100%;
    transition: all 300ms ease 0s;
    opacity: 0;
    align-items: flex-start;

    div {
        display: flex;
        justify-content: center;
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

    img {
        opacity: 0.4;
    }

    @media only screen and (min-width: 760px) {
        opacity: 1 !important;
    }
`;

const RankList = () => {
    const [posX, setPosX] = useState(0);
    const slider = useRef();

    const handleClickRight = () => {
        const dist = slider.current.offsetWidth;
        // slider.current.scrollLeft(`${dist * -1}px`);
        // slider.current.scrollTo({ x: `-90px`, y: "20px" });

        slider.current.scrollTo(posX + dist, 0);
        setPosX((state) => state + dist);
    };

    return (
        <Wrapper>
            <Title>
                <p>박스오피스</p>
            </Title>
            <Content>
                <CardContainer
                    ref={slider}
                    // style={{ transform: `translateX(${dist}px)` }}
                >
                    {[...new Array(30)].map((_, idx) => (
                        <RankListCard
                            key={idx}
                            idx={idx}
                            imgSrc={imgSrc[idx % 6]}
                        />
                    ))}
                </CardContainer>
                <ArrowButton onClick={handleClickRight}>
                    <div>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                            alt="forward"
                        ></img>
                    </div>
                </ArrowButton>
            </Content>
        </Wrapper>
    );
};

export default RankList;
