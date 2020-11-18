import React, { useEffect } from "react";
import styled from "styled-components";

import img1 from "../../images/ha.jpeg";
import img2 from "../../images/hong.jpeg";
import img3 from "../../images/park.jpeg";
import FormContainer from "../../styles/FormContainer";
import { ImgContantainer } from "../../styles/ImgContainer";

const initialValue = {
    content_id: "",
    origin_title: "",
    country_code: "KO",
    running_time_minutes: "",
    watcha_yn: "n",
    netflix_yn: "n",
    book_rate: "",
    accumulated_audience: "",
};

const dummy = [
    {
        name: "테스트",
        image_url: img1,
        description: "설명 설명 설명 설명 설명 ",
    },
    {
        name: "테스트22",
        image_url: img2,
        description: "설명 설명 설명 설명 설명 ",
    },
    {
        name: "테스트33",
        image_url: img3,
        description: "설명 설명 설명 설명 설명 ",
    },
];

const FormRelative = ({ data, setData }) => {
    const Wrapper = styled.div`
        height: 100px;

        img {
            width: 100%;
            height: 100%;
        }
    `;

    const Card = ({ item }) => {
        return (
            <Wrapper>
                <ImgContantainer width="100px" height="100px" />
            </Wrapper>
        );
    };
    return (
        <FormContainer className="card">
            <div className="card-header bg-white d-flex justify-content-between">
                <h3>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-people-fill mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                        />
                    </svg>
                    인물 추가
                </h3>
                <button type="button" className="btn btn-primary">
                    추가하기
                </button>
            </div>
            <div className="card-body">
                <Card />
            </div>
        </FormContainer>
    );
};

export default FormRelative;
