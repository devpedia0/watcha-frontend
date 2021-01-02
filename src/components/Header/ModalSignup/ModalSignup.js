import React, { useState } from "react";
import styled from "styled-components";
import history from "../../../history";
import useInputs from "../../../Hooks/useInputs";
import AuthService from "../../../services/auth.service";
import SelectForm from "./SelectForm/SelectForm";

import ReactFacebookLogin from "../../../services/ReactFacebookLogin";

const initialValue = {
    name: "",
    email: "",
    password: "",
    countryCode: "KR",
};

export default function ModalSignup({ onChangeModal }) {
    const [lanVisible, setLanVisible] = useState(true);
    const { inputs, errors, setErrors, onChange } = useInputs(initialValue);

    const languageModal = () => {
        setLanVisible({ lanVisible: !lanVisible });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email" && !errors["email"]) {
            AuthService.checkEmail(value).then((response) => {
                if (response.data.exist === true) {
                    setErrors({ email: "이미 가입된 이메일입니다." });
                }
            });
        }
        onChange(e);
    };

    const handleClickSumit = (e) => {
        e.preventDefault();

        if (
            (inputs.countryCode.length === 2,
            inputs.email.includes("@") && inputs.password.length > 3,
            inputs.name.length > 1)
        ) {
            AuthService.register(
                inputs.countryCode,
                inputs.name,
                inputs.email,
                inputs.password
            ).then(
                (response) => {
                    console.log("registerResponse", response);
                    history.push("/user");
                    onChangeModal("");
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    };

    return (
        <BackScreen>
            <Modal>
                <Background onClick={() => onChangeModal("")} />
                <SignUpForm>
                    <SignUpFormInner>
                        <Header>
                            <Logo />
                        </Header>
                        <H2>회원가입</H2>

                        <Content>
                            <Form>
                                <div className="area">
                                    <NameIdPw
                                        className={
                                            errors["name"]
                                                ? "labelWrong"
                                                : "label"
                                        }
                                    >
                                        <input
                                            onChange={handleChange}
                                            value={inputs.name}
                                            name="name"
                                            label="이름"
                                            placeholder="이름"
                                            autoComplete="off"
                                            type="text"
                                            className={
                                                inputs.name ? "check" : "none"
                                            }
                                        />

                                        <div className="checkIcon" />
                                    </NameIdPw>
                                </div>
                                <div className="area">
                                    <NameIdPw
                                        className={
                                            errors["email"]
                                                ? "labelWrong"
                                                : "label"
                                        }
                                    >
                                        <input
                                            value={inputs.email}
                                            onChange={handleChange}
                                            name="email"
                                            label="이메일"
                                            placeholder="이메일"
                                            autoComplete="off"
                                            type="email"
                                            className={
                                                inputs.email ? "check" : "none"
                                            }
                                        />

                                        <div className="checkIcon" />
                                    </NameIdPw>
                                    <div
                                        style={{
                                            color: "red",
                                            fontSize: 12,
                                        }}
                                    >
                                        {errors["email"]}
                                    </div>
                                </div>
                                <div className="area">
                                    <NameIdPw
                                        className={
                                            errors["password"]
                                                ? "labelWrong"
                                                : "label"
                                        }
                                    >
                                        <input
                                            value={inputs.password}
                                            onChange={handleChange}
                                            name="password"
                                            label="비밀번호"
                                            placeholder="비밀번호"
                                            autoComplete="off"
                                            type="password"
                                            className={
                                                inputs.password
                                                    ? "check"
                                                    : "none"
                                            }
                                        />

                                        <div className="checkIcon" />
                                    </NameIdPw>
                                    <div
                                        style={{
                                            color: "red",
                                            fontSize: 12,
                                        }}
                                    >
                                        {errors["password"]}
                                    </div>
                                </div>

                                <Language
                                    type="button"
                                    onClick={() => setLanVisible(!lanVisible)}
                                >
                                    <CountryIcon />
                                    한국어 (대한민국)
                                    <LanguageCode
                                        id="sign_up_languageCode"
                                        name="languageCode"
                                        type="hidden"
                                        label=""
                                        placeholder=""
                                        value="ko"
                                    />
                                    <CountryCode
                                        id="sign_up_countryCode"
                                        name="countryCode"
                                        type="hidden"
                                        label=""
                                        placeholder=""
                                        value="KR"
                                    />
                                    <ArrowIcon />
                                </Language>

                                <SignUpBtn
                                    type="button"
                                    onClick={handleClickSumit}
                                >
                                    회원가입
                                </SignUpBtn>
                            </Form>
                            <AlReady>
                                이미 가입하셨나요?
                                <Btn onClick={() => onChangeModal("login")}>
                                    로그인
                                </Btn>
                            </AlReady>
                            <Hr />
                            <Facebook>
                                <ReactFacebookLogin />
                            </Facebook>
                        </Content>
                    </SignUpFormInner>
                </SignUpForm>

                {!lanVisible && (
                    <SelectForm
                        languageModal={languageModal}
                        switchModal={lanVisible}
                    />
                )}
            </Modal>
        </BackScreen>
    );
}

const BackScreen = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 50;
    background: rgba(0, 0, 0, 0.56);
    overflow: hidden scroll;
    &.hideSignUp {
        display: none;
    }
`;

const Modal = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    @media (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
        ::after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            height: 100%;
            margin-left: -0.25em;
        }
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 50;
    @media (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
        ::after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            height: 100%;
            margin-left: -0.25em;
        }
    }
`;

const SignUpForm = styled.div`
    display: relative;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    overflow: hidden;
    z-index: 100;
    @media (min-width: 719px) {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        text-align: left;
        width: 375px;
        height: auto;
        min-height: 540px;
        border-radius: 6px;
        overflow: auto;
    }
`;

const SignUpFormInner = styled.div`
    padding: 32px 0px 48px;
`;

const Header = styled.header`
    text-align: center;
    margin: 0px 0px 14px;
    overflow: hidden;
`;

const Logo = styled.span`
    display: inline-block;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAxMTYgNzAiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwSDExMFY3MEgweiIvPgogICAgICAgIDxnIGZpbGw9IiNGRjA1NTgiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAwLjU3NSA5LjczOWwtMS43MjYgMjQuMzE1IDQuMzctLjQ2LjEzOS00LjkzNiAxLjU1NS0uMTMzLjI3NSA0Ljg2NCAzLjg1NS0uNDA1LTEuOTctMjMuMjQ1aC02LjQ5OHptMy4xNjIgNS41NGguNDI4bC41MyA5LjM4NC0xLjIyNi4wNzYuMjY4LTkuNDZ6TTMxLjY5MyAwTDI5LjY1OSAyOS41ODEgMjkuMTQ5IDI5LjYwOSAyNC44NDEgOS43MzkgMTcuOTg5IDkuNzM5IDE0Ljc2MiAzMC41NiAxNC4wNzYgMzAuNTk5IDEwLjk2NSA5LjczOSAwIDkuNzM5IDYuNTk2IDQzLjc1IDE4LjkzIDQyLjQ1NCAyMS4zNzggMjMuMjQ4IDIyLjA2MyAyMy4yMTIgMjUuMzU1IDQxLjc3OSAzNS40NjIgNDAuNzE2IDQyLjIzIDB6TTYxLjY3NCAzNy45NjFMNjcuODQxIDM3LjMxMyA2Ny44NDEgMTYuNjk1IDcxLjM1MyAxNi42MDMgNzEuMzUzIDkuNzM5IDU3LjQ3NyA5LjczOSA1Ny40NzcgMTYuOTY3IDYxLjY3NCAxNi44NTZ6TTc4LjY3IDM2LjQ2NGM0LjAyMy0uNDUgNi4xNDQtMi42OTUgNi4xNDQtNi4wNDZ2LTUuNDY3bC01LjIwMi4zMXY3LjA3bC0xLjcxMy4xNDNWMTQuODI1bDEuNzEzLS4wMjV2NC44MDhsNS4xMTYtLjE5NXYtNC43MDhjMC0zLjEzOC0yLjExOC01LjMzNS01Ljk3Mi01LjMzNS00LjExMiAwLTYuNDk5IDIuMTk3LTYuNDk5IDUuNTQ4VjMxLjc4YzAgMy40OTMgMS45NTkgNS4xODMgNi40MTMgNC42ODRNOTEuMzEyIDI0LjU1OEw5My4xMSAyNC40NDggOTMuMTEgMzQuNjU3IDk3LjY1IDM0LjE4IDk3LjY1IDkuNzM5IDkzLjExIDkuNzM5IDkzLjExIDE5LjY5IDkxLjMxMiAxOS43NjYgOTEuMzEyIDkuNzM5IDg2LjI3IDkuNzM5IDg2LjI3IDM1LjM2OCA5MS4zMTIgMzQuODQ2ek04MC40NiA2OS43MDZMODcuMTgzIDY5LjcwNiA4Ny4xODMgNDAuMTczIDgwLjQ2IDQwLjkyNnpNNzIuNTQzIDY0LjUyMWwtMS45OTUuMDQydi0xNy4wOGwxLjk5NS0uMTQ2VjY0LjUyem0tLjY5NC0yMi43NmwtNy4yNC43NjF2MjcuMTg0aDUuNzMzYzYuNDIgMCA4LjU0LTMuMDIzIDguNTQtOC45MDJ2LTEwLjk4YzAtNS40NTYtMS40NzYtOC42NDctNy4wMzMtOC4wNjN6TTk2LjgxMiA1Ny4zOTdsLjcwNy0xMS40MDQgMS4yMzUtLjA3NiAxLjA5MyAxMS4zNTItMy4wMzUuMTI4em0tNC40MzgtMTcuNzYybC0zLjYxIDMwLjA3MWg3LjI4NGwuMzgtNi4xMjcgNC4wMTctLjEuNiA2LjIyN2g3Ljk3M2wtNC45ODYtMzEuMzI5LTExLjY1OCAxLjI1OHpNNDcuNjg4IDI4LjRsMS4wNTYtMTEuNzEuOTQyLS4wMTMgMS4xMDMgMTEuNTItMy4xLjIwM3pNNTQuNjUgOS43MzlINDMuNjg2bC01LjA1NCAzMC42NDMgOC4wNTItLjg0NS40OTUtNS40OTIgNC4xMzYtLjM2MS41MDggNS4zMTMgNy4xOTYtLjc1N0w1NC42NSA5Ljc0ek01OC4zMTggNTguODZMNjIuMzcxIDU4LjY4OCA2Mi4zNzEgNTMuNzYzIDU4LjMxOCA1My45OTEgNTguMzE4IDQ5LjAwOCA2Mi44MzkgNDguNjU3IDYyLjgzOSA0Mi43MDggNTIuNjc5IDQzLjc3NiA1Mi42NzkgNjkuNzA2IDYzLjIyNCA2OS43MDYgNjMuMjI0IDY0LjI2NiA1OC4zMTggNjQuMzU0ek00Ni4yODUgNTYuMzc1bC0xLjY0OC4wODZ2LTcuMTU0bDEuNjQ4LS4xMzZ2Ny4yMDR6bS4yMS0xMS45NDlsLTcuMzI0Ljc3djI0LjUxaDUuNDY2di05LjMxNWwyLjE4LS4wODRjMy4zMDQtLjEyNiA0LjUzMy0yLjM2OSA0LjUzMy01LjYwNnYtNC43MzdjMC00LjI3LTEuOTExLTUuODQ4LTQuODU1LTUuNTM4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjA5NCkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=")
        center center / contain no-repeat;
    width: 116px;
    height: 70px;
`;

const H2 = styled.h2`
    font-size: 17px;
    letter-spacing: -0.5px;
    line-height: 22px;
    font-weight: 700;
    text-align: center;
    margin: 24px 0px 20px;
`;

const Content = styled.div`
    margin: 0px 20px;
`;

const Form = styled.form`
    .area {
        padding: 4px 0px;
        overflow: hidden;
    }
`;

const NameIdPw = styled.label`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0px 12px;
    border-radius: 6px;
    background: rgb(245, 245, 245);
    cursor: default;
    flex: 1 1 0%;
    input {
        text-align: left;
        background: transparent;
        font-weight: 400;
        letter-spacing: -0.7px;
        font-size: 16px;
        line-height: 21px;
        width: 100%;
        padding: 0px;
        border: 0px;
        overflow: hidden;
        caret-color: rgb(255, 47, 110);
    }
    &.label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 44px;
        padding: 0px 12px;
        border-radius: 6px;
        background: rgb(245, 245, 245);
        &.check {
            width: 80%;
            line-height: 21px;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.7px;
            caret-color: #ff2f6e;
            background: transparent;
            border: none;
            &::placeholder {
                color: rgb(160, 160, 160);
                letter-spacing: -0.7px;
            }
            &:focus {
                outline: none;
                & ~ .checkIcon {
                    position: absolute;
                    top: 7px;
                    right: 12px;
                    width: 32px;
                    height: 32px;
                    background-size: 23px;
                    background-repeat: no-repeat;
                    background-position: 100% 50%;
                    filter: grayscale(0);
                    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjQTBBMEEwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0EwQTBBMCIgZD0iTTkuMzkgMTIuODM5bDUuNjU2LTUuNjU3YTEgMSAwIDEgMSAxLjQxNCAxLjQxNGwtNi4zNjQgNi4zNjRhLjk5Ny45OTcgMCAwIDEtMS40MTQgMGwtMi44MjgtMi44MjhhMSAxIDAgMSAxIDEuNDE0LTEuNDE0bDIuMTIxIDIuMTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=")
                        center center / cover no-repeat;
                    filter: grayscale(0);
                }
            }
        }
    }
    &.labelWrong {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 44px;
        padding: 0px 12px;
        border-radius: 6px;
        background: rgb(255, 240, 240);
        border: 1px solid rgb(245, 0, 0);
        &.check {
            width: 80%;
            line-height: 21px;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.7px;
            caret-color: #ff2f6e;
            background: transparent;
            border: none;
            &::placeholder {
                color: rgb(160, 160, 160);
            }
            &:focus {
                outline: none;
                & ~ .checkIcon {
                    position: absolute;
                    top: 7px;
                    right: 12px;
                    width: 32px;
                    height: 32px;
                    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjRjUwMDAwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y1MDAwMCIgZD0iTTExIDE0YTEuNSAxLjUgMCAxIDEgMCAzIDEuNSAxLjUgMCAwIDEgMC0zem0wLTlhMS41IDEuNSAwIDAgMSAxLjUgMS41VjExYTEuNSAxLjUgMCAwIDEtMyAwVjYuNUExLjUgMS41IDAgMCAxIDExIDV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=")
                        center center / cover no-repeat;
                    background-size: 23px;
                    background-repeat: no-repeat;
                    background-position: 100% 50%;
                    filter: grayscale(0);
                }
            }
        }
    }
`;

const Language = styled.button`
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    display: flex;
    align-items: center;
    color: rgb(74, 74, 74);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    text-decoration: underline;
    cursor: pointer;
`;

const CountryIcon = styled.span`
    display: inline-block;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0xOC4xOTIgMTIuNDc3Yy0uMTA0IDMuNzY5LTEuNDU4IDcuMi0zLjU2MiA5LjE4OEExMC4wMTcgMTAuMDE3IDAgMCAwIDIyIDEyLjQ3N2gtMy44MDh6bS01LjcxNSAwVjIyaC4wNDVjMi41NTctMS4yOTUgNC41OC01LjExNiA0LjcxNi05LjUyM2gtNC43NjF6bS01LjcxNiAwYy4xMzcgNC40MDcgMi4xNiA4LjIyOCA0LjcxNyA5LjUyM2guMDQ1di05LjUyM0g2Ljc2MXptLTQuNzYxIDBhMTAuMDE3IDEwLjAxNyAwIDAgMCA3LjM3IDkuMTg4Yy0yLjEwNC0xLjk4OC0zLjQ1OC01LjQyLTMuNTYyLTkuMTg4SDJ6TTE0LjYzIDIuMzM2YzIuMTAyIDEuOTg4IDMuNDU2IDUuNDIyIDMuNTYyIDkuMTg3SDIyYTEwLjAxNyAxMC4wMTcgMCAwIDAtNy4zNy05LjE4N3ptLTUuMjYgMEExMC4wMTcgMTAuMDE3IDAgMCAwIDIgMTEuNTIzaDMuODA4Yy4xMDYtMy43NjUgMS40Ni03LjE5OSAzLjU2Mi05LjE4N3pNMTIuNDc3IDJ2OS41MjNoNC43NjFDMTcuMSA3LjExNCAxNS4wNzQgMy4yOTEgMTIuNTE0IDJoLS4wMzd6bS0uOTkxIDBDOC45MjYgMy4yOSA2LjkgNy4xMTQgNi43NiAxMS41MjNoNC43NjJWMmgtLjAzN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg==")
        center center / contain no-repeat;
    width: 24px;
    height: 24px;
    margin: 0px 12px 0px 0px;
`;

const LanguageCode = styled.input`
    font-size: 100%;
    line-height: normal;
    overflow: visible;
`;
const CountryCode = styled.input`
    font-size: 100%;
    line-height: normal;
    overflow: visible;
`;

const ArrowIcon = styled.span`
    display: inline-block;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=")
        center center / contain no-repeat;
    width: 24px;
    height: 24px;
    margin: 0px 0px 0px 6px;
`;

const SignUpBtn = styled.button`
    padding: 0px;
    border: none;
    cursor: pointer;
    background: rgb(255, 47, 110);
    color: rgb(255, 255, 255);
    text-align: center;
    width: 100%;
    height: 44px;
    border-radius: 6px;
    margin: 16px 0px 0px;
    font-size: 100%;
`;

const AlReady = styled.div`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    text-align: center;
    color: rgb(140, 140, 140);
    margin: 20px 0px 0px;
`;

const Btn = styled.button`
    background: none;
    padding: 0px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: rgb(255, 47, 110);
    font-size: 100%;
    line-height: normal;
`;

const Hr = styled.hr`
    position: relative;
    color: black;
    text-align: center;
    height: 1.5em;
    border: 0px;
    outline: 0px;
    margin: 24px 0px;
    box-sizing: content-box;
    overflow: visible;
    display: block;
    ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0px;
        width: 100%;
        border-top: 1px solid rgb(216, 216, 216);
    }
    ::after {
        content: "OR";
        display: inline-block;
        position: relative;
        background-color: rgb(255, 255, 255);
        color: rgb(160, 160, 160);
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 19px;
        vertical-align: middle;
        padding: 0px 14px;
    }
`;

const Facebook = styled.div`
    color: rgb(250, 250, 250);
    text-align: center;
    width: 100%;
    height: 44px;
    border-radius: 6px;
    position: relative;
    background: rgb(60, 90, 160);
    font-size: 100%;
    ::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 11px;
        left: 14px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjMzMiA4LjJoLTIuMDE2cy0xLjI4NC4wNzctMS4yODQgMS42NDR2Mi4wMDhoMy4zbC0uNTUgMy4xMDdoLTIuNzV2OC4wNGgtMy4xMTR2LTguMDRoLTIuNzV2LTMuMTA3aDIuNzVWOS4xMTNzLS4xMDQtMy44MzQgMy44NDgtMy44MzRjMS44NDggMCAyLjU2Ni4xODQgMi41NjYuMTg0VjguMnptMC03LjJINC42NjhBMy42NjggMy42NjggMCAwIDAgMSA0LjY2NnYxNC42NjZBMy42NyAzLjY3IDAgMCAwIDQuNjY4IDIzaDE0LjY2NEEzLjY2OCAzLjY2OCAwIDAgMCAyMyAxOS4zMzJWNC42NjZBMy42NjYgMy42NjYgMCAwIDAgMTkuMzMyIDF6Ii8+Cjwvc3ZnPgo=")
            center center no-repeat;
        width: 22px;
        height: 22px;
    }
`;
