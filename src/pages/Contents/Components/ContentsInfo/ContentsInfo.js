import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CardList } from "../../../../components";
import { useSelector } from "react-redux";
import { Divider } from "../../../../styles";
import {
    changeCountryFormat,
    changeDataFormat,
} from "../../../../utils/helperFunc";

const ContentsInfo = () => {
    const pageId = useParams().pageId;
    const {
        data: {
            contentInfo: {
                mainTitle,
                subtitle,
                productionDate,
                category,
                countryCode,
                runningTime,
                description,
                page,
                type,
                contents,
                authorDescription,
                authorId,
                elaboration,
            },
        },
    } = useSelector((state) => state.content);

    const textInfo = () => {
        let result = "";
        let country = changeCountryFormat(countryCode);
        result += productionDate ? productionDate.split("-")[0] : "";
        result += category ? " ・ " + category : "";
        result += country ? " ・ " + country : "";
        result += page ? " ・ " + page + "p" : "";
        return result;
    };

    return (
        <Wrapper>
            <CardList
                title="기본정보"
                addComponent={
                    <Link href={`/contents/${pageId}/overview`}>더보기</Link>
                }
            >
                <CardInfo>
                    <div className="summary">
                        {type === "B" ? subtitle : mainTitle}
                        <p>{textInfo()}</p>
                        <p>
                            {runningTime
                                ? changeDataFormat("runningTime", runningTime)
                                : ""}
                        </p>
                    </div>
                    <div className="description">{description}</div>
                </CardInfo>
            </CardList>
            <Divider />
            {contents && (
                <a href={`/contents/${pageId}/book/contents`}>
                    <div className="book-contents">목차</div>
                </a>
            )}
            {authorDescription && (
                <>
                    <CardList
                        title="저자소개"
                        addComponent={
                            <Link href={`/detail/people/${authorId}`}>
                                더보기
                            </Link>
                        }
                    >
                        <CardInfo>
                            <div className="description">
                                {authorDescription}
                            </div>
                        </CardInfo>
                    </CardList>
                    <Divider />
                </>
            )}
            {elaboration && (
                <>
                    <CardList
                        title="출판사 제공 책소개"
                        addComponent={
                            <Link href={`/contents/${pageId}/book/elaboration`}>
                                더보기
                            </Link>
                        }
                    >
                        <CardInfo>
                            <div className="description">{elaboration}</div>
                        </CardInfo>
                    </CardList>
                    <Divider />
                </>
            )}
        </Wrapper>
    );
};

export default ContentsInfo;

const Wrapper = styled.div`
    .book-contents {
        height: 48px;
        white-space: nowrap;
        color: #000;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: -0.7px;
        line-height: 48px;
        border-bottom: 1px solid ${(props) => props.theme.line};
    }
`;

const CardInfo = styled.div`
    .summary {
        color: #4a4a4a;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;

        p {
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
        cursor: pointer;
    }
`;

const Link = styled.a`
    float: right;
    margin: 12px 0;
    font-weight: 500;
    color: #ff2f6e;
    cursor: pointer;
    &:hover {
        color: #ff2f6e;
    }
`;
