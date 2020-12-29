import React from "react";
import styled from "styled-components";

const ContentsHeader = ({ data }) => {
    const {
        contentInfo: { posterImagePath, rank },
        galleries,
    } = data;

    return (
        <Wrapper>
            <PosterBlock>
                <div className="bg-left" />
                <Poster
                    src={
                        galleries.length !== 0
                            ? galleries[0] + "?h=720&w=1280"
                            : ""
                    }
                >
                    <div className="gradient-left" />
                    <div className="gradient-right" />
                </Poster>
                <div className="bg-right" />
                <div className="bg-gradient" />
            </PosterBlock>
            <LankingBlock>
                <div className="img-wrapper">
                    <img src={posterImagePath + "?w=280&h=400"} alt="" />
                </div>
                {rank && (
                    <ul>
                        <li>
                            넷플릭스 TV 프로그램 순위 <em>{rank}위</em>
                        </li>
                    </ul>
                )}
            </LankingBlock>
            )
        </Wrapper>
    );
};

export default ContentsHeader;

const Wrapper = styled.div`
    position: relative;
    padding: 44px 0 0;
    @media only screen and (min-width: 719px) {
        padding: 300px 0 0;
    }

    @media only screen and (min-width: 1023px) {
        padding: 270px 0 0;
    }

    @media only screen and (min-width: 1300px) {
        padding: 320px 0 0;
    }

    @media only screen and (min-width: 1400px) {
        padding: 360px 0 0;
    }
`;

const PosterBlock = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    background: black;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .bg-left,
    .bg-right {
        flex: 1;
        background: black;
    }

    .bg-gradient {
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(
            -180deg,
            rgba(20, 20, 20, 0.3) 1%,
            rgba(20, 20, 20, 0.5) 67%,
            #141414 98%
        );
        width: 100%;
        height: 100%;
        overflow: hidden;

        @media only screen and (min-width: 719px) {
            background-image: linear-gradient(
                -180deg,
                rgba(0, 0, 0, 0.35) 2%,
                rgba(0, 0, 0, 0.2) 70%,
                rgba(0, 0, 0, 0.5) 100%
            );
        }
    }
`;

const Poster = styled.div`
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 110%;
    -webkit-filter: blur(15px);
    filter: blur(15px);
    background-size: cover;
    background: ${(props) =>
        props.src
            ? `url(${props.src}) center center / cover no-repeat`
            : `url("https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1604542596/eataqg1dhtuczq95vgh4.jpg") center center / cover no-repeat`};

    .gradient-left {
        display: none;

        @media only screen and (min-width: 719px) {
            display: block;
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            width: 100px;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0) 100%
            );
        }
    }

    .gradient-right {
        display: none;

        @media only screen and (min-width: 719px) {
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 100px;
            background-image: linear-gradient(
                -90deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0) 100%
            );
        }
    }
    @media only screen and (min-width: 719px) {
        position: relative;
        top: auto;
        left: auto;
        width: 825px;
        height: 100%;
        -webkit-filter: none;
        filter: none;
    }

    @media only screen and (min-width: 1023px) {
        width: 768px;
    }

    @media only screen and (min-width: 1300px) {
        width: 910px;
    }

    @media only screen and (min-width: 1400px) {
        width: 1024px;
    }
`;

const LankingBlock = styled.div`
    position: relative;
    margin: 0 auto;

    .img-wrapper {
        position: relative;
        overflow: hidden;
        display: block;
        position: relative;
        box-sizing: border-box;
        width: 114px;
        height: 164px;
        border: solid 1px #fff;
        border-radius: 3px;
        margin: 0 auto;
        background: #f8f8f8;
        transition: 300ms;

        img {
            vertical-align: top;
            width: 100%;
            height: 100%;
            opacity: 1;
            object-fit: cover;
            transition: opacity 420ms ease 0s;
        }

        @media only screen and (min-width: 719px) {
            position: absolute;
            top: 2px;
            left: 0;
            width: 153px;
            height: 221px;
            border-width: 2px;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }

        @media only screen and (min-width: 1023px) {
            width: 166px;
            height: 238px;
        }
    }

    ul {
        text-align: center;
        padding: 0 0 10px;
        margin: 15px 0 0;

        li {
            display: inline-block;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            font-size: 13px;
            font-weight: 400;
            -webkit-letter-spacing: -0.2px;
            -moz-letter-spacing: -0.2px;
            -ms-letter-spacing: -0.2px;
            letter-spacing: -0.2px;
            line-height: 18px;
            margin: 0 4px;
        }

        em {
            color: rgba(255, 255, 255, 0.8);
            font-style: normal;
        }

        @media only screen and (min-width: 719px) {
            text-align: left;
            padding: 0 0 10px 18px;
            margin: 0 -4px;
        }

        @media only screen and (min-width: 1023px) {
            padding: 0 0 10px 25px;
            margin: 0 -4px;
        }
    }

    @media only screen and (min-width: 719px) {
        max-width: 640px;
        padding: 0 0 0 153px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 960px;
        padding: 0 0 0 166px;
    }
`;
