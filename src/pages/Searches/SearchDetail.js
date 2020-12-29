import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

function SearchDetail() {
    return (
        <Page>
            <Header />
            <Section>
                <section className="container">
                    <header className="header">
                        <div className="backBtn">
                            <div className="btnIcon"></div>
                        </div>
                        <div className="largeTitleBlock">
                            <div className="largeTitle">영화</div>
                        </div>
                        <div className="smallTitle">영화</div>
                    </header>
                </section>
            </Section>
            {/* <Footer>
  <nav className="footerNav">
    <ul className="navTabUl">
      <li className="navItem"></li>
    </ul>
  </nav>
</Footer> */}
        </Page>
    );
}

export default SearchDetail;

const Page = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const Section = styled.section`
    padding-top: 0px;
    padding-bottom: 56px;

    @media (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }

    .container {
        padding: 88px 0px 0px;
        display: block;

        .header {
            display: block;
            position: fixed;
            left: 0px;
            z-index: 50;
            background: rgb(255, 255, 255);
            box-sizing: border-box;
            font-size: 17px;
            font-weight: 700;
            letter-spacing: -0.5px;
            line-height: 22px;
            width: 100%;
            padding: 0px 16px;
            border-bottom: 1px solid rgb(227, 227, 227);
            top: 62px;
            text-align: left;
            height: auto;

            .backBtn {
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;

                .btnIcon {
                    background-position: initial;
                    background-size: initial;
                    background-repeat: initial;
                    background-attachment: initial;
                    background-origin: initial;
                    background-clip: initial;
                    background-color: initial;
                    padding: 0px;
                    border: none;
                    cursor: pointer;
                    width: 24px;
                    height: 24px;
                    margin: 10px 0px;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTYuNzU1IDExLjk4OGw0Ljk1OCA0Ljk1OGEuOTguOTggMCAxIDEtMS4zODcgMS4zODdMNCAxMi4wMDdsLjAwNS0uMDA1TDQgMTEuOTk3bDYuMzQzLTYuMzQzYS45Ny45NyAwIDEgMSAxLjM3MyAxLjM3M2wtNC45NjEgNC45NnoiLz4KICAgICAgICA8cGF0aCBkPSJNNiAxMWgxM2ExIDEgMCAwIDEgMCAySDZ2LTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=) !important;
                }
            }
            .largeTitleBlock {
                display: flex;
                transform: translate3d(0px, 0px, 0px);
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                height: 30px;
                margin: 0px 4px 10px;
                opacity: 1;
                transition: all 150ms ease 0s;

                .largeTitle {
                    display: inline-block;
                    font-weight: 700;
                    letter-spacing: -1.2px;
                    font-size: 22px;
                    line-height: 29px;
                    white-space: nowrap;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .smallTitle {
                position: absolute;
                top: 0px;
                right: 0px;
                left: 0px;
                white-space: nowrap;
                text-align: center;
                font-size: 17px;
                font-weight: 700;
                letter-spacing: -0.5px;
                line-height: 22px;
                margin: 11px 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                opacity: 0;
                transition: all 300ms ease 0s;
            }
        }
    }
`;
