import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthService from '../../services/auth.service';
import api from '../../services/api';

export default function Marketing(props) {
  const [userInfo, setUserInfo] = useState({
    isEmailAgreed: false,
    isPushAgreed: false,
    isSmsAgreed: false,
  });

  //UserInfo 가져오기
  useEffect(() => {
    const getData = async () => {
      const response = await AuthService.getUserInfo();
      setUserInfo(() => response.data);
    };
    getData();
  }, []);

  //상태 변화
  const emailState = () => {
    const sendEmail = {
      ...userInfo,
      isEmailAgreed: !userInfo.isEmailAgreed,
    };

    api.put('/users/me', sendEmail).then((response) => {
      if (response.status === 200) {
        AuthService.getUserInfo().then((newData) => {
          setUserInfo(() => newData.data);
        });
      }
    });
  };

  const smsState = () => {
    const sendSms = {
      ...userInfo,
      isSmsAgreed: !userInfo.isSmsAgreed,
    };
    api.put('/users/me', sendSms).then((response) => {
      if (response.status === 200) {
        AuthService.getUserInfo().then((newData) => {
          setUserInfo(() => newData.data);
        });
      }
    });
  };

  const appState = () => {
    const sendApp = {
      ...userInfo,
      isAppAgreed: !userInfo.isAppAgreed,
    };
    api.put('/users/me', sendApp).then((response) => {
      if (response.status === 200) {
        AuthService.getUserInfo().then((newData) => {
          setUserInfo(() => newData.data);
        });
      }
    });
  };
  return (
    <BackScreen className={props.switchModal ? 'hideMarketing' : ''}>
      <ModalContainer>
        <Background onClick={props.marketingModal} />
        <Container>
          <Header>
            <div className="buttonBox" onClick={props.marketingModal}>
              <div className="leftBtn">
                <button className="xB" aria-label="close"></button>
              </div>
            </div>
            <em className="title">마케팅 정보</em>
          </Header>

          <ChildrenContainer>
            <MarketingUl>
              <div className="inner">
                <li className="marketingList">
                  <div className="listInner">
                    <div className="innerTitle">E-Mail</div>

                    <div className="extra">
                      <ToggleBtn aria-label="toggle" onClick={emailState}>
                        <span
                          className={
                            userInfo.isEmailAgreed
                              ? 'active bar'
                              : 'inactive bar'
                          }></span>
                        <span
                          className={
                            userInfo.isEmailAgreed
                              ? 'active circle'
                              : 'inactive circle'
                          }></span>
                      </ToggleBtn>
                    </div>
                  </div>
                </li>
                <li className="marketingList">
                  <div className="listInner">
                    <div className="innerTitle">SMS</div>

                    <div className="extra">
                      <ToggleBtn aria-label="toggle" onClick={smsState}>
                        <span
                          className={
                            userInfo.isSmsAgreed ? 'active bar' : 'inactive bar'
                          }></span>
                        <span
                          className={
                            userInfo.isSmsAgreed
                              ? 'active circle'
                              : 'inactive circle'
                          }></span>
                      </ToggleBtn>
                    </div>
                  </div>
                </li>
                <li className="marketingList">
                  <div className="listInner">
                    <div className="innerTitle">앱 Push</div>

                    <div className="extra">
                      <ToggleBtn aria-label="toggle" onClick={appState}>
                        <span
                          className={
                            userInfo.isPushAgreed
                              ? 'active bar'
                              : 'inactive bar'
                          }></span>
                        <span
                          className={
                            userInfo.isPushAgreed
                              ? 'active circle'
                              : 'inactive circle'
                          }></span>
                      </ToggleBtn>
                    </div>
                  </div>
                </li>
              </div>
            </MarketingUl>
          </ChildrenContainer>
        </Container>
      </ModalContainer>
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
  z-index: 100;
  overflow: hidden scroll;
  &.hideMarketing {
    display: none;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.56);
  @media (min-width: 719px) {
    text-align: center;
    padding: 20px 0px;
    overflow: auto;
    ::after {
      content: '';
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
  }
`;

const Container = styled.div`
  position: relative;
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

const Header = styled.header`
  left: 0px;
  z-index: 50;
  background: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 22px;
  width: 100%;
  height: 44px;
  padding: 0px 16px;
  border-bottom: 1px solid rgb(227, 227, 227);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  .buttonBox {
    display: flex;
    cursor: pointer;
    z-index: 2;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .leftBtn {
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K);
      padding: 0px;
      border: none;
      cursor: pointer;
      width: 24px;
      height: 24px;
      margin: 10px 0px;
    }
  }
  .title {
    display: inline-block;
    position: absolute;
    right: 0px;
    left: 0px;
    z-index: 1;
    text-align: center;
    margin: 11px 0px;
    font-style: normal;
  }
`;

const ChildrenContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 44px 0px 0px;
  overflow-y: scroll;
  @media (min-width: 719px) {
    box-sizing: content-box;
    height: auto;
    overflow: auto;
  }
`;

const MarketingUl = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  .inner {
    margin: 0px 20px;
    .marketingList {
      text-align: left;
      box-sizing: border-box;
      min-height: 48px;
      display: flex;
      flex-direction: column;
      color: rgb(0, 0, 0);
      font-size: 17px;
      font-weight: 400;
      letter-spacing: -0.7px;
      line-height: 22px;
      .listInner {
        display: flex;
        flex: 1 1 0%;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        min-height: 48px;
        border-bottom: 1px solid rgb(234, 233, 232);
        padding: 8px 0px;
        .innerTitle {
          flex: 1 1 0%;
          white-space: pre-wrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .extra {
          display: block;
          margin: 0px 0px 0px 17px;
        }
      }
    }
  }
`;

const ToggleBtn = styled.button`
  background: none;
  padding: 0px;
  border: none;
  margin: 0px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-size: 100%;
  lone-height: normal;
  .bar {
    display: inline-block;
    vertical-align: top;
    width: 52px;
    height: 20px;
    border-radius: 20px;
    margin: 6px 3px;
    transition: all 300ms ease 0s;
    &.active {
      background: rgba(255, 47, 110, 0.4);
    }
    &.inactive {
      background: rgb(237, 237, 237);
    }
  }
  .circle {
    display: inline-block;
    position: absolute;
    top: 3px;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px 0px,
      rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;
    transition: all 300ms ease 0s;
    &.active {
      background: rgb(255, 47, 110);
      left: 29px;
    }
    &.inactive {
      background: rgb(255, 255, 255);
      left: 3px;
    }
  }
`;
