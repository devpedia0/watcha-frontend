import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../../services/api";

function FavCountry() {
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"));
        const getData = async () => {
            const response = await api.get(`/users/${id}/analysis`);
            console.log("favCountry", response);
            setCountryInfo(() => response.data.movie.country);
        };

        getData();
    }, []);
    console.log(countryInfo);

    return (
        <Favorite>
            <header className="tagHeader">
                <h2 className="tagTitle">영화 선호국가</h2>
            </header>
            <div>
                <div className="margin">
                    <div className="mainContainer">
                        <ul className="sumUl">
                            <li className="statList">
                                <div className="statTitle">
                                    {/* {countryInfo[0].description} */}
                                </div>
                                <div className="subTitle">
                                    {/* {countryInfo[0].score}점 • */}
                                    {/* {countryInfo[0].count}편 */}
                                </div>
                            </li>
                            <li className="statList">
                                <div className="statTitle">
                                    {/* {countryInfo[1].description} */}
                                </div>
                                <div className="subTitle">
                                    {/* {countryInfo[1].score}점 • */}
                                    {/* {countryInfo[1].count}편 */}
                                </div>
                            </li>
                            <li className="statList">
                                <div className="statTitle">
                                    {/* {countryInfo[2].description} */}
                                </div>
                                <div className="subTitle">
                                    {/* {countryInfo[2].score}점 • */}
                                    {/* {countryInfo[2].count}편 */}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="subContainer">
                        <li className="subList">
                            {/* {countryInfo[3].description} */}
                            <span>
                                {/* {/* {countryInfo[3].score}점 •{countryInfo[3].count} */}{" "}
                                {/* } 편 */}
                            </span>
                        </li>
                        <li className="subList">
                            {/* {countryInfo[4].description} */}
                            <span>
                                {/* {/* {countryInfo[4].score}점 •{countryInfo[4].count} */}{" "}
                                편
                            </span>
                        </li>
                        <li className="subList">
                            {/* {countryInfo[5].description} */}
                            <span>
                                {/* {/* {countryInfo[5].score}점 •{countryInfo[5].count} */}{" "}
                                편
                            </span>
                        </li>
                    </ul>
                    <hr className="hr" />
                </div>
            </div>
        </Favorite>
    );
}

export default FavCountry;

const Favorite = styled.div`
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;
    background: transparent;
    margin: 12px 0 0;
    @media (min-width: 1023px) {
        border: 1px solid;
        border-radius: 6px;
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
