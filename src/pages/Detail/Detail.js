import React from "react";
import {
    BoxForm,
    CardListSlick,
    CardCollection,
    ModalBookmark,
    Stars,
} from "../../components";
import styled from "styled-components";

const data = {
    title: "이웃사촌",
    category: "드라마",
    country: "한국",
    year: "2020",
    status: "wish",
    rate: 3.4,
    num: 88,
    imgUrl:
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
};

const Detail = () => {
    return (
        <Wrapper>
            <Section>
                <PosterContainer>
                    <BlurPosterBlock>
                        <BackgroundLeft />
                        <BlurPoster>
                            <GradientLeft />
                            <GradientRight />
                        </BlurPoster>
                        <BackgroundRight />
                        <BackgroundGradient />
                    </BlurPosterBlock>
                    <LankingInfoBlock>
                        <LinkingInfoImg>
                            <img
                                src="https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605860774/brjxqof6s9jx6tlerasw.jpg"
                                alt=""
                            />
                        </LinkingInfoImg>
                        <LinkingInfoList>
                            <li>
                                넷플릭스 TV 프로그램 순위 <em>2위</em>
                            </li>
                        </LinkingInfoList>
                    </LankingInfoBlock>
                </PosterContainer>
                <ContentContainer>
                    <ContentInfo>
                        <ContentInfoList>
                            <Title>{data.title}</Title>
                            <InfoDetail>
                                {`${data.year} ・ ${data.category} ・ ${data.country}`}
                            </InfoDetail>
                            <InfoRating>
                                평균 ★{data.rate} ({data.num})
                            </InfoRating>
                            <ModalBookmark data={data} />
                            <Stars />
                        </ContentInfoList>
                    </ContentInfo>
                </ContentContainer>
            </Section>
            <BoxForm>
                <CardListSlick data={[]} card={CardCollection} />
            </BoxForm>
        </Wrapper>
    );
};

export default Detail;

const Wrapper = styled.div``;

const Section = styled.div`
    background: #fff;
    @media only screen and (min-width: 719px) {
        border-bottom: 1px solid #e3e3e3;
    }
`;

const PosterContainer = styled.div`
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

const BlurPosterBlock = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    background: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const BlurPoster = styled.div`
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 110%;
    -webkit-filter: blur(15px);
    filter: blur(15px);
    background-image: url("https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1604542596/eataqg1dhtuczq95vgh4.jpg");
    background-size: cover;

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

const BackgroundLeft = styled.div`
    flex: 1;
    background: black;
`;

const BackgroundRight = styled.div`
    flex: 1;
    background: black;
`;

const BackgroundGradient = styled.div`
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
`;

const GradientLeft = styled.div`
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
`;
const GradientRight = styled.div`
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
`;

const LankingInfoBlock = styled.div`
    position: relative;
    margin: 0 auto;

    @media only screen and (min-width: 719px) {
        max-width: 640px;
        padding: 0 0 0 153px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 960px;
        padding: 0 0 0 166px;
    }
`;

const LinkingInfoImg = styled.div`
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
`;

const LinkingInfoList = styled.div`
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
`;

const ContentContainer = styled.div`
    text-align: center;
    padding: 14px 16px 22px;
    height: auto;
    overflow: hidden;
`;

const ContentInfo = styled.div`
    margin: 0 auto;

    @media only screen and (min-width: 719px) {
        max-width: 640px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 960px;
    }
`;

const ContentInfoList = styled.div`
    @media only screen and (min-width: 719px) {
        text-align: left;
        margin: 0 0 0 173px;
    }

    @media only screen and (min-width: 1023px) {
        margin: 0 0 0 191px;
    }
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.9px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media only screen and (min-width: 719px) {
        width: 520px;
    }
    @media only screen and (min-width: 1023px) {
        font-size: 33px;
        font-weight: 700;
        letter-spacing: -1.2px;
        line-height: 40px;
    }
`;

const InfoDetail = styled.div`
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    box-sizing: border-box;
    margin-top: 3px;

    @media only screen and (min-width: 1023px) {
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 22px;
        margin-top: 4px;
    }
`;

const InfoRating = styled.div`
    color: #282828;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    white-space: pre-wrap;
    box-sizing: border-box;
    padding: 7px 0;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    margin-top: 14px;

    @media only screen and (min-width: 1023px) {
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 22px;
        padding: 8px 0;
    }
`;
