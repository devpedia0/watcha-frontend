import React from "react";
import styled from "styled-components";
import BoxImg from "../../styles/BoxImg";

const Card = ({
    className,
    radius,
    width,
    imageUrl,
    title,
    subTitle,
    AddComponent,
    onClick,
}) => {
    return (
        <Wrapper className={className} width={width} onClick={onClick}>
            <BoxImg
                width="50px"
                height="50px"
                radius={radius}
                src={imageUrl ? imageUrl + "?w=100&h=100" : ""}
            />
            <div className="content">
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="subTitle">{subTitle}</div>
                </div>
                <div className="text">{AddComponent}</div>
            </div>
        </Wrapper>
    );
};

export default React.memo(Card);

const Wrapper = styled.div`
    height: 76px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    width: ${(props) => (props.width ? props.width : "100%")};
    cursor: pointer;
    .content {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        margin-left: 8px;
        border-bottom: ${(props) =>
            props.analysis
                ? "none"
                : "1px solid #f0f0f0"}; //선호배우 3번째마다 라인없게끔!
    }
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            color: #1e1e1e;
            font-size: 17px;
            font-weight: 500;
            letter-spacing: -0.7px;
            line-height: 22px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 2px;
        }
        .subTitle {
            color: rgb(140, 140, 140);
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.3px;
            line-height: 19px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 2px;
        }
    }
`;
