import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Stars } from "../../../components";
import Bookmark from "./Bookmark/Bookmark";
import useOpen from "../../../Hooks/useOpen";

const ContentsHeader = ({ data }) => {
    const [isOpen, setOpen, onClickClose] = useOpen();

    const [status, setStatus] = useState("");
    useEffect(() => {
        if (data.status) {
            setStatus(data.status);
        }
    }, [data.status]);

    const handleClickOpen = () => {
        if (!status) {
            setStatus("wish");
        } else {
            setOpen(true);
        }
    };

    const handleClick = (type) => {
        setStatus((state) => (state === type ? "" : type));
        onClickClose();
    };

    const img =
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605860774/brjxqof6s9jx6tlerasw.jpg";
    return (
        <Wrapper>
            <Header>
                <PosterBlock>
                    <div className="bg-left" />
                    <Poster src={data.src}>
                        <div className="gradient-left" />
                        <div className="gradient-right" />
                    </Poster>
                    <div className="bg-right" />
                    <div className="bg-gradient" />
                </PosterBlock>
                <LankingBlock>
                    <div className="img-wrapper">
                        <img src={img} alt="" />
                    </div>
                    <ul>
                        <li>
                            넷플릭스 TV 프로그램 순위 <em>3위</em>
                        </li>
                    </ul>
                </LankingBlock>
            </Header>
            <Content>
                <InfoBlock>
                    <div className="infoList">
                        <div className="title">{data.title}</div>
                        <div className="detail">{`${data.year} ・ ${data.category} ・ ${data.country}`}</div>
                        <div className="rating">
                            평균 ★{data.rate} ({data.num})
                        </div>
                        <ButtonContainer>
                            <ButtonBlock
                                isClicked={!!status}
                                onClick={handleClickOpen}
                            >
                                <button className="btn-left">
                                    <div className="btn-left-content">
                                        <IconSelector status={status} />

                                        <div className="text">
                                            {status === "watching"
                                                ? "보는중"
                                                : "보고싶어요"}
                                        </div>
                                    </div>
                                </button>
                                <button className="btn-right">
                                    <svg
                                        fill=""
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill={!!status ? "#d9d9d9" : "#FFF"}
                                            d="M12 16l6-6H6z"
                                        />
                                    </svg>
                                </button>
                            </ButtonBlock>
                        </ButtonContainer>
                        <Stars />
                        {true && (
                            <Bookmark
                                data={data}
                                status={status}
                                onClickClose={onClickClose}
                                handleClick={handleClick}
                            />
                        )}
                    </div>
                </InfoBlock>
            </Content>
        </Wrapper>
    );
};

export default ContentsHeader;

const Wrapper = styled.div`
    background: #fff;
    @media only screen and (min-width: 719px) {
        border-bottom: 1px solid #e3e3e3;
    }
`;

const Header = styled.div`
    position: relative;
    padding: 44px 0 0;
    @media only screen and (min-width: 719px) {
        padding: 300px 0 0;
    }

    @media only screen and (min-width: 1023px) {
        padding: 270px 0 0;
    }

    @media only screen and (min-width: 1300px) {
        padding: 320px 0 0;
    }

    @media only screen and (min-width: 1400px) {
        padding: 360px 0 0;
    }
`;

const PosterBlock = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    background: black;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .bg-left,
    .bg-right {
        flex: 1;
        background: black;
    }

    .bg-gradient {
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(
            -180deg,
            rgba(20, 20, 20, 0.3) 1%,
            rgba(20, 20, 20, 0.5) 67%,
            #141414 98%
        );
        width: 100%;
        height: 100%;
        overflow: hidden;

        @media only screen and (min-width: 719px) {
            background-image: linear-gradient(
                -180deg,
                rgba(0, 0, 0, 0.35) 2%,
                rgba(0, 0, 0, 0.2) 70%,
                rgba(0, 0, 0, 0.5) 100%
            );
        }
    }
`;

const Poster = styled.div`
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 110%;
    -webkit-filter: blur(15px);
    filter: blur(15px);
    background-size: cover;
    background: ${(props) =>
        props.src
            ? props.src
            : `url("https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1604542596/eataqg1dhtuczq95vgh4.jpg") center center / cover no-repeat`};

    .gradient-left {
        display: none;

        @media only screen and (min-width: 719px) {
            display: block;
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            width: 100px;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0) 100%
            );
        }
    }

    .gradient-right {
        display: none;

        @media only screen and (min-width: 719px) {
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 100px;
            background-image: linear-gradient(
                -90deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0) 100%
            );
        }
    }
    @media only screen and (min-width: 719px) {
        position: relative;
        top: auto;
        left: auto;
        width: 825px;
        height: 100%;
        -webkit-filter: none;
        filter: none;
    }

    @media only screen and (min-width: 1023px) {
        width: 768px;
    }

    @media only screen and (min-width: 1300px) {
        width: 910px;
    }

    @media only screen and (min-width: 1400px) {
        width: 1024px;
    }
`;

const LankingBlock = styled.div`
    position: relative;
    margin: 0 auto;

    .img-wrapper {
        position: relative;
        overflow: hidden;
        display: block;
        position: relative;
        box-sizing: border-box;
        width: 114px;
        height: 164px;
        border: solid 1px #fff;
        border-radius: 3px;
        margin: 0 auto;
        background: #f8f8f8;
        transition: 300ms;

        img {
            vertical-align: top;
            width: 100%;
            height: 100%;
            opacity: 1;
            object-fit: cover;
            transition: opacity 420ms ease 0s;
        }

        @media only screen and (min-width: 719px) {
            position: absolute;
            top: 2px;
            left: 0;
            width: 153px;
            height: 221px;
            border-width: 2px;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }

        @media only screen and (min-width: 1023px) {
            width: 166px;
            height: 238px;
        }
    }

    ul {
        text-align: center;
        padding: 0 0 10px;
        margin: 15px 0 0;

        li {
            display: inline-block;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            font-size: 13px;
            font-weight: 400;
            -webkit-letter-spacing: -0.2px;
            -moz-letter-spacing: -0.2px;
            -ms-letter-spacing: -0.2px;
            letter-spacing: -0.2px;
            line-height: 18px;
            margin: 0 4px;
        }

        em {
            color: rgba(255, 255, 255, 0.8);
            font-style: normal;
        }

        @media only screen and (min-width: 719px) {
            text-align: left;
            padding: 0 0 10px 18px;
            margin: 0 -4px;
        }

        @media only screen and (min-width: 1023px) {
            padding: 0 0 10px 25px;
            margin: 0 -4px;
        }
    }

    @media only screen and (min-width: 719px) {
        max-width: 640px;
        padding: 0 0 0 153px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 960px;
        padding: 0 0 0 166px;
    }
`;

const Content = styled.div`
    text-align: center;
    padding: 14px 16px 22px;
    height: auto;
    overflow: hidden;
`;

const InfoBlock = styled.div`
    margin: 0 auto;

    .infoList {
        @media only screen and (min-width: 719px) {
            text-align: left;
            margin: 0 0 0 173px;
        }

        @media only screen and (min-width: 1023px) {
            margin: 0 0 0 191px;
        }
    }

    .title {
        font-size: 25px;
        font-weight: 700;
        letter-spacing: -0.9px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;

        @media only screen and (min-width: 719px) {
            width: 520px;
        }
        @media only screen and (min-width: 1023px) {
            font-size: 33px;
            font-weight: 700;
            letter-spacing: -1.2px;
            line-height: 40px;
        }
    }

    .detail {
        color: rgba(0, 0, 0, 0.5);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        box-sizing: border-box;
        margin-top: 3px;

        @media only screen and (min-width: 1023px) {
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -0.7px;
            line-height: 22px;
            margin-top: 4px;
        }
    }

    .rating {
        color: #282828;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        white-space: pre-wrap;
        box-sizing: border-box;
        padding: 7px 0;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        margin-top: 14px;

        @media only screen and (min-width: 1023px) {
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -0.7px;
            line-height: 22px;
            padding: 8px 0;
        }
    }
    @media only screen and (min-width: 719px) {
        max-width: 640px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 960px;
    }
`;

const ButtonContainer = styled.div`
    margin: 19px 0 14px;

    @media only screen and (min-width: 719px) {
        float: left;
        margin: 39px 21px 0 0;
    }
    @media only screen and (min-width: 1023px) {
        float: left;
        margin: 39px 30px 0 0;
    }
`;

const ButtonBlock = styled.div`
    background: ${(props) => (props.isClicked ? "#f6f6f6" : "#ff2f6e")};
    border: ${(props) => (props.isClicked ? "1px solid #ebebeb" : "")};
    display: flex;
    vertical-align: top;
    box-sizing: border-box;
    width: 254px;
    height: 40px;
    border-radius: 6px;

    margin: 0 auto;
    overflow: hidden;

    .btn-left {
        background: none;
        padding: 0;
        border: none;
        margin: 0;
        cursor: pointer;
        flex: 1;
        color: ${(props) => (props.isClicked ? "#000" : "#f6f6f6")};
        text-align: center;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: -0.7px;
        line-height: 22px;
        height: 100%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

        .btn-left-content {
            display: flex;
            position: relative;
            left: -8px;
            justify-content: center;
            align-items: center;
        }

        &:hover {
            ${(props) =>
                !props.isClicked &&
                css`
                    span {
                        transform: rotate(90deg);
                    }
                `}
        }
    }

    .btn-right {
        background: none;
        padding: 0;
        border: none;
        margin: 0;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        box-sizing: border-box;
        width: 51px;
        height: 100%;
        padding: 8px 0;
        border-left: ${(props) => (props.isClicked ? "#f6f6f6" : "#e71252")};
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        cursor: pointer;

        svg {
            width: 24px;
            height: 24px;
            transition: 300ms ease;
        }

        &:hover {
            svg {
                transform: translateY(4px);
            }
        }
    }

    @media only screen and (min-width: 719px) {
        width: 213px;
    }
    @media only screen and (min-width: 1023px) {
        width: 254px;
    }
`;

const IconSelector = styled.span`
    display: inline-block;
    background: ${(props) =>
        props.status === "wish"
            ? "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGMkY2RSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjgzNCAyNi4xOTFjMCAuNzg4LjY0NiAxLjMzNiAxLjMzOCAxLjMzNi4yNiAwIC41MjctLjA3OC43NjgtLjI1TDE2IDIxLjUzOGw4LjA2IDUuNzRjLjI0Mi4xNzEuNTA4LjI1Ljc2OS4yNS42OTIgMCAxLjMzOC0uNTQ5IDEuMzM4LTEuMzM3VjguNjNhLjUuNSAwIDAgMC0uNS0uNUg2LjMzNGEuNS41IDAgMCAwLS41LjV2MTcuNTYyek0yNi4xNjcgNC4yOTRjMC0uNzM2LS41OTctMS4zMzMtMS4zMzMtMS4zMzNINy4xNjdjLS43MzYgMC0xLjMzMy41OTYtMS4zMzMgMS4zMzNWNi4xM2EuNS41IDAgMCAwIC41LjVoMTkuMzMzYS41LjUgMCAwIDAgLjUtLjVWNC4yOTR6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) center center / contain no-repeat"
            : props.status === "watching"
            ? "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAxMi43NUEzLjI1NCAzLjI1NCAwIDAgMCAxMi43NSAxNmEuNzUuNzUgMCAwIDEtMS41IDBBNC43NTYgNC43NTYgMCAwIDEgMTYgMTEuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtMi42NjdBNS45MjQgNS45MjQgMCAwIDAgMTAuMDgzIDE2IDUuOTI0IDUuOTI0IDAgMCAwIDE2IDIxLjkxNyA1LjkyNCA1LjkyNCAwIDAgMCAyMS45MTYgMTYgNS45MjQgNS45MjQgMCAwIDAgMTYgMTAuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAyMy40MTZjLTQuMDkgMC03LjQxNy0zLjMyNy03LjQxNy03LjQxNyAwLTQuMDg5IDMuMzI3LTcuNDE2IDcuNDE3LTcuNDE2UzIzLjQxNiAxMS45MSAyMy40MTYgMTZjMCA0LjA5LTMuMzI3IDcuNDE3LTcuNDE2IDcuNDE3bTE1LjA2LTguNjU0QzI4LjM0IDguOTg0IDIyLjYyMSA1IDE2IDUgOS4zNzggNSAzLjY2MSA4Ljk4NC45NCAxNC43NjJhMi45MzQgMi45MzQgMCAwIDAgMCAyLjQ3NUMzLjY2MSAyMy4wMTUgOS4zNzggMjcgMTYgMjdjNi42MjEgMCAxMi4zNC0zLjk4NCAxNS4wNi05Ljc2MmEyLjkzNCAyLjkzNCAwIDAgMCAwLTIuNDc1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) center center / contain no-repeat"
            : "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NjMwMjYxNEEtQzhBMy00MkMwLTlDQzctQTBEQzNDOEM1NTVDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJJY29ucy0mYW1wOy1Bc3NldHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uLS8tSWNBZGRXaGl0ZSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMyIgeD0iMTEiIHk9IjQuNSIgd2lkdGg9IjIiIGhlaWdodD0iMTUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMy1Db3B5IiB4PSI0LjUiIHk9IjExIiB3aWR0aD0iMTUiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) no-repeat center"};

    background-size: contain;
    width: 24px;
    height: 24px;
    margin: 0 6px 0 0;
    -webkit-transition: 300ms;
    transition: 300ms;
`;
