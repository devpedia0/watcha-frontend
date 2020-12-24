import React from "react";
import styled from "styled-components";

const CardPoster = ({ size, item, rank, className, onClick }) => {
    return (
        <Wrapper className={className} size={size} onClick={onClick}>
            <ContentImg>
                <img src={item.posterImagePath + "?w=280&h=400"} alt="" />
                {rank && <RankBlock>{rank}</RankBlock>}
                <WatchaBlock show={item.isWatchaContent} />
                <NetflixBlock show={item.isNetflixContent} />
            </ContentImg>
            <ContentInfo>
                <div className="title">{item.mainTitle}</div>
                {item.year && <div className="year-nation">1996 ・ 미국</div>}
                {item.score && (
                    <div className="rating">평균★{item.score.toFixed(1)}</div>
                )}
                {item.rate && (
                    <div className="box-office">
                        예매율 {item.rate}% ・ 누적 관객 1만명
                    </div>
                )}
            </ContentInfo>
        </Wrapper>
    );
};

export default React.memo(CardPoster);

const Wrapper = styled.li`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
    padding: 0 4px;
    margin-bottom: 0px;
    cursor: pointer;
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
    display: ${(props) => (props.show ? "block" : "none")};
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
const NetflixBlock = styled.div`
    display: ${(props) => (props.show ? "block" : "none")};
    position: relative;
    float: right;
    background: url("https://an2-img.amz.wtchn.net/image/v1/updatable_images/2571/original/42e70f1bc34d7af54478a311983ecf6d3601eefa.png")
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

    .title {
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

    .year-nation {
        color: #292a32;
        padding-bottom: 1px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 21px;
    }

    .rating {
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

    .box-office {
        color: #74747b;
        white-space: normal;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 18px;
        margin-top: 5px;
    }
`;
