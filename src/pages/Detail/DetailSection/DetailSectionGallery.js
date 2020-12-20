import React from "react";
import styled from "styled-components";

import { CardList, CardListSlick } from "../../../components";

const images = {
    watcha: {
        title: "왓챠",
        src:
            "https://d3sz5r0rl9fxuc.cloudfront.net/images/ex_watcha_logo_square.png",
    },
    netflix: {
        title: "넷플릭스",
        src:
            "https://d3sz5r0rl9fxuc.cloudfront.net/images/ex_netflix_logo_square.png",
    },
    tving: {
        title: "티빙",
        src:
            "https://d3sz5r0rl9fxuc.cloudfront.net/images/ex_tving_logo_square.png",
    },
    wave: {
        title: "웨이브",
        src:
            "https://d3sz5r0rl9fxuc.cloudfront.net/images/ex_wavve_logo_square.png",
    },
};
const imgDummy =
    "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_360,q_80,w_640/v1598255821/glrkwcqul3pjtp2gadlh.jpg";

const CardWatchPlace = ({ data }) => {
    return (
        <WrapperCard>
            <img src={data.src} alt="" />
            <span>{data.title}</span>
        </WrapperCard>
    );
};

const DetialSectionGallery = ({ data }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    // [ TODO ]
    // isNetflixContent / isWatchaContent
    return (
        <Wrapper>
            <CardList title="감상 가능한 곳" sizeHeader="sm">
                <CardWatchPlace data={images.watcha} />
                <CardWatchPlace data={images.netflix} />
                <CardWatchPlace data={images.tving} />
                <CardWatchPlace data={images.wave} />
            </CardList>
            <CardListSlick title="갤러리" sizeHeader="sm" sizeCard="sm">
                {[...new Array(10)].map((_, idx) => (
                    // {list.map((item, idx) => (
                    <CardGallery key={idx}>
                        <div className="img-block">
                            <img src={imgDummy} alt="" />
                        </div>
                    </CardGallery>
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default React.memo(DetialSectionGallery);

const WrapperCard = styled.div`
    display: flex;
    height: 76px;
    align-items: center;
    img {
        border: solid 1px rgba(0, 0, 0, 0.08);
        border-radius: 50%;
        width: 56px;
        height: 56px;
        margin: 0 12px 0 0;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08) inset;

        display: flex;
        align-items: center;
    }

    span {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        box-sizing: border-box;
        height: 100%;
        border-bottom: 1px solid #f0f0f0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Wrapper = styled.div`
    padding: 0 20px;
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;

    @media only screen and (min-width: 1023px) {
        border: 1px solid;
        border-radius: 6px;
    }
`;

const CardGallery = styled.div`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
    padding: 0 5px;
    width: 50%;

    .img-block {
        position: relative;
        overflow: hidden;
        background: #f8f8f8;
        box-sizing: border-box;
        border: solid 1px rgba(0, 0, 0, 0.08);
        border-radius: 3px;
        padding-bottom: 66.46153846153847%;

        img {
            display: inline-block;
            position: absolute;
            inset: 0px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            opacity: 1;
            transition: all 300ms ease 0s;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
    }
    @media only screen and (min-width: 719px) {
        width: 25%;
    }

    @media only screen and (min-width: 1023px) {
        width: 50%;
    }
`;
