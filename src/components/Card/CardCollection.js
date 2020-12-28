import React from "react";
import styled from "styled-components";

const CardCollection = ({ className, item, onClick }) => {
    return (
        <Wrapper className={className} onClick={onClick}>
            <WrapperBox>
                <ImageContainer>
                    <Image src={item.images[0] + "?w=280&h=400"} />
                    <Image src={item.images[1] + "?w=280&h=400"} />
                    <Image src={item.images[2] + "?w=280&h=400"} />
                    <Image src={item.images[3] + "?w=280&h=400"} />
                </ImageContainer>
            </WrapperBox>
            <ContentInfo>
                <div className="contentTitle">{item.title}</div>
            </ContentInfo>
        </Wrapper>
    );
};

export default React.memo(CardCollection);

const Wrapper = styled.li`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 0 4px;
    margin-bottom: 0px;
`;
const WrapperBox = styled.div`
    cursor: pointer;
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
    margin: 5px 5px 0 5px;
    cursor: pointer;

    .contentTitle {
        color: #292a32;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 22px;

        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
        white-space: pre-wrap;
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
