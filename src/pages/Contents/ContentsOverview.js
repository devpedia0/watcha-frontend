import React, { useEffect } from "react";
import styled from "styled-components";
import { HeaderDetail } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { contentActions } from "../../redux/actions";
import { Loader } from "../../styles";
import { changeDataFormat } from "../../utils/helperFunc";

const ContentsOverview = () => {
    const dispatch = useDispatch();
    const {
        data: { contentInfo },
        isFetching,
    } = useSelector((state) => state.content);

    useEffect(() => {
        dispatch(contentActions.fetch());

        return () => dispatch(contentActions.initialize());
    }, [dispatch]);

    if (isFetching) return <Loader height="800px" />;

    const contentList = {
        originTitle: "원제",
        productionDate: "제작 연도",
        countryCode: "국가",
        category: "장르",
        runningTime: "상영시간",
        description: "내용",
    };
    return (
        <Wrapper>
            <HeaderDetail title="기본 정보" />
            <Content>
                {Object.keys(contentList).map(
                    (key) =>
                        contentInfo[key] && (
                            <div key={key} className="content-list">
                                <div className="content-title">
                                    {contentList[key]}
                                </div>
                                <div className="content-content">
                                    {changeDataFormat(key, contentInfo[key])}
                                </div>
                            </div>
                        )
                )}
            </Content>
        </Wrapper>
    );
};

export default ContentsOverview;

const Wrapper = styled.div``;

const Content = styled.div`
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 728px;
    margin: 12px auto 0;
    padding-top: 88px;

    .content-list {
        display: flex;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        padding: 14px 0;
        border-bottom: 1px solid #f0f0f0;
        margin: 0;
    }

    .content-title {
        font-weight: 400px;
        color: #787878;
        vertical-align: top;
        width: 120px;
        @media only screen and (min-width: 1023px) {
            width: 200px;
        }
    }

    .content-content {
        flex: 1;
        color: #000;
        vertical-align: top;
        margin: 0 0 0 12px;
    }

    .content-list:last-child {
        display: block;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        padding: 14px 0;
        border-bottom: 1px solid #f0f0f0;
        margin: 0;

        .content-title {
            color: #787878;
            vertical-align: top;
            width: 120px;
            font-weight: 400;
        }

        .content-content {
            display: block;
            white-space: pre-wrapper;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.2px;
            line-height: 24px;
            margin: 10px 0 0;
        }
    }
`;
