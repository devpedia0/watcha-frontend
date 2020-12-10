import React from "react";
import styled from "styled-components";
import { CardList } from "../../../components";

const ShowMore = ({ src }) => {
    return (
        <a className="more" href={src}>
            더보기
        </a>
    );
};

const DetailSectionInfo = ({ data }) => {
    return (
        <Wrapper>
            <CardList
                title="기본정보"
                addComponent={<ShowMore src="http://www.naver.com" />}
            >
                <div className="summary">
                    이웃사촌
                    <br />
                    <span>2020 · 한국 · 드라마</span>
                    <br />
                    <span>2시간 10분</span>
                </div>
                <div className="description">
                    적인가, 이웃인가? 낮에는 친근한 이웃집 vs 밤에는 수상한
                    도청팀 백수가장 좌천위기 도청팀장 대권(정우)은 팀원들과 함께
                    해외에서 입국하자마자 자택 격리된 정치인 가족을 24시간
                    감시하라는 미션을 받는다. 이웃집으로 위장 이사온
                    도청팀원들은 라디오 사연 신청부터 한밤중에 나는 부스럭
                    소리까...
                </div>
            </CardList>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(DetailSectionInfo);

const Wrapper = styled.div`
    margin: 0 20px;
    overflow: hidden;

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

const Divider = styled.div`
    margin: 20px 0 0;
    border-bottom: 1px solid #f0f0f0;
`;
