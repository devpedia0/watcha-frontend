import React from "react";
import styled from "styled-components";
import history from "../../../history";

import {
    CardList,
    CardListSlick,
    Card,
    CardComment,
    BarChart,
} from "../../../components";
import { Divider } from "../../../styles";

const ContentSectionLeft = ({ data, pageId }) => {
    const {
        contentInfo: {
            mainTitle,
            productionDate,
            category,
            countryCode,
            runningTime,
            description,
        },
        scores: { average, totalCount, distribution },
        participants,
        comments,
    } = data;

    return (
        <Wrapper>
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
            <CardListSlick title="출연/제작" horizon>
                {participants.map((item, idx) => (
                    <Card key={idx} item={item} width="49%" radius="20%" />
                ))}
            </CardListSlick>
            <Divider />
            <CardList
                title="별점 그래프"
                addComponent={
                    <WrapperScore>
                        평균 ★{average.toFixed(1)}
                        <br />
                        <span>({totalCount}명)</span>
                    </WrapperScore>
                }
            >
                <BarChart data={distribution} />
            </CardList>
            <Divider />
            <CardListSlick
                title="코멘트"
                count={comments.count}
                addComponent={<Link href="/contents/comment">더보기</Link>}
            >
                {comments.list.map((item, idx) => (
                    <StyledCard
                        key={idx}
                        item={item}
                        onClick={() =>
                            history.push(
                                `/contents/${pageId}/comments/${item.userId}`
                            )
                        }
                    />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default ContentSectionLeft;

const Wrapper = styled.div`
    margin: 12px 0 0;
    padding: 0 20px;
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;

    @media only screen and (min-width: 719px) {
        float: left;
        width: 100%;
        margin: 0;
    }

    @media only screen and (min-width: 1023px) {
        float: left;
        width: 640px;
        border-right: 1px solid;
        border-left: 1px solid;
        border-top: 1px solid;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
`;
const Link = styled.a`
    float: right;
    margin: 12px 0;

    color: #ff2f6e;
`;

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

const WrapperScore = styled.div`
    color: #282828;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    text-align: right;
    margin: 10px 0 0;
    span {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 19px;
        color: #787878;
    }
`;

const StyledCard = styled(CardComment)`
    width: 95%;

    @media only screen and (min-width: 719px) {
        width: 47.5% !important;
    }
`;
