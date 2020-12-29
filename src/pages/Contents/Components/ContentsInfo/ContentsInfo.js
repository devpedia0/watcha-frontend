import React from "react";
import styled from "styled-components";
import { CardList } from "../../../../components";
import { useSelector } from "react-redux";
import { Divider } from "../../../../styles";

const ContentsInfo = () => {
    const {
        data: {
            contentInfo: {
                mainTitle,
                productionDate,
                category,
                countryCode,
                runningTime,
                description,
            },
        },
    } = useSelector((state) => state.content);
    return (
        <>
            <CardList
                title="기본정보"
                addComponent={<Link href="/contents/overview">더보기</Link>}
            >
                <CardInfo>
                    <div className="summary">
                        {mainTitle}
                        <br />
                        <span>{`${
                            productionDate ? productionDate.split("-")[0] : ""
                        } ・ ${category} ・ ${countryCode}`}</span>
                        <br />
                        <span>
                            {runningTime
                                ? `${parseInt(runningTime / 60)}시간 ${
                                      runningTime % 60
                                  }분`
                                : ""}
                        </span>
                    </div>
                    <div className="description">{description}</div>
                </CardInfo>
            </CardList>
            <Divider />
        </>
    );
};

export default ContentsInfo;

const CardInfo = styled.div`
    .summary {
        color: #4a4a4a;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        margin: 8px 0;

        span {
            display: inline-block;
            vertical-align: top;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .description {
        word-break: break-all;
        max-height: 72px;
        margin: 0;
        overflow: hidden;
        white-space: pre-wrap;
        color: #4a4a4a;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.2px;
        line-height: 24px;
    }
`;

const Link = styled.a`
    float: right;
    margin: 12px 0;

    color: #ff2f6e;
`;
