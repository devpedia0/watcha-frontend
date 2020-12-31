import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ModalSignup from "./ModalSignup/ModalSignup";
import ModalLogin from "./ModalLogin/ModalLogin";
import Search from "./Search/Search";
import { useSelector, useDispatch } from "react-redux";
import modalActions from "../../redux/actions/modalActions";

export default function Header({ className }) {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);
    const { userId } = useSelector((state) => state.auth);

    const handleChangeModal = (modal) => {
        dispatch(modalActions.setModal(modal));
    };

    return (
        <Wrapper className={className}>
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
                    <Link to="/tv_shows" activeClassName="active">
                        TV 프로그램
                    </Link>
                </LiCtg>
                <LiCtg>
                    <Link to="/books" activeClassName="active">
                        책
                    </Link>
                </LiCtg>

                <Search />

                {userId ? (
                    <>
                        <LiButton>
                            <div>
                                <button className="estimate">평가하기</button>
                            </div>
                        </LiButton>
                        <LiButton
                            onClick={() =>
                                (window.location.href = `/user/${userId}`)
                            }
                        >
                            <div>
                                <div className="profileBtn">
                                    <div className="profilePhotoImg" />
                                </div>
                            </div>
                        </LiButton>
                    </>
                ) : (
                    <>
                        <LiButton>
                            <button
                                className="signin"
                                onClick={() => handleChangeModal("login")}
                            >
                                로그인
                            </button>
                        </LiButton>
                        <LiButton>
                            <div>
                                <button
                                    className="signup"
                                    onClick={() => handleChangeModal("signup")}
                                >
                                    회원가입
                                </button>
                            </div>
                        </LiButton>
                    </>
                )}
            </Nav>
            {modal === "signup" && (
                <ModalSignup onChangeModal={handleChangeModal} />
            )}
            {modal === "login" && (
                <ModalLogin onChangeModal={handleChangeModal} />
            )}
        </Wrapper>
    );
}

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

const LiButton = styled.li`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 62px;
    margin: 0px 0px 0px 24px;
    flex-shrink: 0;
    .estimate {
        color: rgb(116, 116, 123);
        background: none;
        font-size: 14px;
        letter-spacing: -0.3px;
    }
    .profileBtn {
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 50%;
        display: flex;
        position: relative;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        overflow: hidden;
        width: 28px;
        height: 28px;
        cursor: pointer;
        .profilePhotoImg {
            position: relative;
            z-index: 1;
            background: url("https://d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg")
                center center / cover no-repeat;
            width: 100%;
            height: 100%;
        }
    }
    .signin {
        cursor: pointer;
        background: transparent;
        color: rgb(116, 116, 123);
        font-size: 14px;
        letter-spacing: -0.3px;
        padding: 0px;
        border: 0px;
        margin: 15px 0px;
    }
    .signup {
        cursor: pointer;
        text-align: center;
        border-radius: 6px;
        font-weight: 500;
        line-height: 20px;
        box-sizing: border-box;
        width: auto;
        min-width: 72px;
        height: 32px;
        background: transparent;
        color: rgb(53, 53, 53);
        font-size: 14px;
        letter-spacing: -0.3px;
        padding: 5px 14px 6px;
        border: 1px solid rgba(116, 116, 123, 0.5);
        margin: 15px 0px;
    }
    @media only screen and (min-width: 737px) {
        display: flex;
    }
    @media only screen and (min-width: 860px) {
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
