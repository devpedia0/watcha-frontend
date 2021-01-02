import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Setting from "./Components/Setting/Setting";
import AuthService from "../../services/auth.service";
import { withRouter, Link } from "react-router-dom";
import { getPageId, randomUserImg } from "../../utils/helperFunc";

function UserMyPage({ match }) {
    const userId = match.params.userId;

    const [settingVisible, setSettingVisible] = useState(true);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const [rated, setRated] = useState({
        book: 0,
        tvShow: 0,
        movie: 0,
    });

    const [wishes, setWishes] = useState({
        book: 0,
        tvShow: 0,
        movie: 0,
    });

    useEffect(() => {
        AuthService.getUserInfo().then(
            (response) => {
                console.log(response);
                setName(response.data.name);
                if (response.data.description !== null) {
                    setDesc(response.data.description);
                } else if (response.data.description === null) {
                    return desc;
                }
            },

            AuthService.getUserRating().then((response) => {
                setRated({
                    book: response.data.book.ratingCount,
                    tvShow: response.data.tvShow.ratingCount,
                    movie: response.data.movie.ratingCount,
                });
                setWishes({
                    book: response.data.book.wishCount,
                    tvShow: response.data.tvShow.wishCount,
                    movie: response.data.movie.wishCount,
                });
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const settingModal = () => {
        setSettingVisible({ settingVisible: !settingVisible });
    };

    return (
        <Content>
            <Section>
                <Main>
                    <MaxWidth>
                        <Outer>
                            <div>
                                <Bg>
                                    {getPageId() === userId && (
                                        <SettingIcon
                                            onClick={() =>
                                                setSettingVisible(!settingModal)
                                            }
                                        />
                                    )}
                                </Bg>
                                <Profile>
                                    <ProfileHeader>
                                        <Image>
                                            <Portrait
                                                src={randomUserImg()}
                                            ></Portrait>
                                        </Image>
                                        <NickName>
                                            <H1>{name}</H1>
                                        </NickName>
                                        <Desc>
                                            <div className="descInner">
                                                {desc}
                                            </div>
                                        </Desc>
                                    </ProfileHeader>
                                    <ul>
                                        <Type>
                                            <Link
                                                to={`/user/${getPageId()}/analysis`}
                                            >
                                                <A>
                                                    <ChartImage></ChartImage>

                                                    <span className="analysis">
                                                        취향분석
                                                    </span>
                                                </A>
                                            </Link>
                                        </Type>
                                    </ul>
                                </Profile>
                                <div style={{ margin: "0 20px" }}>
                                    <Ul>
                                        <Li>
                                            <Link
                                                to={`/user/${getPageId()}/movies`}
                                            >
                                                <Box
                                                    style={{
                                                        background:
                                                            "linear-gradient(45deg, #82d957 40%, #bfe874 100%)",
                                                    }}
                                                >
                                                    <Category
                                                        style={{
                                                            backgroundImage:
                                                                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYyIiBoZWlnaHQ9IjE2MiIgdmlld0JveD0iMCAwIDE2MiAxNjIiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTYydjE2MkgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwQjUwOSIgZmlsbC1vcGFjaXR5PSIuMyIgZD0iTTEzNy4xNDggMTQ1LjkyMWg4Ljgzdi04LjI4OWgtOC44M3Y4LjI5em0tNTIuNDU4IDBoNDUuODQzVjk3LjUyN0g4NC42OXY0OC4zOTR6bS0xNS40NDUgMGg4Ljgzdi04LjI4OWgtOC44M3Y4LjI5em0wLTEyLjY0M2g4Ljgzdi05LjM3N2gtOC44M3Y5LjM3N3ptMC0xMy43M2g4Ljgzdi05LjM3OGgtOC44M3Y5LjM3N3ptMC0xMy43MzJoOC44M3YtOC4yODloLTguODN2OC4yODl6bTY3LjkwMyAyNy40NjJoOC44M3YtOS4zNzdoLTguODN2OS4zNzd6bTAtMTMuNzNoOC44M3YtOS4zNzhoLTguODN2OS4zNzd6bTAtMTMuNzMyaDguODN2LTguMjg5aC04LjgzdjguMjg5em0xMi4xMzgtMjcuOTc3Yy0xLjgyNyAwLTMuMzA4IDEuNDYyLTMuMzA4IDMuMjY1djkuODkyaC04Ljgzdi05Ljg5MmMwLTEuODAzLTEuNDgtMy4yNjUtMy4zMDgtMy4yNjUtMS44MjYgMC0zLjMwNyAxLjQ2Mi0zLjMwNyAzLjI2NXY5Ljg5Mkg4NC42OXYtOS44OTJjMC0xLjgwMy0xLjQ4LTMuMjY1LTMuMzA4LTMuMjY1LTEuODI2IDAtMy4zMDcgMS40NjItMy4zMDcgMy4yNjV2OS44OTJoLTguODN2LTkuODkyYzAtMS44MDMtMS40ODEtMy4yNjUtMy4zMDgtMy4yNjUtMS44MjcgMC0zLjMwOCAxLjQ2Mi0zLjMwOCAzLjI2NXY4MS4yNGMwIDEuODA0IDEuNDgxIDMuMjY2IDMuMzA4IDMuMjY2IDEuODI3IDAgMy4zMDgtMS40NjIgMy4zMDgtMy4yNjZ2LTkuODkyaDguODN2OS44OTJjMCAxLjgwNCAxLjQ4IDMuMjY2IDMuMzA3IDMuMjY2czMuMzA4LTEuNDYyIDMuMzA4LTMuMjY2di05Ljg5Mmg0NS44NDN2OS44OTJjMCAxLjgwNCAxLjQ4IDMuMjY2IDMuMzA3IDMuMjY2czMuMzA4LTEuNDYyIDMuMzA4LTMuMjY2di05Ljg5Mmg4LjgzdjkuODkyYzAgMS44MDQgMS40ODEgMy4yNjYgMy4zMDggMy4yNjYgMS44MjcgMCAzLjMwOC0xLjQ2MiAzLjMwOC0zLjI2NnYtODEuMjRjMC0xLjgwMy0xLjQ4MS0zLjI2NS0zLjMwOC0zLjI2NXoiIG1hc2s9InVybCgjYikiLz4KICAgIDwvZz4KPC9zdmc+Cg==)",
                                                        }}
                                                    >
                                                        <Title>영화</Title>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            ★
                                                            <Star>
                                                                {rated.movie}
                                                            </Star>
                                                            <Clip>
                                                                보고싶어요{" "}
                                                                <strong>
                                                                    {
                                                                        wishes.movie
                                                                    }
                                                                </strong>
                                                            </Clip>
                                                        </div>
                                                    </Category>
                                                </Box>
                                            </Link>
                                        </Li>
                                        <Li>
                                            <Link
                                                to={`/user/${getPageId()}/tv_shows`}
                                            >
                                                <Box
                                                    style={{
                                                        background:
                                                            "linear-gradient(45deg, #ffbf66 40%, #ffc89e 100%)",
                                                    }}
                                                >
                                                    <Category
                                                        style={{
                                                            backgroundImage:
                                                                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYyIiBoZWlnaHQ9IjE2MiIgdmlld0JveD0iMCAwIDE2MiAxNjIiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTYydjE2MkgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iI0EzNzQzMyIgZmlsbC1vcGFjaXR5PSIuMyIgZD0iTTU3LjcxOCAxNDQuNjgyaDg5LjEyOFY4NC43NThINTcuNzE4djU5LjkyNHptOTIuNDg3IDYuNzU4SDU0LjM1OWMtMS44NTUgMC0zLjM1OS0xLjUxMy0zLjM1OS0zLjM4VjgxLjM4YzAtMS44NjcgMS41MDQtMy4zOCAzLjM2LTMuMzhoOTUuODQ1YzEuODU1IDAgMy4zNiAxLjUxMyAzLjM2IDMuMzh2NjYuNjhjMCAxLjg2Ny0xLjUwNSAzLjM4LTMuMzYgMy4zOHptLTMwLjAwOCAxMy41MTdoLTM1LjgzYy0yLjQ3NCAwLTQuNDc5LTIuMDE4LTQuNDc5LTQuNTA2IDAtMi40ODggMi4wMDUtNC41MDYgNC40NzktNC41MDZoMzUuODNjMi40NzQgMCA0LjQ3OSAyLjAxOCA0LjQ3OSA0LjUwNiAwIDIuNDg4LTIuMDA1IDQuNTA2LTQuNDc5IDQuNTA2eiIgbWFzaz0idXJsKCNiKSIvPgogICAgPC9nPgo8L3N2Zz4K)",
                                                        }}
                                                    >
                                                        <Title>
                                                            TV 프로그램
                                                        </Title>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            ★
                                                            <Star>
                                                                {rated.tvShow}
                                                            </Star>
                                                            <Clip>
                                                                보고싶어요{" "}
                                                                <strong>
                                                                    {
                                                                        wishes.tvShow
                                                                    }
                                                                </strong>
                                                            </Clip>
                                                        </div>
                                                    </Category>
                                                </Box>
                                            </Link>
                                        </Li>
                                        <Li>
                                            <Link
                                                to={`/user/${getPageId()}/books`}
                                            >
                                                <Box
                                                    style={{
                                                        background:
                                                            "linear-gradient(45deg, #60d1f0 40%, #70e0d3 100%)",
                                                    }}
                                                >
                                                    <Category
                                                        style={{
                                                            backgroundImage:
                                                                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYyIiBoZWlnaHQ9IjE2MiIgdmlld0JveD0iMCAwIDE2MiAxNjIiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTYydjE2MkgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iIzM1OTNCOCIgZmlsbC1vcGFjaXR5PSIuMyIgZD0iTTE0NS4wODkgMTA5LjkxNHY2My40MThIOTAuMDI1Yy0zLjc0IDAtNy43MzgtMS45OS03LjczOC03LjU4di01OC4xNjhhMTUuNjg2IDE1LjY4NiAwIDAgMCA4LjI0MSAyLjMzaDU0LjU2em03LjQzOC00LjY2M2MuMDEyLjA1MS4wMjUuMTAxLjA4Ni41MDcuMDExLjEyMS4wMTguMjQyLjAxOC4zNjZ2NzAuOTk4YzAgMi4wOTMtMS42ODggMy43OS0zLjc3MSAzLjc5SDkwLjAyNWMtOC45OTggMC0xNS4yODEtNi4yMzQtMTUuMjgxLTE1LjE2Vjk1LjI3N2MtLjAzNC0uNDIzLS4wNTYtLjg1LS4wNTYtMS4yODEgMC04Ljc3NyA3LjEwNi0xNS45MTggMTUuODQtMTUuOTE4aDU4LjMzMmMyLjA4MyAwIDMuNzcxIDEuNjk3IDMuNzcxIDMuNzlzLTEuNjg4IDMuNzktMy43NzEgMy43OUg5MC41MjhjLTQuNTc1IDAtOC4yOTcgMy43NC04LjI5NyA4LjMzOCAwIDQuNTk3IDMuNzIyIDguMzM4IDguMjk3IDguMzM4bDU4LjMzMi0uMDU2LjYzOC4xMWMuMDIuMDAzLjAzNy4wMDkuMjMyLjA1LjA1Ny4wMTUuMTE1LjAzLjM0LjA5OS4wNTcuMDIuMTEzLjA0LjMyNC4xMjYuMDU4LjAyNy4xMTUuMDU1LjMwOC4xNTUuMDYxLjAzNS4xMi4wNzIuMjkzLjE4Mi4wNjcuMDQ3LjEzMS4wOTcuMjc1LjIwOWEzLjg1NyAzLjg1NyAwIDAgMSAuNDg2LjQ4OWMuMDI3LjAzMi4wNTEuMDY2LjIwNy4yNzQuMDI5LjA0Mi4wNTUuMDg1LjE4MS4yOTIuMDI3LjA0OC4wNTEuMDk2LjE1Ni4zMS4wMjIuMDUxLjA0NC4xMDMuMTI4LjMyOS4wMTcuMDUyLjAzNS4xMDQuMDk5LjM0OHpNOTEuNTM0IDkxLjI4aDU3LjMyNmEyLjUyIDIuNTIgMCAwIDEgMi41MTQgMi41MjYgMi41MiAyLjUyIDAgMCAxLTIuNTE0IDIuNTI3SDkxLjUzNGEyLjUyIDIuNTIgMCAwIDEtMi41MTUtMi41MjcgMi41MiAyLjUyIDAgMCAxIDIuNTE1LTIuNTI2em0yNS44OTcgMTguNjN2MjcuNTQ0YzAgLjc5Mi40NiAxLjUxIDEuMTc4IDEuODRhMi4wMDQgMi4wMDQgMCAwIDAgMi4xNTQtLjMxNGw2LjQ3NC01LjY1OSA2LjQ3NCA1LjY1OWEyLjAwNyAyLjAwNyAwIDAgMCAyLjE1NC4zMTMgMi4wMjIgMi4wMjIgMCAwIDAgMS4xNzgtMS44Mzl2LTI3LjU0NUgxMTcuNDN6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=)",
                                                        }}
                                                    >
                                                        <Title>책</Title>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            ★
                                                            <Star>
                                                                {rated.book}
                                                            </Star>
                                                            <Clip>
                                                                읽고 싶어요{" "}
                                                                <strong>
                                                                    {
                                                                        wishes.book
                                                                    }
                                                                </strong>
                                                            </Clip>
                                                        </div>
                                                    </Category>
                                                </Box>
                                            </Link>
                                        </Li>
                                    </Ul>
                                </div>
                            </div>
                        </Outer>
                    </MaxWidth>
                </Main>
            </Section>
            <>
                <Setting
                    settingModal={settingModal}
                    switchModal={settingVisible}
                />
            </>
        </Content>
    );
}

export default withRouter(UserMyPage);

const Content = styled.div`
    padding-top: 0;
    padding-bottom: 56px;
    @media (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }
`;

const Section = styled.div`
    background: #f8f8f8;
    overflow: hidden;

    @media (min-width: 719px) {
        display: flex;
        flex-direction: column;
        // height: 100vh;
    }
`;

const Main = styled.div`
    @media (min-width: 719px) {
        flex: 1 1 0%;
        margin: 28px 0px 30px;
    }
`;

const MaxWidth = styled.div`
    margin: 0 auto;

    @media (min-width: 719px) {
        max-width: 640px;
    }
`;

const Outer = styled.div`
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;

    @media (max-width: 1023px) and (min-width: 719px) {
        border: 1px solid;
        border-radius: 6px;
    }
`;

const Bg = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    height: 0px;
    padding-top: 32%;
    background: url("https://d2rlq84xifqisi.cloudfront.net/images/mypagePatternResize.2e73487f09488acbeb2d.jpg")
        0% 0% / 180px 177px;
    margin: 0px 0px -20px;
    ::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        height: 44px;
    }
`;

const SettingIcon = styled.button`
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE5LjQzIDEyLjk4Yy4wNC0uMzIuMDctLjY0LjA3LS45OCAwLS4zNC0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwIDAgMTQgMmgtNGMtLjI1IDAtLjQ2LjE4LS40OS40MmwtLjM4IDIuNjVjLS42MS4yNS0xLjE3LjU5LTEuNjkuOThsLTIuNDktMWMtLjIzLS4wOS0uNDkgMC0uNjEuMjJsLTIgMy40NmMtLjEzLjIyLS4wNy40OS4xMi42NGwyLjExIDEuNjVjLS4wNC4zMi0uMDcuNjUtLjA3Ljk4IDAgLjMzLjAzLjY2LjA3Ljk4bC0yLjExIDEuNjVjLS4xOS4xNS0uMjQuNDItLjEyLjY0bDIgMy40NmMuMTIuMjIuMzkuMy42MS4yMmwyLjQ5LTFjLjUyLjQgMS4wOC43MyAxLjY5Ljk4bC4zOCAyLjY1Yy4wMy4yNC4yNC40Mi40OS40Mmg0Yy4yNSAwIC40Ni0uMTguNDktLjQybC4zOC0yLjY1Yy42MS0uMjUgMS4xNy0uNTkgMS42OS0uOThsMi40OSAxYy4yMy4wOS40OSAwIC42MS0uMjJsMi0zLjQ2Yy4xMi0uMjIuMDctLjQ5LS4xMi0uNjRsLTIuMTEtMS42NXpNMTIgMTUuNWMtMS45MyAwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUgMy41LTMuNSAzLjUgMS41NyAzLjUgMy41LTEuNTcgMy41LTMuNSAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=")
        no-repeat center;
    background-size: cover;
    width: 24px;
    height: 24px;
`;

const Profile = styled.div`
    margin: 0 20px;
`;
const ProfileHeader = styled.header`
    position: relative;
    padding-bottom: 26px;
    border-bottom: 1px solid #ededed;
`;

const Image = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 50%;
`;

const Portrait = styled.div`
    background: url(${(props) => props.src}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;
`;
const NickName = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
`;

const H1 = styled.h1`
    color: #000;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.9px;
    line-height: 30px;
    width: 100%;
    word-break: break-all;
`;

const Desc = styled.div`
    color: #4a4a4a;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    margin-top: 5px;
`;

const Type = styled.li`
    display: list-item;
    list-style: none;
`;

const A = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    text-decoration: none;
    height: 48px;

    .analysis {
        border-bottom: 1px solid #ededed;
        padding: 13px 0;
        flex: 1;
    }
`;

const ChartImage = styled.span`
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFRjY5MkUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuMTggMTEuOTZoMy43NHY4LjM2SDEuMTh6TTE1Ljc1IDE2LjgzaDMuNzR2My40OWgtMy43NHpNNi4wNCA5LjEyaDMuNzR2MTEuMkg2LjA0ek0xMC45IDEzLjg0aDMuNzR2Ni40OEgxMC45eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkNBMjIiIGQ9Ik0xNy40NCAxLjM3bDEuNjYgNCA0LjMxLjM0LTMuMjggMi44MSAxIDQuMjEtMy42OS0yLjI2LTMuNjkgMi4yNiAxLjAxLTQuMjEtMy4yOS0yLjgxIDQuMzItLjM0eiIvPgogICAgPC9nPgo8L3N2Zz4K)
        no-repeat center;
    background-size: contain;
    width: 24px;
    height: 24px;
    margin: 0 12px 0 0;
`;

const Ul = styled.ul`
    display: block;
    padding: 0;
    position: relative;
    white-space: nowrap;
    margin-right: -5px !important;
    margin-left: -5px !important;
    margin: 24px -5px 24px;
`;

const Li = styled.li`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 5px;
    width: 100%;
    position: relative;
    width: 50%;
    @media (min-width: 500px) {
        width: 33.333333333333336%;
    }
`;

const Box = styled.div`
    display: inline-block;
    position: relative;
    vertical-align: middle;
    width: 100%;
    padding-top: 100%;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
`;

const Category = styled.div`
    margin: 0;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #fff;
    padding: 6.9px 11px 26.5px;
    overflow: hidden;
`;
const Title = styled.div`
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 22px;
`;

const Star = styled.div`
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.7px;
    /* line-height: 28px; */
`;

const Clip = styled.div`
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 18px;
    position: absolute;
    bottom: 8.5px;
`;
