import React from "react";
import styled from "styled-components";
import useInputs from "../../../Hooks/useInputs";
import { useDispatch } from "react-redux";
import authActions from "../../../redux/actions/authActions";
import Facebook from "../../Common/Facebook";
import { ModalWrapper } from "../..";

const initialValue = {
    name: "",
    email: "",
    password: "",
};

const Login = ({ onChangeModal }) => {
    const dispatch = useDispatch();
    const { inputs, errors, onChange } = useInputs(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (errors["email"] || errors["password"]) return;

        dispatch(authActions.login(inputs));
        onChangeModal("");
    };

    return (
        <ModalWrapper full width="375px" onCloseModal={() => onChangeModal("")}>
            <LoginFormInner>
                <Header>
                    <Logo />
                </Header>
                <H2>로그인</H2>
                <div>
                    <div>
                        <Content>
                            <form onSubmit={handleSubmit}>
                                <Area>
                                    <IdPw
                                        className={
                                            errors["email"]
                                                ? "labelWrong"
                                                : "label"
                                        }
                                    >
                                        <input
                                            type="text"
                                            name="email"
                                            value={inputs.email}
                                            onChange={onChange}
                                            label="이메일"
                                            placeholder="이메일"
                                            autoComplete="off"
                                            className={
                                                inputs.email ? "check" : "none"
                                            }
                                        />
                                        <div className="delBtn">
                                            <span className="delIcon" />
                                        </div>

                                        <div className="checkIcon" />
                                    </IdPw>
                                    <div
                                        style={{
                                            color: "red",
                                            fontSize: 12,
                                        }}
                                    >
                                        {errors["email"]}
                                    </div>
                                </Area>
                                <Area>
                                    <IdPw
                                        className={
                                            errors["password"]
                                                ? "labelWrong"
                                                : "label"
                                        }
                                    >
                                        <input
                                            value={inputs.password}
                                            onChange={onChange}
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
                                    </IdPw>
                                    <div
                                        style={{
                                            color: "red",
                                            fontSize: 12,
                                        }}
                                    >
                                        {errors["password"]}
                                    </div>
                                </Area>
                                <LoginBtn onClick={handleSubmit}>
                                    로그인
                                </LoginBtn>
                            </form>

                            <Find>
                                <Btn>비밀번호를 잊어버리셨나요?</Btn>
                            </Find>

                            <Register>
                                계정이 없으신가요?
                                <Btn onClick={() => onChangeModal("signup")}>
                                    회원가입
                                </Btn>
                            </Register>
                            <Hr />

                            <FacebookWrapper>
                                <Facebook />
                            </FacebookWrapper>
                        </Content>
                    </div>
                </div>
            </LoginFormInner>
        </ModalWrapper>
    );
};

export default Login;

const LoginFormInner = styled.div`
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
    margin: 24px 0px 24px;
`;

const Content = styled.div`
    margin: 0px 20px;
`;

const Area = styled.div`
    padding: 4px 0px;
`;

const IdPw = styled.label`
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
    width: 335px;
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
    &.delBtn {
        display: inline-flex;
        align-items: center;
        width: 24px;
        height: 100%;
        &.delIcon {
            display: inline-block;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjIwOCAxMS40TDkuMzggOC41N2wtLjgwOS44MDkgMi44MjkgMi44MjgtMi44MjkgMi44MjguODA5LjgwOSAyLjgyOC0yLjgyOSAyLjgyOCAyLjgyOS44MDktLjgwOS0yLjgyOS0yLjgyOCAyLjgyOS0yLjgyOC0uODA5LS44MDktMi44MjggMi44Mjl6TTEyIDIwYTggOCAwIDEgMSAwLTE2IDggOCAwIDAgMSAwIDE2eiIvPgo8L3N2Zz4K")
                center center / cover no-repeat;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }
`;

const LoginBtn = styled.button`
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

const Find = styled.div`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    text-align: center;
    margin: 20px 0px 14px;
`;

const Btn = styled.button`
    background: none;
    padding: 0px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: rgb(255, 47, 110);
    font-size: 100%;
`;

const Register = styled.div`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    color: rgb(140, 140, 140);
    text-align: center;
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

const FacebookWrapper = styled.div`
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
