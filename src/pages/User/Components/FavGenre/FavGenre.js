import React from "react";
import styled from "styled-components";

function FavGenre({ data }) {
    if (data.length < 3) return null;

    return (
        <Favorite>
            <header className="tagHeader">
                <h2 className="tagTitle">영화 선호장르</h2>
            </header>
            <div>
                <div className="margin">
                    <h3 className="nameTitle">인생은 역시 한 편의 드라마!</h3>
                    <div className="mainContainer">
                        <ul className="sumUl">
                            {[...new Array(3)].map((_, idx) => (
                                <li key={idx} className="statList">
                                    <div className="statTitle">
                                        {data[idx].description}
                                    </div>
                                    <div className="subTitle">
                                        {data[idx].score.toFixed(1)}점 •{" "}
                                        {data[idx].count}편
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="subContainer">
                        {data.map((item, idx) => (
                            <li key={idx} className="subList">
                                {item.description}
                                <span>
                                    {item.score.toFixed(1)}점 • {item.count}편
                                </span>
                            </li>
                        ))}
                    </ul>
                    <hr className="hr" />
                </div>
            </div>
        </Favorite>
    );
}

export default FavGenre;

const Favorite = styled.div`
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;
    background: transparent;
    margin: 12px 0 0;
    .nameTitle {
        color: #ff2f6e;
        font-size: 13px;
        font-weight: 400;
        -webkit-letter-spacing: -0.2px;
        -moz-letter-spacing: -0.2px;
        -ms-letter-spacing: -0.2px;
        letter-spacing: -0.2px;
        line-height: 18px;
        line-height: normal !important;
        text-align: center;
        margin: 8px 0 0;
    }
    .tagHeader {
        overflow: hidden;
        margin: 0 20px;
        .tagTitle {
            float: left;
            color: #000;
            font-size: 19px;
            font-weight: 700;
            -webkit-letter-spacing: -0.7px;
            -moz-letter-spacing: -0.7px;
            -ms-letter-spacing: -0.7px;
            letter-spacing: -0.7px;
            line-height: 28px;
            margin: 8px 0;
        }
    }
    .margin {
        margin: 0 20px;
        .mainContainer {
            padding: 32px 0 21px;
            .sumUl {
                list-style: none;
                padding: 0;
                margin: 0;
                margin: 0 -6px;
                .statList {
                    display: inline-block;
                    vertical-align: top;
                    text-align: center;
                    box-sizing: border-box;
                    width: 33.33333333333333%;
                    padding: 0 6px;
                    .statTitle {
                        font-size: 17px;
                        font-weight: 700;
                        -webkit-letter-spacing: -0.5px;
                        -moz-letter-spacing: -0.5px;
                        -ms-letter-spacing: -0.5px;
                        letter-spacing: -0.5px;
                        line-height: 22px;
                        line-height: 19px;
                        margin: 0 0 4px;
                    }
                    .subTitle {
                        color: #787878;
                        font-size: 12px;
                        font-weight: 400;
                        -webkit-letter-spacing: -0.2px;
                        -moz-letter-spacing: -0.2px;
                        -ms-letter-spacing: -0.2px;
                        letter-spacing: -0.2px;
                        line-height: 16px;
                        line-height: 19px;
                    }
                }
            }
        }
        .subContainer {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0 0 12px;
            .subList {
                display: block;
                color: #8c8c8c;
                font-size: 14px;
                font-weight: 400;
                -webkit-letter-spacing: -0.3px;
                -moz-letter-spacing: -0.3px;
                -ms-letter-spacing: -0.3px;
                letter-spacing: -0.3px;
                line-height: 19px;
                padding: 8px 0 9px;
                overflow: hidden;
                > span {
                    float: right;
                    font-size: 12px;
                    font-weight: 400;
                    -webkit-letter-spacing: -0.2px;
                    -moz-letter-spacing: -0.2px;
                    -ms-letter-spacing: -0.2px;
                    letter-spacing: -0.2px;
                    line-height: 16px;
                    line-height: 19px;
                }
            }
        }
        .hr {
            border: 0;
            border-bottom: 1px solid #f0f0f0;
            margin: 24px 0 0;
        }
    }
`;
