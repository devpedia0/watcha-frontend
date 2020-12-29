import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { CardList, BarChart } from "../../../../components";
import { Divider } from "../../../../styles";

const ContentsInfo = () => {
    const { data } = useSelector((state) => state.content);
    const { average, totalCount, distribution } = data.scores;
    return (
        <>
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
        </>
    );
};

export default ContentsInfo;

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
