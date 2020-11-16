import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Login from "../pages/LoginSignUp/Login";
import SignUp from "../pages/LoginSignUp/SignUp";

const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 51;
    background-color: rgb(255, 255, 255);
    text-align: center;
    width: 100%;
    height: 71px;
    transition: all 700ms ease 0s;

    @media only screen and (min-width: 737px) {
        height: 62px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 0px 0px;
        transition: background-color 200ms ease 0s;
    }
`;

const Nav = styled.div`
    max-width: 1320px;
    margin-right: 20px;
    margin-left: 20px;
    display: flex;

    @media only screen and (min-width: 600px) {
        margin-right: 20px;
        margin-left: 20px;
    }
    @media only screen and (min-width: 760px) {
        margin: 0 3.5%;
        li:nth-child(1) {
            display: block;
        }
    }

    @media only screen and (min-width: 1100px) {
        margin: 0 60px;
    }

    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }
`;

const LiLogo = styled.li`
    display: none;
    margin: 13px 0px 0px;
    svg {
        width: 151px;
        height: 37px;
    }

    @media only screen and (min-width: 737px) {
        display: block;
    }
`;

const LiCtg = styled.li`
    padding-top: 27px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    margin: 0px 15px;

    :nth-child(4) {
        margin-right: 20px !important;
    }
    &.${(props) => props.activeClassName} {
        color: rgb(53, 53, 53);
    }

    @media only screen and (min-width: 737px) {
        padding-top: 0px;
        padding-bottom: 0px;
        height: 62px;
        margin: 0px 0px 0px 24px;
        flex-shrink: 0;
    }
`;

const LiSearch = styled.li`
    display: none;
    align-items: center;
    height: 62px;
    flex-shrink: 1;
    margin: 0px 0px 0px auto;
    transition: all 0.5s ease 0s;

    @media only screen and (min-width: 737px) {
        display: flex;
        width: 28px;
    }
    @media only screen and (min-width: 860px) {
        width: 300px;
    }
`;

const LiButton = styled.li`
    display: none;
    align-items: center;
    height: 62px;
    margin: 0px 0px 0px 24px;
    flex-shrink: 0;

    button {
        cursor: pointer;
        background: transparent;
        letter-spacing: -0.3px;
        margin: 15px 0px;

        &.signin {
            color: rgb(116, 116, 123);
            font-size: 14px;
            padding: 0px;
            border: 0px;
        }

        &.profileBtn {
            background: none;
            outline: none;
            cursor: pointer;
            img {
                width: 28px;
                height: 28px;
                border-radius: 50%;
            }
        }

        &.signup {
            text-align: center;
            border-radius: 6px;
            font-weight: 500;
            line-height: 20px;
            box-sizing: border-box;
            width: auto;
            min-width: 72px;
            height: 32px;
            color: rgb(53, 53, 53);
            font-size: 14px;
            padding: 5px 14px 6px;
            border: 1px solid rgba(116, 116, 123, 0.5);
        }
    }

    @media only screen and (min-width: 737px) {
        display: flex;
    }
    @media only screen and (min-width: 860px) {
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxwYXRoIGZpbGw9IiNCQUJBQzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODE0IDE1LjczNWMtMy4yMDcgMC01LjgxNy0yLjYzLTUuODE3LTUuODYxIDAtMy4yMzMgMi42MS01Ljg2MiA1LjgxNy01Ljg2MiAzLjIwNyAwIDUuODE4IDIuNjMgNS44MTggNS44NjJzLTIuNjEgNS44Ni01LjgxOCA1Ljg2bTkuODQxIDIuNTRsLTMuNjYtMy43MDRjLjk4LTEuMzEgMS41NzEtMi45MzIgMS41NzEtNC42OTYgMC00LjMwOC0zLjQ3OC03LjgxMi03Ljc1Mi03LjgxMi00LjI3NCAwLTcuNzUyIDMuNTA0LTcuNzUyIDcuODEyIDAgNC4zMDcgMy40NzggNy44MSA3Ljc1MiA3LjgxIDEuODI5IDAgMy41MDctLjY0NCA0LjgzNC0xLjcxNGwzLjYzNyAzLjY4Yy4xODIuMTg2LjQyNi4yODguNjg1LjI4OC4yNTcgMCAuNS0uMS42ODMtLjI4NC4xODItLjE4NC4yODQtLjQzLjI4NS0uNjkgMC0uMjYtLjEtLjUwNS0uMjgzLS42OSIvPgo8L3N2Zz4K)
        9px 8px no-repeat rgb(245, 245, 247);
    box-sizing: border-box;
    height: 38px;
    border-radius: 2px;
    background-color: transparent;
    padding-left: 30px;
    border: none;
    cursor: pointer;

    div {
        flex: 1 1 0%;
        height: 28px !important;
    }
    input {
        background: transparent;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 27px;
        width: 100%;
        padding: 0px 0px 1px;
        border: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        caret-color: rgb(53, 53, 53);
        font-family: Roboto, "Noto Sans KR", sans-serif;
    }
    @media only screen and (min-width: 860px) {
        margin: 12px 0;
        padding: 7px 10px 8px 36px;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbiAvIEljVGFiQmFyIC8gSWNTZWFyY2hBbmQ8L3RpdGxlPgogICAgPGcgaWQ9IlVJLS0t7ZmILS8t6rKA7IOJIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuNzYiPgogICAgICAgIDxnIGlkPSJfR2xvYmFsLS8tTmF2aWdhdGlvbkJhci0vLUl0ZW1zLS8tU2VhcmNoLS8tRW1wdHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMS4wMDAwMDAsIC0xMS4wMDAwMDApIiBmaWxsPSIjN0U3RTdFIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJJY29uLS8tSWNUYWJCYXItLy1JY1NlYXJjaEFuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMjk5ODQxNSwxMi44NzM5OTc5IEM1LjQwNjA4MTEyLDEyLjg3Mzk5NzkgMy4yNzA1NDg1OCwxMC43MjI4NDAzIDMuMjcwNTQ4NTgsOC4wNzg3NTkgQzMuMjcwNTQ4NTgsNS40MzM4ODAwNyA1LjQwNjA4MTEyLDMuMjgyNzIyNTEgOC4wMjk5ODQxNSwzLjI4MjcyMjUxIEMxMC42NTM4ODcyLDMuMjgyNzIyNTEgMTIuNzg5NDE5Nyw1LjQzMzg4MDA3IDEyLjc4OTQxOTcsOC4wNzg3NTkgQzEyLjc4OTQxOTcsMTAuNzIyODQwMyAxMC42NTM4ODcyLDEyLjg3Mzk5NzkgOC4wMjk5ODQxNSwxMi44NzM5OTc5IE0xNi4wODEzNjkzLDE0Ljk1MTc3NTIgTDEzLjA4NjI0MTMsMTEuOTIwODUyNCBDMTMuODg4ODQ3LDEwLjg0OTY2MDUgMTQuMzcyNDY4Myw5LjUyMTYzNzc2IDE0LjM3MjQ2ODMsOC4wNzg3NTkgQzE0LjM3MjQ2ODMsNC41NTQxMTQ4NiAxMS41MjY5Mzg1LDEuNjg3NSA4LjAyOTk4NDE1LDEuNjg3NSBDNC41MzMwMjk4MywxLjY4NzUgMS42ODc1LDQuNTU0MTE0ODYgMS42ODc1LDguMDc4NzU5IEMxLjY4NzUsMTEuNjAyNjA1NSA0LjUzMzAyOTgzLDE0LjQ2OTIyMDQgOC4wMjk5ODQxNSwxNC40NjkyMjA0IEM5LjUyNTk2NTA2LDE0LjQ2OTIyMDQgMTAuODk5MjU5NywxMy45NDE5OTkzIDExLjk4NDQzOTUsMTMuMDY2MjIyMiBMMTQuOTYwNTcwOSwxNi4wNzgwMDIzIEMxNS4xMDkzNzc0LDE2LjIyOTU0ODQgMTUuMzA4ODQxNSwxNi4zMTI1IDE1LjUyMDk3MDEsMTYuMzEyNSBDMTUuNzMxNTE1NSwxNi4zMTI1IDE1LjkyOTM5NjYsMTYuMjMwMzQ2IDE2LjA3OTc4NjIsMTYuMDgwMzk1MSBDMTYuMjI4NTkyOCwxNS45Mjk2NDY2IDE2LjMxMTcwMjgsMTUuNzI5NDQ2MiAxNi4zMTI1LDE1LjUxNjQ4NCBDMTYuMzEzMjg1OSwxNS4zMDM1MjE4IDE2LjIzMDk2NzMsMTUuMTAyNTIzNyAxNi4wODEzNjkzLDE0Ljk1MTc3NTIiIGlkPSJGaWxsLTEiIGZpbGw9IiNCQUJBQzMiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)
            10px 10px no-repeat rgb(245, 245, 247);
    }
`;

const Link = styled(NavLink)`
    padding: 0px;
    margin: 0px;
    color: rgb(165, 165, 170);
    font-size: 27px;

    letter-spacing: -0.3px;

    &.${(props) => props.activeClassName} {
        color: rgb(53, 53, 53);
    }

    @media only screen and (min-width: 737px) {
        color: rgb(126, 126, 126);
        font-size: 15px;
    }
`;

// const [state, setState] = useState(initialState);

const Header = (props) => {
    const [loginVisible, setLoginVisible] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(true);

    const [profileImg, setProfileImg] = useState("");

    const loginModal = () => {
        setLoginVisible({ loginVisible: !loginVisible });
    };

    const signUpModal = () => {
        setSignUpVisible({ signUpVisible: !signUpVisible });
    };

    return (
        <Wrapper>
            <Nav>
                <LiLogo className="navLogo">
                    <Link to="/">
                        <svg
                            fill="#FF0558"
                            viewBox="0 0 151 37"
                            className="css-1hftpa0-IcTopNavLogoSvg eqb3akh0"
                        >
                            <g fill="none" fillRule="evenodd">
                                <path d="M0 0H151V37H0z"></path>
                                <g fill="#FF0558" fillRule="nonzero">
                                    <path d="M36.036 8.028l-4.176 25.2 6.624-.684.396-4.536 3.42-.288.432 4.356 5.904-.612-3.6-23.436h-9zm3.276 15.336l.864-9.648h.792l.9 9.468-2.556.18zM76.68 16.2L75.204 16.272 75.204 8.028 71.064 8.028 71.064 29.088 75.204 28.656 75.204 20.196 76.68 20.124 76.68 28.512 80.424 28.116 80.424 8.028 76.68 8.028zM26.172 0L24.48 24.336 24.084 24.372 20.52 8.028 14.868 8.028 12.24 25.164 11.664 25.164 9.108 8.028.072 8.028 5.508 36 15.66 34.92 17.676 19.116 18.252 19.116 20.952 34.38 29.268 33.516 34.812 0zM47.376 13.968L50.832 13.86 50.832 31.248 55.908 30.708 55.908 13.752 58.788 13.644 58.788 8.028 47.376 8.028zM65.592 26.604l-1.404.108V12.204l1.404-.036v3.96l4.212-.144v-3.888c0-2.592-1.728-4.392-4.932-4.392-3.384 0-5.364 1.8-5.364 4.572v13.86c0 2.88 1.62 4.248 5.292 3.852 3.312-.36 5.04-2.232 5.04-4.968v-4.5l-4.284.252v5.832h.036zM134.172 28.8L138.492 28.332 138.492 8.028 134.172 8.028zM128.124 8.028h-7.164v22.176l6.552-.684c3.996-.432 5.148-2.592 5.148-5.508v-10.44c0-3.24-.9-5.544-4.536-5.544zm-.324 17.388l-1.8.144V12.096l1.836-.036v13.356h-.036zM146.988 27.432l3.78-.396-2.628-19.044h-6.12l-2.304 20.196 4.14-.432.324-3.96 2.448-.216.36 3.852zm-2.556-6.948l.612-7.596h.468l.756 7.488-1.836.108zM82.836 8.028l-1.404 20.016 3.6-.36.108-4.068 1.296-.108.216 3.996 3.168-.324L88.2 8.028h-5.364zm2.376 12.312l.216-7.776h.36l.432 7.704-1.008.072zM113.904 21.348L118.512 21.06 118.512 16.992 113.904 17.208 113.904 12.636 119.196 12.528 119.196 8.028 108.324 8.028 108.324 31.5 119.448 30.348 119.448 25.848 113.904 26.316zM101.772 8.028h-9.036v25.128l6.372-.684V23.22l2.916-.18c2.772-.18 4.86-2.16 4.86-5.004v-4.068c0-2.916-.072-5.94-5.112-5.94zm-.324 11.088l-2.376.108v-6.732l2.376-.036v6.66z"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </LiLogo>
                <LiCtg>
                    <Link to="/" activeClassName="active">
                        영화
                    </Link>
                </LiCtg>
                <LiCtg>
                    <Link to="/program" activeClassName="active">
                        TV 프로그램
                    </Link>
                </LiCtg>
                <LiCtg>
                    <Link to="/book" activeClassName="active">
                        책
                    </Link>
                </LiCtg>
                <LiSearch>
                    <Search>
                        <div>
                            <input
                                placeholder="작품 제목, 배우, 감독을 검색해보세요."
                                autoComplete="off"
                            />
                        </div>
                    </Search>
                </LiSearch>
                <LiButton>
                    <div>
                        {isLogin ? (
                            <button className="signin">평가하기</button>
                        ) : (
                            <button
                                className="signin"
                                onClick={() => setLoginVisible(!loginModal)}
                            >
                                로그인
                            </button>
                        )}
                    </div>
                </LiButton>
                <LiButton>
                    <div>
                        {isLogin ? (
                            <button className="profileBtn">
                                <img alt="" src={profileImg} />
                            </button>
                        ) : (
                            <button
                                className="signup"
                                onClick={() => setSignUpVisible(!signUpModal)}
                            >
                                회원가입
                            </button>
                        )}
                    </div>
                </LiButton>
            </Nav>
            <>
                <Login loginModal={loginModal} switchModal={loginVisible} />
                <SignUp signUpModal={signUpModal} switchModal={signUpVisible} />
            </>
        </Wrapper>
    );
};

export default Header;
