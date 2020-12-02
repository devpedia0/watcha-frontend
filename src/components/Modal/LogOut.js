import React from 'react';
import styled from 'styled-components';

export default function LogOut(props) {
  const checkOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <BackScreen className={props.switchModal ? 'hideLogOut' : ''}>
      <ModalContainer>
        <Background onClick={props.logOutModal} />
        <Content>
          <div className="popUpScreen">
            <div>
              <div className="margin">
                <div className="title">알림</div>
                <div className="message">로그아웃 하시겠어요?</div>
                <div className="buttons">
                  <button className="cancel" onClick={props.logOutModal}>
                    취소
                  </button>
                  <button className="enter" onClick={checkOut}>
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Content>
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
  &.hideLogOut {
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

const Content = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  .popUpScreen {
    background: rgb(255, 255, 255);
    text-align: center;
    width: 280px;
    padding: 20px 0px 0px;
    border-radius: 8px;
    z-index: 100;
    .margin {
      margin: 0px 20px;
      .title {
        display: inline-block;
        color: rgb(0, 0, 0);
        white-space: pre-wrap;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: -0.5px;
        line-height: 22px;
      }
      .message {
        color: rgb(0, 0, 0);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        white-space: pre-wrap;
        padding: 0px 0px 24px;
        border-bottom: 1px solid rgb(210, 210, 210);
        margin: 8px 0px 0px;
        word-break: break-all;
      }
      .buttons {
        display: flex;
        .cancel {
          background: none;
          padding: 0px;
          border-top-width: initial;
          border-bottom-width: initial;
          border-left-width: initial;
          border-style: none solid none none;
          border-image: initial;
          margin: 11px 0px;
          cursor: pointer;
          flex: 1 1 0%;
          color: rgb(255, 47, 110);
          font-size: 17px;
          font-weight: 400;
          letter-spacing: -0.7px;
          line-height: 22px;
          border-right-width: 1px;
          border-color: rgb(210, 210, 210) !important;
        }
        .enter {
          background: none;
          padding: 0px;
          border-width: initial;
          border-style: none;
          border-image: initial;
          margin: 11px 0px;
          cursor: pointer;
          flex: 1 1 0%;
          color: rgb(255, 47, 110);
          font-size: 17px;
          font-weight: 400;
          letter-spacing: -0.7px;
          line-height: 22px;
          border-color: rgb(210, 210, 210) !important;
        }
      }
    }
  }
`;
