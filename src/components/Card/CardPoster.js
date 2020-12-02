import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.li`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 33.333333333333336%;
    padding: 0 4px;
    margin-bottom: 0px;

    @media only screen and (min-width: 600px) {
        width: ${(props) => (props.size === "medium" ? "25%" : "33.3333%")};
    }
    @media only screen and (min-width: 760px) {
        ${(props) =>
            props.size === "medium"
                ? css`
                      width: 20%;
                      padding: 0 5px;
                  `
                : css`
                      width: 25%;
                      padding-right: 6px;
                      padding-left: 6px;
                  `}
    }
    @media only screen and (min-width: 1100px) {
        ${(props) =>
            props.size === "medium"
                ? css`
                      width: 16.6667%;
                      padding: 0 8px;
                  `
                : css`
                      width: 20%;
                      padding-right: 8px;
                      padding-left: 8px;
                  `}
    }
`;

const ContentImg = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 145.37037037037038%;
    overflow: hidden;
    border: 1px solid #eae9e8;
    border-radius: 5px;
    background: #f8f8f8;
    transition: 300ms;

    img {
        position: absolute;
        top: 0;
        left: 0;
        vertical-align: top;
        width: 100%;
        height: 100%;
        opacity: 1;
        object-fit: cover;
        background: rgb(248, 248, 248);
        transition: all 300ms ease 0s;
    }
`;

const RankBlock = styled.div`
    position: absolute;
    bottom: 3px;
    left: 3px;
    background-color: rgba(0, 0, 0, 0.77);
    color: rgb(255, 255, 255);
    font-weight: 700;
    letter-spacing: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    opacity: 1;
    transition: opacity 300ms ease 0s;

    @media only screen and (min-width: 460px) {
        bottom: 6px;
        left: 6px;
        font-size: 16px;
    }

    @media only screen and (min-width: 719px) {
        top: 6px;
        left: 6px;
        width: 28px;
        height: 28px;
        line-height: 27px;
    }
`;

const WatchaBlock = styled.div`
    position: relative;
    float: right;
    background: url("https://images.watcha.net/updatable_images/2570/original/f72039e19e3d483c3c6d8178c526a1c979537975.png")
        center center / 17px no-repeat rgb(255, 255, 255);
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    padding: 4px 3px 3px 4px;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 50%;
    opacity: 1;
    transition: opacity 300ms ease 0s;

    @media only screen and (min-width: 719px) {
        background-size: 20px;
        width: 30px;
        height: 30px;
        padding: 4px;
        margin: 6px 6px 0px 0px;
    }
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
const CardPoster = ({ size, item }) => {
    return (
        <Wrapper size={size}>
            <ContentImg>
                <img src={item.imgSrc} alt="" />
                {item.rank && <RankBlock>{item.rank}</RankBlock>}
                <WatchaBlock />
            </ContentImg>
            <ContentInfo>
                <div className="contentTitle">도굴</div>
                <div className="yearAndNation">1996 ・ 미국</div>
                <div className="contentRating">
                    <span>평균</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 12 12"
                        fill="#555765"
                        className="css-a4gmui-IcRatingStarSvg erjycaa0"
                    >
                        <path
                            className="fillTarget"
                            fill="#6A6B76"
                            fillRule="evenodd"
                            d="M5.637 8.02L2.779 9.911c-.138.092-.324.054-.415-.084-.048-.073-.063-.162-.04-.246l.916-3.302L.56 4.145c-.13-.103-.152-.292-.048-.421.054-.068.134-.11.221-.113l3.424-.15 1.2-3.21c.058-.155.23-.233.386-.175.081.03.146.094.176.175l1.2 3.21 3.424.15c.165.007.294.147.286.313-.003.086-.045.167-.112.221L8.034 6.28l.915 3.302c.045.16-.049.325-.209.37-.083.022-.173.008-.245-.04L5.637 8.02z"
                        ></path>
                    </svg>
                    <span>3.7</span>
                </div>
                <div className="ContentBoxOfficeStats">
                    예매율 5.5% ・ 누적 관객 1만명
                </div>
            </ContentInfo>
        </Wrapper>
    );
};

export default CardPoster;
