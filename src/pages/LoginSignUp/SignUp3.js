import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  display: block;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);
  overflow: hidden scroll;

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
  &.hideSignUp {
    position: fixed;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300vh;
  height: 300vh;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: -1;
`;
const Inner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 101;

  @media (min-width: 719px) {
    text-align: center;
    /* padding: 20px 0px; */
    overflow: auto;
  }

  ::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    margin-left: -0.25em;
  }
`;
const Page = styled.div`
  display: inline-block;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
  overflow: hidden;

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

const PageInner = styled.div`
  padding: 32px 0px 48px;
`;

const Header = styled.header`
  text-align: center;
  margin: 0px 0px 14px;
  overflow: hidden;
`;

const Logo = styled.span`
  display: inline-block;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAxMTYgNzAiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwSDExMFY3MEgweiIvPgogICAgICAgIDxnIGZpbGw9IiNGRjA1NTgiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAwLjU3NSA5LjczOWwtMS43MjYgMjQuMzE1IDQuMzctLjQ2LjEzOS00LjkzNiAxLjU1NS0uMTMzLjI3NSA0Ljg2NCAzLjg1NS0uNDA1LTEuOTctMjMuMjQ1aC02LjQ5OHptMy4xNjIgNS41NGguNDI4bC41MyA5LjM4NC0xLjIyNi4wNzYuMjY4LTkuNDZ6TTMxLjY5MyAwTDI5LjY1OSAyOS41ODEgMjkuMTQ5IDI5LjYwOSAyNC44NDEgOS43MzkgMTcuOTg5IDkuNzM5IDE0Ljc2MiAzMC41NiAxNC4wNzYgMzAuNTk5IDEwLjk2NSA5LjczOSAwIDkuNzM5IDYuNTk2IDQzLjc1IDE4LjkzIDQyLjQ1NCAyMS4zNzggMjMuMjQ4IDIyLjA2MyAyMy4yMTIgMjUuMzU1IDQxLjc3OSAzNS40NjIgNDAuNzE2IDQyLjIzIDB6TTYxLjY3NCAzNy45NjFMNjcuODQxIDM3LjMxMyA2Ny44NDEgMTYuNjk1IDcxLjM1MyAxNi42MDMgNzEuMzUzIDkuNzM5IDU3LjQ3NyA5LjczOSA1Ny40NzcgMTYuOTY3IDYxLjY3NCAxNi44NTZ6TTc4LjY3IDM2LjQ2NGM0LjAyMy0uNDUgNi4xNDQtMi42OTUgNi4xNDQtNi4wNDZ2LTUuNDY3bC01LjIwMi4zMXY3LjA3bC0xLjcxMy4xNDNWMTQuODI1bDEuNzEzLS4wMjV2NC44MDhsNS4xMTYtLjE5NXYtNC43MDhjMC0zLjEzOC0yLjExOC01LjMzNS01Ljk3Mi01LjMzNS00LjExMiAwLTYuNDk5IDIuMTk3LTYuNDk5IDUuNTQ4VjMxLjc4YzAgMy40OTMgMS45NTkgNS4xODMgNi40MTMgNC42ODRNOTEuMzEyIDI0LjU1OEw5My4xMSAyNC40NDggOTMuMTEgMzQuNjU3IDk3LjY1IDM0LjE4IDk3LjY1IDkuNzM5IDkzLjExIDkuNzM5IDkzLjExIDE5LjY5IDkxLjMxMiAxOS43NjYgOTEuMzEyIDkuNzM5IDg2LjI3IDkuNzM5IDg2LjI3IDM1LjM2OCA5MS4zMTIgMzQuODQ2ek04MC40NiA2OS43MDZMODcuMTgzIDY5LjcwNiA4Ny4xODMgNDAuMTczIDgwLjQ2IDQwLjkyNnpNNzIuNTQzIDY0LjUyMWwtMS45OTUuMDQydi0xNy4wOGwxLjk5NS0uMTQ2VjY0LjUyem0tLjY5NC0yMi43NmwtNy4yNC43NjF2MjcuMTg0aDUuNzMzYzYuNDIgMCA4LjU0LTMuMDIzIDguNTQtOC45MDJ2LTEwLjk4YzAtNS40NTYtMS40NzYtOC42NDctNy4wMzMtOC4wNjN6TTk2LjgxMiA1Ny4zOTdsLjcwNy0xMS40MDQgMS4yMzUtLjA3NiAxLjA5MyAxMS4zNTItMy4wMzUuMTI4em0tNC40MzgtMTcuNzYybC0zLjYxIDMwLjA3MWg3LjI4NGwuMzgtNi4xMjcgNC4wMTctLjEuNiA2LjIyN2g3Ljk3M2wtNC45ODYtMzEuMzI5LTExLjY1OCAxLjI1OHpNNDcuNjg4IDI4LjRsMS4wNTYtMTEuNzEuOTQyLS4wMTMgMS4xMDMgMTEuNTItMy4xLjIwM3pNNTQuNjUgOS43MzlINDMuNjg2bC01LjA1NCAzMC42NDMgOC4wNTItLjg0NS40OTUtNS40OTIgNC4xMzYtLjM2MS41MDggNS4zMTMgNy4xOTYtLjc1N0w1NC42NSA5Ljc0ek01OC4zMTggNTguODZMNjIuMzcxIDU4LjY4OCA2Mi4zNzEgNTMuNzYzIDU4LjMxOCA1My45OTEgNTguMzE4IDQ5LjAwOCA2Mi44MzkgNDguNjU3IDYyLjgzOSA0Mi43MDggNTIuNjc5IDQzLjc3NiA1Mi42NzkgNjkuNzA2IDYzLjIyNCA2OS43MDYgNjMuMjI0IDY0LjI2NiA1OC4zMTggNjQuMzU0ek00Ni4yODUgNTYuMzc1bC0xLjY0OC4wODZ2LTcuMTU0bDEuNjQ4LS4xMzZ2Ny4yMDR6bS4yMS0xMS45NDlsLTcuMzI0Ljc3djI0LjUxaDUuNDY2di05LjMxNWwyLjE4LS4wODRjMy4zMDQtLjEyNiA0LjUzMy0yLjM2OSA0LjUzMy01LjYwNnYtNC43MzdjMC00LjI3LTEuOTExLTUuODQ4LTQuODU1LTUuNTM4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjA5NCkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=')
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
const Area = styled.div`
  padding: 4px 0px;
  overflow: hidden;
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
`;

const Value = styled.div`
  display: flex;
  flex: 1 1 0%;
`;
const Input = styled.input`
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

  &.checked {
    width: 80%;
    font-size: 16px;
    letter-spacing: -0.7px;
    line-height: 21px;
    caret-color: rgb(255, 47, 110);
    background: transparent;
    border: none;
  }
`;
const DelBtn = styled.div`
  display: inline-flex;
  align-items: center;
  width: 24px;
  height: 100%;
`;
const DelIcon = styled.span`
  display: inline-block;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjIwOCAxMS40TDkuMzggOC41N2wtLjgwOS44MDkgMi44MjkgMi44MjgtMi44MjkgMi44MjguODA5LjgwOSAyLjgyOC0yLjgyOSAyLjgyOCAyLjgyOS44MDktLjgwOS0yLjgyOS0yLjgyOCAyLjgyOS0yLjgyOC0uODA5LS44MDktMi44MjggMi44Mjl6TTEyIDIwYTggOCAwIDEgMSAwLTE2IDggOCAwIDAgMSAwIDE2eiIvPgo8L3N2Zz4K')
    center center / cover no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Check = styled.span`
  display: inline-block;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjQTBBMEEwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0EwQTBBMCIgZD0iTTkuMzkgMTIuODM5bDUuNjU2LTUuNjU3YTEgMSAwIDEgMSAxLjQxNCAxLjQxNGwtNi4zNjQgNi4zNjRhLjk5Ny45OTcgMCAwIDEtMS40MTQgMGwtMi44MjgtMi44MjhhMSAxIDAgMSAxIDEuNDE0LTEuNDE0bDIuMTIxIDIuMTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=')
    center center / cover no-repeat;
  /* background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjMEZDM0I5Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzBGQzNCOSIgZD0iTTkuMzkgMTIuODM5bDUuNjU2LTUuNjU3YTEgMSAwIDEgMSAxLjQxNCAxLjQxNGwtNi4zNjQgNi4zNjRhLjk5Ny45OTcgMCAwIDEtMS40MTQgMGwtMi44MjgtMi44MjhhMSAxIDAgMSAxIDEuNDE0LTEuNDE0bDIuMTIxIDIuMTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=')
    center center / cover no-repeat;  체크 됐을 때  */
  /* background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjRjUwMDAwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y1MDAwMCIgZD0iTTExIDE0YTEuNSAxLjUgMCAxIDEgMCAzIDEuNSAxLjUgMCAwIDEgMC0zem0wLTlhMS41IDEuNSAwIDAgMSAxLjUgMS41VjExYTEuNSAxLjUgMCAwIDEtMyAwVjYuNUExLjUgMS41IDAgMCAxIDExIDV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=')
    center center / cover no-repeat;  조건에 안맞을 때 --> 정확하지 않은 이메일 입니다.*/
  width: 24px;
  height: 24px;
  margin: 0px 0px 0px 24px;
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
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0xOC4xOTIgMTIuNDc3Yy0uMTA0IDMuNzY5LTEuNDU4IDcuMi0zLjU2MiA5LjE4OEExMC4wMTcgMTAuMDE3IDAgMCAwIDIyIDEyLjQ3N2gtMy44MDh6bS01LjcxNSAwVjIyaC4wNDVjMi41NTctMS4yOTUgNC41OC01LjExNiA0LjcxNi05LjUyM2gtNC43NjF6bS01LjcxNiAwYy4xMzcgNC40MDcgMi4xNiA4LjIyOCA0LjcxNyA5LjUyM2guMDQ1di05LjUyM0g2Ljc2MXptLTQuNzYxIDBhMTAuMDE3IDEwLjAxNyAwIDAgMCA3LjM3IDkuMTg4Yy0yLjEwNC0xLjk4OC0zLjQ1OC01LjQyLTMuNTYyLTkuMTg4SDJ6TTE0LjYzIDIuMzM2YzIuMTAyIDEuOTg4IDMuNDU2IDUuNDIyIDMuNTYyIDkuMTg3SDIyYTEwLjAxNyAxMC4wMTcgMCAwIDAtNy4zNy05LjE4N3ptLTUuMjYgMEExMC4wMTcgMTAuMDE3IDAgMCAwIDIgMTEuNTIzaDMuODA4Yy4xMDYtMy43NjUgMS40Ni03LjE5OSAzLjU2Mi05LjE4N3pNMTIuNDc3IDJ2OS41MjNoNC43NjFDMTcuMSA3LjExNCAxNS4wNzQgMy4yOTEgMTIuNTE0IDJoLS4wMzd6bS0uOTkxIDBDOC45MjYgMy4yOSA2LjkgNy4xMTQgNi43NiAxMS41MjNoNC43NjJWMmgtLjAzN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg==')
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
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=')
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
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    border-top: 1px solid rgb(216, 216, 216);
  }

  ::after {
    content: 'OR';
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

const Facebook = styled.button`
  color: rgb(250, 250, 250);
  text-align: center;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  position: relative;
  background: rgb(60, 90, 160);
  font-size: 100%;

  ::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 11px;
    left: 14px;
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjMzMiA4LjJoLTIuMDE2cy0xLjI4NC4wNzctMS4yODQgMS42NDR2Mi4wMDhoMy4zbC0uNTUgMy4xMDdoLTIuNzV2OC4wNGgtMy4xMTR2LTguMDRoLTIuNzV2LTMuMTA3aDIuNzVWOS4xMTNzLS4xMDQtMy44MzQgMy44NDgtMy44MzRjMS44NDggMCAyLjU2Ni4xODQgMi41NjYuMTg0VjguMnptMC03LjJINC42NjhBMy42NjggMy42NjggMCAwIDAgMSA0LjY2NnYxNC42NjZBMy42NyAzLjY3IDAgMCAwIDQuNjY4IDIzaDE0LjY2NEEzLjY2OCAzLjY2OCAwIDAgMCAyMyAxOS4zMzJWNC42NjZBMy42NjYgMy42NjYgMCAwIDAgMTkuMzMyIDF6Ii8+Cjwvc3ZnPgo=')
      center center no-repeat;
    width: 22px;
    height: 22px;
  }
`;

export default function SignUp(props) {
  const signUpValidate =
    props.username.length > 1 &&
    props.email.includes('@') &&
    props.password.length > 5;

  return (
    <Outer className={props.switchModal ? 'hideSignUp' : ''}>
      <Modal onClick={props.signUpModal}></Modal>
      <Inner>
        <Page>
          <PageInner>
            <Header>
              <Logo />
            </Header>
            <H2>회원가입</H2>
            <div>
              <div>
                <Content>
                  <form>
                    <Area>
                      <NameIdPw>
                        <Value>
                          <Input
                            onKeyPress={props.signUpEnter}
                            className={props.username ? 'checked' : 'none'}
                            onChange={props.onChangeUsername}
                            name="name"
                            label="이름"
                            placeholder="이름"
                            autoComplete="off"
                            type="text"
                            id="name"
                          />
                        </Value>
                        <DelBtn>
                          <DelIcon></DelIcon>
                        </DelBtn>
                        <Check></Check>
                      </NameIdPw>
                    </Area>
                    <Area>
                      <NameIdPw>
                        <Value>
                          <Input
                            onKeyPress={props.signUpEnter}
                            className={props.email ? 'checked' : 'none'}
                            onChange={props.onChangeEmail}
                            name="email"
                            label="이메일"
                            placeholder="이메일"
                            autoComplete="off"
                            type="email"
                            id="id"
                          />
                        </Value>
                        <DelBtn>
                          <DelIcon></DelIcon>
                        </DelBtn>
                        <Check></Check>
                      </NameIdPw>
                    </Area>
                    <Area>
                      <NameIdPw>
                        <Value>
                          <Input
                            onKeyPress={props.signUpEnter}
                            className={props.password ? 'checked' : 'none'}
                            onChange={props.onChangePassword}
                            name="password"
                            label="비밀번호"
                            placeholder="비밀번호"
                            autoComplete="off"
                            type="password"
                            id="password"
                          />
                        </Value>
                        <DelBtn>
                          <DelIcon></DelIcon>
                        </DelBtn>
                        <Check></Check>
                      </NameIdPw>
                    </Area>
                    <Language>
                      <CountryIcon />
                      한국어 (대한민국)
                      <LanguageCode
                        id="sine_up_languageCode"
                        name="languageCode"
                        type="hidden"
                        label
                        placeholder
                        value="ko"
                      />
                      <CountryCode
                        id="sine_up_countryCode"
                        name="countryCode"
                        type="hidden"
                        label
                        placeholder
                        value="KR"
                      />
                      <ArrowIcon />
                    </Language>
                    <SignUpBtn
                      disabled={!signUpValidate}
                      onClick={props.signUpFetch}>
                      회원가입
                    </SignUpBtn>
                  </form>

                  <AlReady>
                    이미 가입하셨나요?<Btn>로그인</Btn>
                  </AlReady>

                  <Hr />

                  <Facebook>Facebook 으로 로그인</Facebook>
                </Content>
              </div>
            </div>
          </PageInner>
        </Page>
      </Inner>
    </Outer>
  );
}
