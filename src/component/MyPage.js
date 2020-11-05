import React from 'react';
import styled from 'styled-components';
import './MyPage.css';
import Bg from '../images/Bg.jpg';
import Footer from './Footer';

const Page = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
  overflow: hidden;
`;

const Content = styled.div`
  display: block;
  padding-top: 0;
  padding-bottom: 56px;

  @media (min-width: 719px) {
    padding-top: 62px;
    padding-bottom: unset;
  }
`;

const Section = styled.div`
  display: block;
  background: #f8f8f8;
  overflow: hidden;

  @media (min-width: 719px) {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh- 62px);
  }
`;

const Main = styled.div`
  @media (min-width: 719px) {
    flex: 1;
    margin: 28px 0 30px;
  }
`;

const MaxWidth = styled.div`
  margin: 0 auto;

  @media (min-width: 719px) {
    max-width: 640px;
  }
`;

const Outer = styled.div`
  background: #fff;
  border-color: #e3e3e3 !important;
  overflow: hidden;

  @media (max-width: 1023px) and (min-width: 719px) {
    border: 1px solid;
    border-radius: 6px;
  }
`;

const Profile = styled.div`
  margin: 0 20px;
`;
const ProfileHeader = styled.header`
  position: relative;
  padding-bottom: 26px;
  border-bottom: 1px solid #ededed;
`;

const Image = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 50%;
`;

const Portrait = styled.div`
  position: relative;
  z-index: 1;
  background: url(https:/d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg)
    no-repeat center;
  background-size: contain;
  width: 100%;
  height: 100%;
`;
const NickName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const H1 = styled.h1`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.9px;
  line-height: 30px;
  width: 100%;
  word-break: break-all;
`;

const Desc = styled.div`
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  margin-top: 5px;
`;

const Type = styled.li`
  display: list-item;
  list-style: none;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  text-decoration: none;
  height: 48px;
`;

const ChartImage = styled.span`
  display: inline-block;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFRjY5MkUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuMTggMTEuOTZoMy43NHY4LjM2SDEuMTh6TTE1Ljc1IDE2LjgzaDMuNzR2My40OWgtMy43NHpNNi4wNCA5LjEyaDMuNzR2MTEuMkg2LjA0ek0xMC45IDEzLjg0aDMuNzR2Ni40OEgxMC45eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkNBMjIiIGQ9Ik0xNy40NCAxLjM3bDEuNjYgNCA0LjMxLjM0LTMuMjggMi44MSAxIDQuMjEtMy42OS0yLjI2LTMuNjkgMi4yNiAxLjAxLTQuMjEtMy4yOS0yLjgxIDQuMzItLjM0eiIvPgogICAgPC9nPgo8L3N2Zz4K)
    no-repeat center;
  background-size: contain;
  width: 24px;
  height: 24px;
  margin: 0 12px 0 0;
`;

const Ul = styled.ul`
  display: block;
  padding: 0;
  position: relative;
  white-space: nowrap;
  margin-right: -5px !important;
  margin-left: -5px !important;
  margin: 24px -5px 24px;
`;

const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 5px;
  width: 100%;
  position: relative;
  width: 50%;

  @media (min-width: 500px) {
    width: 33.333333333333336%;
  }
`;

const Box = styled.a`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 100%;
  padding-top: 100%;
  border-radius: 6px;
`;

export default function MyPage() {
  return (
    <Page>
      <header>헤더 받으면 넣을 곳</header>
      <Content>
        <Section>
          <Main>
            <MaxWidth>
              <Outer>
                <div>
                  <div className="bg">
                    <button className="setting"></button>
                  </div>
                  <Profile>
                    <ProfileHeader>
                      <Image>
                        <Portrait></Portrait>
                      </Image>
                      <NickName>
                        <H1>데브피디아</H1>
                      </NickName>
                      <Desc>
                        <div className="descInner">프로필이 없습니다.</div>
                      </Desc>
                    </ProfileHeader>
                    <ul>
                      <Type>
                        <A>
                          <ChartImage></ChartImage>
                          <span
                            style={{
                              borderBottom: '1px solid #ededed',
                              padding: '13px 0',
                              flex: 1,
                            }}>
                            취향분석
                          </span>
                        </A>
                      </Type>
                    </ul>
                  </Profile>
                  <div style={{ margin: '0 20px' }}>
                    <Ul>
                      <Li>
                        <Box
                          href="/"
                          style={{
                            background:
                              'linear-gradient(45deg, #82d957 40%, #bfe874 100%)',
                          }}></Box>
                      </Li>
                      <Li>
                        <Box
                          href="/"
                          style={{
                            background:
                              'linear-gradient(45deg, #ffbf66 40%, #ffc89e 100%)',
                          }}></Box>
                      </Li>
                      <Li>
                        <Box
                          href="/"
                          style={{
                            background:
                              'linear-gradient(45deg, #60d1f0 40%, #70e0d3 100%)',
                          }}></Box>
                      </Li>
                    </Ul>
                  </div>
                </div>
              </Outer>
            </MaxWidth>
          </Main>
          <Footer />
        </Section>
      </Content>
    </Page>
  );
}
