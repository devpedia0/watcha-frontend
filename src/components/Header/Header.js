import React from "react";
import styled from "styled-components";
import ModalSignup from "./ModalSignup/ModalSignup";
import ModalLogin from "./ModalLogin/ModalLogin";
import Search from "./Search/Search";
import { useSelector, useDispatch } from "react-redux";
import modalActions from "../../redux/actions/modalActions";
import { Svg } from "..";

const Header = ({ className }) => {
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
                    <Link onClick={() => (window.location = "/")}>
                        <Svg
                            type="headerLogo"
                            w="151px"
                            h="37px"
                            color="#FF0558"
                        />
                    </Link>
                </LiLogo>
                <LiCtg>
                    <Link
                        activeClassName="active"
                        onClick={() => (window.location = "/")}
                    >
                        영화
                    </Link>
                </LiCtg>
                <LiCtg>
                    <Link
                        activeClassName="active"
                        onClick={() => (window.location = "/tv_shows")}
                    >
                        TV 프로그램
                    </Link>
                </LiCtg>
                <LiCtg>
                    <Link
                        activeClassName="active"
                        onClick={() => (window.location = "/books")}
                    >
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
                                (window.location.href = `/users/${userId}`)
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
};

export default Header;

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
    display: flex;

    @media only screen and (min-width: 739px) {
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
    display: none;
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
    @media only screen and (min-width: 800px) {
        display: flex;
    }
`;

const Link = styled.div`
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    cursor: pointer;
    color: rgb(165, 165, 170);
    font-size: 27px;
    font-weight: bold;
    letter-spacing: -0.3px;
    &.${(props) => props.activeClassName} {
        color: rgb(53, 53, 53);
    }
    @media only screen and (min-width: 737px) {
        color: rgb(126, 126, 126);
        font-size: 15px;
    }
`;
