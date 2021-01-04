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
    background: url(${(props) => props.theme.svg.watchaLogo}) center center /
        contain no-repeat;
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
                    background: url(${(props) => props.theme.svg.inputCheck})
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
                    background: url(${(props) => props.theme.svg.inputWarning})
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
    background: url(${(props) => props.theme.svg.countryIcon}) center center /
        contain no-repeat;
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
    background: url(${(props) => props.theme.svg.downArrow}) center center /
        contain no-repeat;
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
        background: url(${(props) => props.theme.svg.facebookLogo}) center
            center no-repeat;
        width: 22px;
        height: 22px;
    }
`;
