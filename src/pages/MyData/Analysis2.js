import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import history from "../../history";
import api from "../../services/api";
// import AuthService from "../../services/auth.service";
import MyTag from "./Tag/MyTag";
import Chart from "./Chart";
// import ActorSection from "./ActorSection";

function Analysis() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        rating: {
            movieCount: 0,
            tvShowCount: 0,
            bookCount: 0,
        },
        movie: {
            totalRunningTimeInMinute: 0,
        },
    });
    // const [data, setData] = useState({});
    const [data] = useState({});

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"));
        const getData = async () => {
            const response = await api.get(`/users/${id}/analysis`);
            console.log("useEffect", response);
            setUserInfo(() => response.data);
        };
        getData();
    }, []);

    const averageData = userInfo.rating.average; //toFixed(1)
    const average = averageData;

    const checkState = () => {
        console.log(userInfo);
    };

    return (
        <NavContainer>
            <section className="main">
                <div className="self">
                    <div className="background"></div>
                    <div className="mainContainer">
                        <HeaderBox>
                            <div className="header">
                                <Margin>
                                    <div className="watchaLogoContainer">
                                        <span className="watchaLogo"></span>
                                    </div>
                                    <h1 className="analysisTitle">
                                        <span className="analysisWord">
                                            취향분석
                                        </span>
                                        <div className="roundedImage">
                                            <div className="profileImage"></div>
                                        </div>
                                        <div
                                            className="userName"
                                            onClick={checkState}
                                        >
                                            {userInfo.userName}
                                        </div>
                                    </h1>
                                </Margin>
                            </div>
                        </HeaderBox>
                        <Rating>
                            <section className="sectionRating">
                                <div>
                                    <Margin>
                                        <header className="ratingHeader">
                                            <h2 className="ratingTitle">
                                                평가수
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="ratingCategory">
                                            <Ul>
                                                <li className="statList">
                                                    <div className="statSumTitle">
                                                        {
                                                            userInfo.rating
                                                                .movieCount
                                                        }
                                                    </div>
                                                    <div className="statSumSubTitle">
                                                        영화
                                                    </div>
                                                </li>
                                                <li className="statList">
                                                    <div className="statSumTitle">
                                                        {
                                                            userInfo.rating
                                                                .tvShowCount
                                                        }
                                                    </div>
                                                    <div className="statSumSubTitle">
                                                        TV프로그램
                                                    </div>
                                                </li>
                                                <li className="statList">
                                                    <div className="statSumTitle">
                                                        {
                                                            userInfo.rating
                                                                .bookCount
                                                        }
                                                    </div>
                                                    <div className="statSumSubTitle">
                                                        책
                                                    </div>
                                                </li>
                                            </Ul>
                                        </div>
                                        <Divider />
                                    </Margin>
                                </div>
                            </section>
                            <section className="starAnalysis">
                                <div>
                                    <Margin>
                                        <div className="starHeader">
                                            <h2 className="starTitle">
                                                별점 분포
                                            </h2>
                                        </div>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <h3 className="analysisSubTitle">
                                            대중의 평가에 잘 휘둘리지 않는
                                            '지조파'
                                        </h3>
                                        <div className="barContainer">
                                            <div className="barBox">
                                                <Chart />
                                            </div>
                                        </div>
                                        <div className="starSumContainer">
                                            <Ul>
                                                <li className="statList">
                                                    <div className="statSumTitle">
                                                        {average}
                                                    </div>
                                                    <div className="statSumSubTitle">
                                                        별점 평균
                                                    </div>
                                                </li>
                                                <li className="statList">
                                                    <div className="statSumTitle">
                                                        {
                                                            userInfo.rating
                                                                .totalCount
                                                        }
                                                    </div>
                                                    <div className="statSumSubTitle">
                                                        별점 개수
                                                    </div>
                                                </li>
                                                <li className="statList">
                                                    <div className="statSumTitle">
                                                        {
                                                            userInfo.rating
                                                                .mostRating
                                                        }
                                                    </div>
                                                    <div className="statSumSubTitle">
                                                        많이 준 별점
                                                    </div>
                                                </li>
                                            </Ul>
                                        </div>
                                    </Margin>
                                </div>
                            </section>
                        </Rating>
                        <Favorite>
                            <section className="favoriteBox">
                                <div>
                                    <Margin>
                                        <header className="tagHeader">
                                            <h2 className="tagTitle">
                                                영화 선호태그
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="tagCloudContainer">
                                            <div>
                                                <Margin>
                                                    <div className="tagBox">
                                                        <MyTag data={data} />
                                                    </div>
                                                </Margin>
                                            </div>
                                        </div>
                                        <Divider />
                                    </Margin>
                                </div>
                            </section>
                            <section className="favoriteBox">
                                <div>
                                    <Margin>
                                        <header className="tagHeader">
                                            <h2 className="tagTitle">
                                                선호배우
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="tagCloudContainer">
                                            <div>
                                                <Margin>
                                                    <div className="tagBox"></div>
                                                </Margin>
                                            </div>
                                        </div>
                                        <Divider />
                                    </Margin>
                                </div>
                            </section>
                            <section className="favoriteBox">
                                <div>
                                    <Margin>
                                        <header className="tagHeader">
                                            <h2 className="tagTitle">
                                                선호감독
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="tagCloudContainer">
                                            <div>
                                                <Margin>
                                                    <div className="tagBox"></div>
                                                </Margin>
                                            </div>
                                        </div>
                                        <Divider />
                                    </Margin>
                                </div>
                            </section>
                            <section className="favoriteBox">
                                <div>
                                    <Margin>
                                        <header className="tagHeader">
                                            <h2 className="tagTitle">
                                                영화 선호국가
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="tagCloudContainer">
                                            <div>
                                                <Margin>
                                                    <div className="tagBox"></div>
                                                </Margin>
                                            </div>
                                        </div>
                                        <Divider />
                                    </Margin>
                                </div>
                            </section>
                            <section className="favoriteBox">
                                <div>
                                    <Margin>
                                        <header className="tagHeader">
                                            <h2 className="tagTitle">
                                                영호 선호장르
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="tagCloudContainer">
                                            <div>
                                                <Margin>
                                                    <div className="tagBox"></div>
                                                </Margin>
                                            </div>
                                        </div>
                                        <Divider />
                                    </Margin>
                                </div>
                            </section>
                            <section className="totalRunning">
                                <div>
                                    <Margin>
                                        <header className="tagHeader">
                                            <h2 className="tagTitle">
                                                영화 감상 시간
                                            </h2>
                                        </header>
                                    </Margin>
                                </div>
                                <div>
                                    <Margin>
                                        <div className="watchingTime">
                                            {
                                                userInfo.movie
                                                    .totalRunningTimeInMinute
                                            }
                                            시간
                                        </div>
                                        <div className="analysisSubtitle">
                                            이제 자기만의 영화보는 관점이
                                            생기셨을 거예요.
                                        </div>
                                    </Margin>
                                </div>
                            </section>
                        </Favorite>
                    </div>
                </div>
            </section>
        </NavContainer>
    );
}

export default Analysis;

const Favorite = styled.div`
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;
    background: transparent;
    margin: 12px 0 0;

    @media (min-width: 1023px) {
        border: 1px solid;
        border-radius: 6px;
    }

    .favoriteBox {
        background: #fff;
        padding: 8px 0 0;

        .tagHeader {
            overflow: hidden;
            .tagTitle {
                float: left;
                color: #000;
                font-size: 19px;
                font-weight: 700;
                -webkit-letter-spacing: -0.7px;
                -moz-letter-spacing: -0.7px;
                -ms-letter-spacing: -0.7px;
                letter-spacing: -0.7px;
                line-height: 28px;
                margin: 8px 0;
            }
        }

        .tagCloudContainer {
            margin: 12px 0 0;

            .tagBox {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
        }
    }

    .totalRunning {
        background: #fff;
        padding: 8px 0 0;
        padding-bottom: 24px;

        .tagHeader {
            overflow: hidden;
            .tagTitle {
                float: left;
                color: #000;
                font-size: 19px;
                font-weight: 700;
                -webkit-letter-spacing: -0.7px;
                -moz-letter-spacing: -0.7px;
                -ms-letter-spacing: -0.7px;
                letter-spacing: -0.7px;
                line-height: 28px;
                margin: 8px 0;
            }
        }

        .watchingTime {
            color: #ff2f6e;
            font-size: 17px;
            font-weight: 700;
            -webkit-letter-spacing: -0.5px;
            -moz-letter-spacing: -0.5px;
            -ms-letter-spacing: -0.5px;
            letter-spacing: -0.5px;
            line-height: 22px;
            line-height: normal !important;
            text-align: center;
            margin: 12px 0 4px;
        }

        .analysisSubtitle {
            color: #ff2f6e;
            font-size: 13px;
            font-weight: 400;
            -webkit-letter-spacing: -0.2px;
            -moz-letter-spacing: -0.2px;
            -ms-letter-spacing: -0.2px;
            letter-spacing: -0.2px;
            line-height: 18px;
            line-height: normal !important;
            text-align: center;
            margin: 4px 0 0;
        }
        .tagCloudContainer {
            margin: 12px 0 0;

            .tagBox {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
        }

        :last-child {
            margin: 0;
        }
    }
`;

const NavContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;

    .main {
        padding-bottom: 0;

        @media (min-width: 719px) {
            padding-bottom: unset;
        }

        .self {
            @media (min-width: 719px) {
                padding: 20px 0;
                .background {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: -1;
                    background: #f8f8f8;
                }

                .mainContainer {
                    margin: 0 auto;

                    @media (min-width: 719px) {
                        max-width: 640px;
                    }

                    @media (min-width: 1023px) {
                        max-width: 640px;
                    }
                }
            }
        }
    }
`;

const HeaderBox = styled.div`
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;
    position: relative;

    @media (min-width: 1023px) {
        border: 1px solid;
        border-radius: 6px;
    }

    .header {
        position: relative;
        z-index: 1;
        background: url("https://d2rlq84xifqisi.cloudfront.net/images/analysisBackground.86647f491610a6893109.png")
            center no-repeat;
        background-size: cover;

        .watchaLogoContainer {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding: 16px 0 10px;

            .watchaLogo {
                display: inline-block;
                background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iNjJweCIgdmlld0JveD0iMCAwIDEwMSA2MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5Mb2dpbiAvIEFzc2V0IC8gbG9nbyB3aGl0ZTwvdGl0bGU+CiAgICA8ZyBpZD0iTG9naW4tLy1Bc3NldC0vLWxvZ28td2hpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAuNTcxNDI5IiBoZWlnaHQ9IjY0Ij48L3JlY3Q+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTI2IiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTg5LjA4MDUxNSw4LjYyNTY3MjUgTDg3LjU1MjIxNSwzMC4xNjIxNDc1IEw5MS40MjE3OSwyOS43NTUyNzI1IEw5MS41NDU0MDI1LDI1LjM4MjcyMjUgTDkyLjkyMzM1MjUsMjUuMjY0OTIyNSBMOTMuMTY2NzAyNSwyOS41NzI3NiBMOTYuNTgwNTc3NSwyOS4yMTQ3MSBMOTQuODM2MDUyNSw4LjYyNTY3MjUgTDg5LjA4MDUxNSw4LjYyNTY3MjUgWiBNOTEuODgxNzUyNSwxMy41MzI5NzI1IEw5Mi4yNjA3Mjc1LDEzLjUzMjk3MjUgTDkyLjczMDM3NzUsMjEuODQ0NDYgTDkxLjY0MzgyNzUsMjEuOTExNDk3NSBMOTEuODgxNzUyNSwxMy41MzI5NzI1IFoiIGlkPSJGaWxsLTEiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMiIgcG9pbnRzPSIyOC4wNzEyMzYzIDMuODc1ZS0wNSAyNi4yNjkzNjEyIDI2LjIwMDA3NjIgMjUuODE3OTIzOCAyNi4yMjUyNjM3IDIyLjAwMTgyMzggOC42MjU3ODg3NSAxNS45MzI3OTg3IDguNjI1Nzg4NzUgMTMuMDc0NTk4OCAyNy4wNjc2ODg3IDEyLjQ2NzM4NjMgMjcuMTAyMTc2MiA5LjcxMTQ4NjI1IDguNjI1Nzg4NzUgLTMuODc1ZS0wNSA4LjYyNTc4ODc1IDUuODQxOTExMjUgMzguNzUwMDM4NyAxNi43NjY2OTg3IDM3LjYwMTg3NjIgMTguOTM0MzczOCAyMC41OTEwMTM4IDE5LjU0MTE5ODcgMjAuNTU5MjM4OCAyMi40NTcxMzYzIDM3LjAwMzk2MzcgMzEuNDA5NTQ4NyAzNi4wNjI3MjYyIDM3LjQwMzM5ODggMy44NzVlLTA1Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTMiIHBvaW50cz0iNTQuNjI1NTY1IDMzLjYyMjg3MTIgNjAuMDg4MTUyNSAzMy4wNDg5ODM3IDYwLjA4ODE1MjUgMTQuNzg2ODgzNyA2My4xOTg2MTUgMTQuNzA1NTA4NyA2My4xOTg2MTUgOC42MjU2MzM3NSA1MC45MDc4OSA4LjYyNTYzMzc1IDUwLjkwNzg5IDE1LjAyNzUyMTIgNTQuNjI1NTY1IDE0LjkyOTg3MTIiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTY5LjY3OTAxLDMyLjI5NjUzNjIgQzczLjI0MjQ2LDMxLjg5NzQxMTIgNzUuMTIwNjcyNSwyOS45MDk1MzYyIDc1LjEyMDY3MjUsMjYuOTQyMDYxMiBMNzUuMTIwNjcyNSwyMi4wOTk0NzM3IEw3MC41MTMyOTc1LDIyLjM3MzQzNjIgTDcwLjUxMzI5NzUsMjguNjM2MjExMiBMNjguOTk2MjM1LDI4Ljc2MjUzNjIgTDY4Ljk5NjIzNSwxMy4xMzA3ODYyIEw3MC41MTMyOTc1LDEzLjEwODY5ODcgTDcwLjUxMzI5NzUsMTcuMzY3MzIzNyBMNzUuMDQ0NzIyNSwxNy4xOTQxMTEyIEw3NS4wNDQ3MjI1LDEzLjAyNDIyMzcgQzc1LjA0NDcyMjUsMTAuMjQ1NDYxMiA3My4xNjkyMjI1LDguMjk5MDQ4NzUgNjkuNzU0OTYsOC4yOTkwNDg3NSBDNjYuMTEzMjM1LDguMjk5MDQ4NzUgNjMuOTk5NDIyNSwxMC4yNDU0NjEyIDYzLjk5OTQyMjUsMTMuMjEzMzIzNyBMNjMuOTk5NDIyNSwyOC4xNDgzNDg3IEM2My45OTk0MjI1LDMxLjI0MjE0ODcgNjUuNzMzODcyNSwzMi43Mzg2NzM3IDY5LjY3OTAxLDMyLjI5NjUzNjIiIGlkPSJGaWxsLTQiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNiIgcG9pbnRzPSI4MC44NzYwMTYyIDIxLjc1MTE1IDgyLjQ2OTAyODcgMjEuNjUzODg3NSA4Mi40NjkwMjg3IDMwLjY5NjIgODYuNDkwMTE2MiAzMC4yNzM0Mzc1IDg2LjQ5MDExNjIgOC42MjU3NSA4Mi40NjkwMjg3IDguNjI1NzUgODIuNDY5MDI4NyAxNy40Mzk4MjUgODAuODc2MDE2MiAxNy41MDY4NjI1IDgwLjg3NjAxNjIgOC42MjU3NSA3Ni40MTA0NjYyIDguNjI1NzUgNzYuNDEwNDY2MiAzMS4zMjYyNzUgODAuODc2MDE2MiAzMC44NjM5ODc1Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTgiIHBvaW50cz0iNzEuMjY0MjMzOCA2MS43Mzk3MTYyIDc3LjIxODk0NjMgNjEuNzM5NzE2MiA3Ny4yMTg5NDYzIDM1LjU4MTUyODggNzEuMjY0MjMzOCAzNi4yNDg4MDM4Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NC4yNTIxNSw1Ny4xNDc2MDg3IEw2Mi40ODUxNSw1Ny4xODQ0MjEyIEw2Mi40ODUxNSw0Mi4wNTY0MjEyIEw2NC4yNTIxNSw0MS45MjY5OTYyIEw2NC4yNTIxNSw1Ny4xNDc2MDg3IFogTTYzLjYzNzU3NSwzNi45ODg2OTYyIEw1Ny4yMjUyMjUsMzcuNjYyNTU4NyBMNTcuMjI1MjI1LDYxLjczOTg3MTIgTDYyLjMwMzAyNSw2MS43Mzk4NzEyIEM2Ny45ODk5NzUsNjEuNzM5ODcxMiA2OS44NjcwMjUsNTkuMDYxODU4NyA2OS44NjcwMjUsNTMuODU0NjMzNyBMNjkuODY3MDI1LDQ0LjEyOTkzMzcgQzY5Ljg2NzAyNSwzOS4yOTc4MDg3IDY4LjU1OTIxMjUsMzYuNDcxMzgzNyA2My42Mzc1NzUsMzYuOTg4Njk2MiBMNjMuNjM3NTc1LDM2Ljk4ODY5NjIgWiIgaWQ9IkZpbGwtMTEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTg1Ljc0Nzc4MjUsNTAuODM3MDkzNyBMODYuMzc0MzcsNDAuNzM2OTA2MiBMODcuNDY3ODk1LDQwLjY2OTA5MzcgTDg4LjQzNTg3LDUwLjcyNDMzMTIgTDg1Ljc0Nzc4MjUsNTAuODM3MDkzNyBaIE04MS44MTczNywzNS4xMDQ5ODEzIEw3OC42MTkzMzI1LDYxLjczOTc5MzcgTDg1LjA3MTIwNzUsNjEuNzM5NzkzNyBMODUuNDA3OTQ1LDU2LjMxMjg1NjIgTDg4Ljk2NTU4MjUsNTYuMjI0NTA2MiBMODkuNDk2NDU3NSw2MS43Mzk3OTM3IEw5Ni41NTkwMzI1LDYxLjczOTc5MzcgTDkyLjE0MjY5NSwzMy45OTEzMDYzIEw4MS44MTczNywzNS4xMDQ5ODEzIFoiIGlkPSJGaWxsLTE0Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Mi4yMzgyMzYyLDI1LjE1Mzg2NSBMNDMuMTczNjYxMywxNC43ODMyMDI1IEw0NC4wMDc5NDg3LDE0Ljc3MDgwMjUgTDQ0Ljk4NDgzNjIsMjQuOTczNjc3NSBMNDIuMjM4MjM2MiwyNS4xNTM4NjUgWiBNNDguNDA0NTIzNyw4LjYyNTgyNzUgTDM4LjY5Mjk5ODgsOC42MjU4Mjc1IEwzNC4yMTY5ODYyLDM1Ljc2NzEwMjUgTDQxLjM0ODUzNjIsMzUuMDE4MDY1IEw0MS43ODcxODYyLDMwLjE1Mzc3NzUgTDQ1LjQ1MDIyMzcsMjkuODM0MDkgTDQ1LjkwMDQ5ODcsMzQuNTM5ODkgTDUyLjI3MzcxMTIsMzMuODY5OTAyNSBMNDguNDA0NTIzNyw4LjYyNTgyNzUgWiIgaWQ9IkZpbGwtMTciPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTkiIHBvaW50cz0iNTEuNjUzNDc4NyA1Mi4xMzI4MTYyIDU1LjI0Mjg5MTIgNTEuOTgwOTE2MiA1NS4yNDI4OTEyIDQ3LjYxODgyODcgNTEuNjUzNDc4NyA0Ny44MjAzMjg3IDUxLjY1MzQ3ODcgNDMuNDA2NzAzNyA1NS42NTc1MTYzIDQzLjA5NjMxNjIgNTUuNjU3NTE2MyAzNy44MjcwOTEyIDQ2LjY1ODIxNjIgMzguNzcyNTkxMiA0Ni42NTgyMTYyIDYxLjczOTcxNjIgNTUuOTk4NTE2MiA2MS43Mzk3MTYyIDU1Ljk5ODUxNjIgNTYuOTIxNTQxMiA1MS42NTM0Nzg3IDU2Ljk5OTA0MTIiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTQwLjk5NTcxNzUsNDkuOTMyMzIgTDM5LjUzNTIzLDUwLjAwNzg4MjUgTDM5LjUzNTIzLDQzLjY3MTQ4MjUgTDQwLjk5NTcxNzUsNDMuNTUxMzU3NSBMNDAuOTk1NzE3NSw0OS45MzIzMiBaIE00MS4xODEzMywzOS4zNDg5MiBMMzQuNjk0NTgsNDAuMDMwNTMyNSBMMzQuNjk0NTgsNjEuNzM5ODMyNSBMMzkuNTM1MjMsNjEuNzM5ODMyNSBMMzkuNTM1MjMsNTMuNDg5NTcgTDQxLjQ2NjkxNzUsNTMuNDE1MTcgQzQ0LjM5MjU0MjUsNTMuMzAyNzk1IDQ1LjQ4MTQxNzUsNTEuMzE2ODU3NSA0NS40ODE0MTc1LDQ4LjQ0OTM1NzUgTDQ1LjQ4MTQxNzUsNDQuMjUzNTA3NSBDNDUuNDgxNDE3NSw0MC40NzE1MDc1IDQzLjc4ODQzLDM5LjA3NDU3IDQxLjE4MTMzLDM5LjM0ODkyIEw0MS4xODEzMywzOS4zNDg5MiBaIiBpZD0iRmlsbC0yMiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)
                    no-repeat center;
                background-size: contain;
                width: 101px;
                height: 64px;
                vertical-align: top;
            }
        }

        .analysisTitle {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin: 0;
            overflow: hidden;

            .analysisWord {
                color: #ffffff;
                font-size: 12px;
                font-weight: 400;
                -webkit-letter-spacing: -0.2px;
                -moz-letter-spacing: -0.2px;
                -ms-letter-spacing: -0.2px;
                letter-spacing: -0.2px;
                line-height: 19px;
                margin: 0 0 12px;
            }

            .roundedImage {
                display: block;
                border: solid 1px rgba(0, 0, 0, 0.08);
                border-radius: 50%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                position: relative;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                width: 56px;
                height: 56px;
                overflow: hidden;
                width: 48px;
                height: 48px;
                border: 0;
                margin: 0 auto;

                .profileImage {
                    position: relative;
                    z-index: 1;
                    background: url("https://d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg")
                        no-repeat center;
                    background-size: cover;
                    width: 100%;
                    height: 100%;
                }
            }

            .userName {
                color: #ffffff;
                font-size: 19px;
                font-weight: 700;
                -webkit-letter-spacing: -0.7px;
                -moz-letter-spacing: -0.7px;
                -ms-letter-spacing: -0.7px;
                letter-spacing: -0.7px;
                line-height: 28px;
                font-weight: 500;
                text-align: center;
                min-height: 56px;
                margin: 8px 0 12px;
                word-break: break-all;
            }
        }
    }
`;

const Rating = styled.div`
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;
    background: transparent;
    margin: 12px 0 0;

    .sectionRating {
        background: #fff;
        padding: 8px 0 0;

        .ratingHeader {
            overflow: hidden;

            .ratingTitle {
                float: left;
                color: #000;
                font-size: 19px;
                font-weight: 700;
                -webkit-letter-spacing: -0.7px;
                -moz-letter-spacing: -0.7px;
                -ms-letter-spacing: -0.7px;
                letter-spacing: -0.7px;
                line-height: 28px;
                margin: 8px 0;
            }
        }

        .ratingCategory {
            margin: 8px 0 0;
        }
    }

    .starAnalysis {
        background: #fff;
        padding: 8px 0 0;
        padding-bottom: 24px;

        .starHeader {
            overflow: hidden;

            .starTitle {
                float: left;
                color: #000;
                font-size: 19px;
                font-weight: 700;
                -webkit-letter-spacing: -0.7px;
                -moz-letter-spacing: -0.7px;
                -ms-letter-spacing: -0.7px;
                letter-spacing: -0.7px;
                line-height: 28px;
                margin: 8px 0;
            }
        }

        .analysisSubTitle {
            color: #ff2f6e;
            font-size: 13px;
            font-weight: 400;
            -webkit-letter-spacing: -0.2px;
            -moz-letter-spacing: -0.2px;
            -ms-letter-spacing: -0.2px;
            letter-spacing: -0.2px;
            line-height: 18px;
            line-height: normal !important;
            text-align: center;
            margin: 8px 0 24px;
        }

        .barContainer {
            max-width: 375px;
            margin: 58px auto 0;
            margin: 0 auto;

            .barBox {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-align-items: flex-end;
                -webkit-box-align: flex-end;
                -ms-flex-align: flex-end;
                align-items: flex-end;
                text-align: center;
                margin: 0 -1px;

                .barArea {
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    box-sizing: border-box;
                    padding: 0 1px;
                }
            }
        }

        .starSumContainer {
            padding: 24px 0 0;
        }

        :last-child {
            margin: 0;
        }
    }

    @media (min-width: 1023px) {
        border: 1px solid;
        border-radius: 6px;
    }
`;

const Margin = styled.div`
    margin: 0 20px;
`;

const Divider = styled.div`
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    margin: 24px 0 0;
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -6px;

    .statList {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        box-sizing: border-box;
        width: 33.33333333333333%;
        padding: 0 6px;

        .statSumTitle {
            font-size: 17px;
            font-weight: 700;
            -webkit-letter-spacing: -0.5px;
            -moz-letter-spacing: -0.5px;
            -ms-letter-spacing: -0.5px;
            letter-spacing: -0.5px;
            line-height: 22px;
            line-height: 19px;
            margin: 0 0 4px;
        }

        .statSumSubTitle {
            color: #787878;
            font-size: 12px;
            font-weight: 400;
            -webkit-letter-spacing: -0.2px;
            -moz-letter-spacing: -0.2px;
            -ms-letter-spacing: -0.2px;
            letter-spacing: -0.2px;
            line-height: 16px;
            line-height: 19px;
        }
    }
`;
