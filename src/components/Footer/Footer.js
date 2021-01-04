import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { changeNumberFormat } from "../../utils/helperFunc";

export default function Footer({ className }) {
    const [data, setData] = useState("");

    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await api.get("public/contents/scores/count");
                setData(res.data.totalCount);
            } catch (e) {
                console.log(e);
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
                            <svg fill="#848485" width="83px" height="20px">
                                <g>
                                    <g fill="#ff0558">
                                        <path d="M19.507 4.346l-2.26 13.64 3.585-.37.214-2.455 1.851-.156.234 2.358 3.196-.331-1.949-12.686h-4.871zm1.773 8.301l.468-5.222h.428l.488 5.125-1.384.097zM41.508 8.769L40.709 8.808 40.709 4.346 38.468 4.346 38.468 15.746 40.709 15.512 40.709 10.932 41.508 10.893 41.508 15.434 43.534 15.219 43.534 4.346 41.508 4.346zM14.167 0L13.251 13.173 13.037 13.193 11.108 4.346 8.048 4.346 6.626 13.622 6.314 13.622 4.93 4.346.039 4.346 2.982 19.487 8.477 18.903 9.568 10.348 9.88 10.348 11.342 18.61 15.843 18.143 18.844 0zM25.645 7.561L27.516 7.503 27.516 16.915 30.264 16.623 30.264 7.444 31.823 7.386 31.823 4.346 25.645 4.346zM35.506 14.401l-.76.058V6.606l.76-.02V8.73l2.28-.078V6.548c0-1.403-.936-2.378-2.67-2.378-1.832 0-2.904.975-2.904 2.475v7.503c0 1.559.877 2.3 2.865 2.085 1.793-.195 2.728-1.208 2.728-2.69v-2.435l-2.319.136v3.157h.02zM72.629 15.59L74.967 15.336 74.967 4.346 72.629 4.346zM69.355 4.346h-3.878V16.35l3.547-.37c2.163-.234 2.786-1.404 2.786-2.982V7.347c0-1.754-.487-3.001-2.455-3.001zm-.176 9.412l-.974.078V6.548l.994-.02v7.23h-.02zM79.566 14.85l2.046-.215L80.19 4.326h-3.313L75.63 15.258l2.24-.233.176-2.144 1.325-.117.195 2.085zm-1.383-3.762l.33-4.112h.254l.41 4.054-.994.058zM44.84 4.346l-.76 10.835 1.949-.195.058-2.202.702-.059.117 2.163 1.715-.175-.877-10.367H44.84zm1.286 6.664l.117-4.209h.195l.234 4.17-.546.04zM61.657 11.556L64.152 11.4 64.152 9.198 61.657 9.315 61.657 6.84 64.522 6.782 64.522 4.346 58.637 4.346 58.637 17.051 64.658 16.428 64.658 13.992 61.657 14.245zM55.09 4.346H50.2v13.602l3.45-.37v-5.009l1.578-.097c1.5-.098 2.63-1.17 2.63-2.709V7.561c0-1.578-.039-3.215-2.767-3.215zm-.175 6.002l-1.286.058V6.762l1.286-.02v3.606z"></path>
                                    </g>
                                </g>
                            </svg>
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
                                    <svg width="24" height="24">
                                        <path
                                            fill="#848485"
                                            d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073"
                                        ></path>
                                    </svg>
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
                                    <svg width="24" height="18">
                                        <path
                                            fill="#848485"
                                            d="M19.751 4.484l.012.586c0 6.003-4.544 12.93-12.848 12.93-2.55 0-4.921-.753-6.915-2.05.347.046.708.069 1.074.069a9.029 9.029 0 0 0 5.606-1.95c-1.979-.034-3.635-1.352-4.216-3.154a4.531 4.531 0 0 0 2.037-.078 4.537 4.537 0 0 1-3.616-4.45V6.33a4.42 4.42 0 0 0 2.037.565A4.546 4.546 0 0 1 .92 3.12c0-.833.223-1.62.615-2.287a12.769 12.769 0 0 0 9.299 4.744 4.38 4.38 0 0 1-.112-1.038c0-2.5 2.014-4.539 4.509-4.539 1.298 0 2.472.554 3.3 1.43A9.058 9.058 0 0 0 21.396.337a4.517 4.517 0 0 1-1.991 2.512A9.043 9.043 0 0 0 22 2.129a9.326 9.326 0 0 1-2.249 2.355"
                                        ></path>
                                    </svg>
                                </A>
                            </Icon>
                            <Icon>
                                <A href="/">
                                    <svg width="24" height="24">
                                        <path
                                            fill="#848485"
                                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.341 10c0-.71-.52-1.333-1.352-1.333H10v2.666h2.988c.832 0 1.353-.588 1.353-1.333zm-1.248 3.333H10V16h3.093c.919 0 1.474-.501 1.474-1.333 0-.728-.522-1.334-1.474-1.334zM13.716 18H7.333V6.667h6.193c2.202 0 3.328 1.308 3.328 2.85 0 1.439-.901 2.379-1.993 2.604 1.247.192 2.218 1.344 2.218 2.783 0 1.751-1.144 3.096-3.363 3.096z"
                                        ></path>
                                    </svg>
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
