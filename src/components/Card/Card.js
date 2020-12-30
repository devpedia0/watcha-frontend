import React from "react";
import styled from "styled-components";
import BoxImg from "../Box/BoxImg";

const Card = ({
    radius,
    item,
    onClickSelect,
    onClickDelete,
    selected,
    disabled,
    score,
    count,
    productionDate,
    countryCode,
    width,
    analysis,
    searches,
    author,
    onClick,
}) => {
    const { name, role, characterName, profileImagePath } = item;

    return (
        <Wrapper width={width} onClick={onClick}>
            <BoxImg
                width="50px"
                height="50px"
                radius={radius}
                src={profileImagePath ? profileImagePath + "?w=100&h=100" : ""}
            />
            <div className="content">
                <div className="text">
                    <div className="title">{name}</div>
                    <div className="subTitle">
                        {role}
                        {characterName && " | " + characterName}
                    </div>
                </div>
                <div className="text">
                    {analysis && (
                        <span className="scoreCount">
                            {score}점 • {count}편
                        </span>
                    )}
                    {searches && (
                        <span className="scoreCount">
                            {productionDate} • {countryCode || author}
                        </span>
                    )}
                    {onClickDelete && (
                        <button
                            type="button"
                            className="btn"
                            onClick={() => onClickDelete(item.id)}
                        >
                            삭제
                        </button>
                    )}
                    {onClickSelect && (
                        <button
                            type="button"
                            className={`btn ${selected && "btn-success"}`}
                            onClick={() => onClickSelect(item)}
                            disabled={disabled}
                        >
                            {disabled ? "추가완료" : "선택"}
                        </button>
                    )}
                </div>
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
        .scoreCount {
            color: #787878;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.3px;
            line-height: 19px;
        }
    }
`;
