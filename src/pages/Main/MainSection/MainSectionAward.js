import React from "react";
import styled from "styled-components";

import { CardListSlick, CardCollection } from "../../../components";
const item = {
    title: "컬렉션",
    images: [
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
    ],
};

const MainSectionAward = ({ data, sizeCard, rank }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    const { title, description, posterUrl, list } = data;

    return (
        <Wrapper>
            <CardListSlick
                title={title}
                description={description}
                posterUrl={posterUrl}
            >
                {[...new Array(10)].map((_, idx) => (
                    // {list.map((item, idx) => (
                    <CardCollection key={idx} item={item} size={sizeCard} />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default MainSectionAward;

const Wrapper = styled.div``;
