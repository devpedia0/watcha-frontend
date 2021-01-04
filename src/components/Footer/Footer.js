import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { changeNumberFormat } from "../../utils/helperFunc";
import { Svg } from "..";

export default function Footer({ className }) {
    const [data, setData] = useState("");

    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await api.get("public/contents/scores/count");
                setData(res.data.totalCount);
            } catch (err) {
                console.error(err.response);
            }
        };
        getApiData();
    }, []);

    return (
        <Main className={className}>
            <Section1>
                <Span>
                    지금까지 <em>★ {changeNumberFormat(data)} 개의 평가가 </em>
                    쌓였어요.
                </Span>
            </Section1>
            <Section2>
                <List>
                    <Left>
                        <Ul>
                            <Li>서비스 이용약관</Li>
                            <Li>
                                <Link
                                    to="/myPage"
                                    style={{
                                        textDecoration: "none",
                                        color: "#a5a5a7",
                                    }}
                                >
                                    내 정보보기
                                </Link>
                            </Li>
                            <Li>
                                <Link
                                    to="/team"
                                    style={{
                                        textDecoration: "none",
                                        color: "#a5a5a7",
                                    }}
                                >
                                    팀원 소개
                                </Link>
                            </Li>
                        </Ul>
                        <Ul>
                            <Li>고객센터</Li>
                            <Li>cs@watchapedia.co.kr, 02-515-9985</Li>
                        </Ul>
                        <Ul>
                            <Li>제휴 및 대외 협력</Li>
                            <Li>contact@watcha.com, 070-7754-9696</Li>
                        </Ul>
                        <Ul>
                            <Li>주식회사 왓챠</Li>
                            <Li>대표 박태훈</Li>
                            <Li>서울특별시 서초구 강남대로 343 신덕빌딩 3층</Li>
                        </Ul>
                        <Ul>
                            <Li>사업자 등록 번호 211-88-66013</Li>
                        </Ul>
                        <Ul>
                            <Svg
                                type="logo"
                                w="83px"
                                h="20px"
                                color="#ff0558"
                            />
                            <Li style={{ paddingLeft: 7 }}>
                                © 2011 Watcha. Inc
                            </Li>
                        </Ul>
                    </Left>
                    <Right>
                        <Lang>
                            <Btn>한국어</Btn>
                        </Lang>
                        <Sns>
                            <Icon>
                                <A href="/">
                                    <Svg
                                        w="24px"
                                        h="24px"
                                        type="facebook"
                                        color="#848485"
                                    />
                                </A>
                            </Icon>
                            <Icon>
                                <A
                                    href="/"
                                    style={{
                                        border: "1px solid #848485",
                                        borderRadius: "50%",
                                        width: 26,
                                        height: 26,
                                        padding: 1,
                                    }}
                                >
                                    <Svg
                                        type="twitter"
                                        w="24px"
                                        h="18px"
                                        color="#848485"
                                    />
                                </A>
                            </Icon>
                            <Icon>
                                <A href="/">
                                    <Svg
                                        type="bb"
                                        w="24px"
                                        h="24px"
                                        color="#848485"
                                    />
                                </A>
                            </Icon>
                        </Sns>
                    </Right>
                </List>
            </Section2>
        </Main>
    );
}

const Main = styled.div`
    display: none;

    @media (min-width: 719px) {
        display: block;
        box-sizing: border-box;
        width: 100%;
    }
`;

const Section1 = styled.div`
    background-color: #101113;
    line-height: 62px;
    text-align: center;
    width: 100%;
    height: 62px;
`;

const Span = styled.span`
    color: #d1d1d2;
    font-size: 19px;
    font-weight: 500;
    -webkit-letter-spacing: -0.3px;
    -moz-letter-spacing: -0.3px;
    -ms-letter-spacing: -0.3px;
    letter-spacing: -0.3px;
    line-height: 22px;
    em {
        color: #ff0558;
        font-style: normal;
    }
`;

const Section2 = styled.div`
    display: block;
    background-color: #1c1d1f;
    padding: 20px 0 38px;
`;

const List = styled.div`
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    @media (min-width: 760px) {
        margin: 0 3.5%;
    }
    @media (min-width: 600px) {
        margin-right: 20px;
        margin-left: 20px;
    }
    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }
`;

const Left = styled.div`
    display: block;
    flex: 1;
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    color: #a5a5a7;
    font-size: 13px;
    font-weight: 400;
    -webkit-letter-spacing: -0.3px;
    -moz-letter-spacing: -0.3px;
    -ms-letter-spacing: -0.3px;
    letter-spacing: -0.3px;
    line-height: 22px;
    :nth-child(2) {
        margin-top: 12px;
    }
    :nth-child(4) {
        color: #848485;
        margin-top: 13px;
    }
    :nth-child(5) {
        color: #848485;
    }
    :nth-child(6) {
        color: #848485;
        margin-top: 2px;
    }
`;

const Li = styled.li`
    display: inline-block;
    font-size: 13px;
    vertical-align: top;
    cursor: pointer;
    :not(:last-child):after {
        width: 1px;
        background: #a5a5a7;
        height: 12px;
        margin: 5px 8px 0;
        content: "";
        display: inline-block;
        vertical-align: top;
    }
`;

const Right = styled.div`
    display: block;
    width: 117px;
`;

const Lang = styled.div`
    text-align: right;
`;

const Btn = styled.button`
    background: none;
    margin: 0;
    width: 117px;
    cursor: pointer;
    color: #a5a5a7;
    font-size: 15px;
    font-weight: 500;
    box-sizing: border-box;
    line-height: 23px;
    border: 1px solid #848485;
    height: 30px;
    text-align: left;
    border-radius: 2px;
    position: relative;
    padding: 2.5px 10px 4.5px;
    :after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 7px;
        right: 5px;
        width: 16px;
        height: 16px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI2E1YTVhNyIgZmlsbC1vcGFjaXR5PSIuODgiIGQ9Ik0xLjY2IDMuNjY3TDEwLjM0IDMuNjY3IDYgOC4wMDR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=)
            center no-repeat;
    }
`;

const Sns = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 99px 0 -4px;
`;

const Icon = styled.li`
    display: inline-block;
    padding-left: 14px;
`;

const A = styled.a`
    display: inline-flex;
    align-items: center;
    vertical-align: top;
    box-sizing: border-box;
    width: 26px;
    height: 24px;
`;
