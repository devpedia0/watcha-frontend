import React from "react";
import styled from "styled-components";
import BoxImg from "../Box/BoxImg";

const Wrapper = styled.div`
    height: 76px;
    display: flex;
    align-items: center;

    .content {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
    }
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            color: #1e1e1e;
            font-size: 17px;
            font-weight: 400;
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

const Card = ({
    radius,
    item,
    onClickSelect,
    onClickDelete,
    selected,
    disabled,
}) => {
    const { name, description, profileImagePath } = item;
    return (
        <Wrapper>
            <BoxImg
                width="56px"
                height="56px"
                radius={radius}
                src={profileImagePath}
            />
            <div className="content">
                <div className="text">
                    <div className="title">{name}</div>
                    <div className="subTitle">{description}</div>
                </div>
                <div className="text">
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