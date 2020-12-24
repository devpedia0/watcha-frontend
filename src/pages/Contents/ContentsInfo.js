import React from "react";
import styled from "styled-components";
import { HeaderDetail } from "../../components";

const dataDummy = [
    {
        title: "원제",
        content: "Harry Potter and the Chamber of Secrets",
    },
    {
        title: "제작 연도",
        content: "2002",
    },
    {
        title: "국가",
        content: "영국,미국,독일",
    },
    {
        title: "장르",
        content: "모험/가족/판타지/미스터리",
    },
    {
        title: "상영시간",
        content: "2시간 42분",
    },
    {
        title: "내용",
        content:
            "해리 포터에겐 이번 여름방학이 별로 즐겁질 못했다. 마법이라면 질색을 하는 페투니아 이모와 버논 이모부의 구박도 그렇지만, 무엇보다 속상한 건 단짝이었던 론 위즐리와 헤르미온느 그레인저가 그 사이 자신을 까맣게 잊었는지 자신의 편지에 답장 한 통 없다는 것. 그러던 어느날 꼬마 집요정 도비가 해리의 침실에 나타나 뜻밖의 얘기를 한다. 호그와트 마법학교로 돌아가면 무서운 일을 당할 거라는 것. 도비는 해리를 학교에 못 가게 하려고 자신이 여태까지 론과 헤르미온느의 답장을 가로채 왔음을 고백한다. 그러나 도비와 더즐리 가족의 방해에도 불구, 해리는 론과 그의 형제들이 타고 온 하늘을 나는 자동차를 타고 이모집을 탈출, 따뜻한 가족애가 넘치는 론 위즐리의 집으로 간다.",
    },
];

const ContentsInfo = () => {
    return (
        <Wrapper>
            <HeaderDetail title="기본 정보" />
            <Content>
                <ul>
                    {dataDummy.map((item) => (
                        <div className="content-list">
                            <div className="content-title">{item.title}</div>
                            <div className="content-content">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </ul>
            </Content>
        </Wrapper>
    );
};

export default ContentsInfo;

const Wrapper = styled.div``;

const Content = styled.div`
    padding-top: 88px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 728px;
        margin: 12px auto 0;
    }

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
