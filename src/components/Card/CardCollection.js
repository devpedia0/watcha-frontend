import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.li`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 33.333333333333336%;
    height: auto;
    padding: 0 4px;
    margin-bottom: 0px;

    ${(props) =>
        props.size === "medium"
            ? css`
                  @media only screen and (min-width: 600px) {
                      width: "25%";
                  }

                  @media only screen and (min-width: 760px) {
                      width: 20%;
                      padding: 0 5px;
                  }
                  @media only screen and (min-width: 1100px) {
                      width: 16.6667%;
                      padding: 0 8px;
                  }
              `
            : css`
                  @media only screen and (min-width: 600px) {
                      width: "33.3333%";
                  }
                  @media only screen and (min-width: 760px) {
                      width: 25%;
                      padding-right: 6px;
                      padding-left: 6px;
                  }
                  @media only screen and (min-width: 1100px) {
                      width: 20%;
                      padding-right: 8px;
                      padding-left: 8px;
                  }
              `}
`;
const WrapperBox = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 145.37037037037038%;
    overflow: hidden;
    border: 1px solid #eae9e8;
    border-radius: 5px;
    background: #cccdcf;
    transition: 300ms;
`;

const ImageContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 2px;
`;

const Image = styled.div`
    width: 50%;
    padding: 2px;
    border: 2px solid #cccdcf;
    background: ${(props) =>
        props.src
            ? `url(${props.src}) center center / cover no-repeat`
            : "#e4e6e7"};
`;
const ContentInfo = styled.div`
    text-align: left;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
    cursor: pointer;

    .contentTitle {
        color: #292a32;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 22px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
    }

    .yearAndNation {
        color: #292a32;
        padding-bottom: 1px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 21px;
    }

    .contentRating {
        margin-top: 2px;
        color: #555765;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 14px;
        height: 15px;
    }

    .ContentBoxOfficeStats {
        color: #74747b;
        white-space: normal;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 18px;
        margin-top: 5px;
    }
`;
const item222 = {
    title: "박스오피스",
    description: "홍길동님의 컬렉션",
    poster: process.env.PUBLIC_URL + "/images/1.jpg",
    items: [
        { rank: 1, imgSrc: process.env.PUBLIC_URL + "/images/1.jpg" },
        { rank: 2, imgSrc: process.env.PUBLIC_URL + "/images/2.jpg" },
        { rank: 3, imgSrc: process.env.PUBLIC_URL + "/images/3.jpg" },
        { rank: 4, imgSrc: process.env.PUBLIC_URL + "/images/4.jpg" },
        { rank: 5, imgSrc: process.env.PUBLIC_URL + "/images/5.jpg" },
        { rank: 6, imgSrc: process.env.PUBLIC_URL + "/images/6.jpg" },
    ],
};

const CardCollection = ({ item, size = "" }) => {
    return (
        <Wrapper size={size}>
            <WrapperBox>
                <ImageContainer>
                    <Image src={item222.items[0].imgSrc} />
                    <Image src={item222.items[1].imgSrc} />
                    <Image src={item222.items[2].imgSrc} />
                    <Image src={item222.items[3].imgSrc} />
                </ImageContainer>
            </WrapperBox>
            <ContentInfo>
                <div className="contentTitle">{item222.title}</div>
            </ContentInfo>
        </Wrapper>
    );
};

export default CardCollection;
