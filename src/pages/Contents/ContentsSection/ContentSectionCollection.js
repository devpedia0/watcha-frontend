import React from "react";
import styled from "styled-components";

import { CardListSlick, CardCollection } from "../../../components";
import { Divider } from "./ContentsSectionInfo";

const item = {
    title: "컬렉션",
    images: [
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
    ],
};

const ContentSectionCollection = ({ data }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }
    const { title, description, poster } = data;
    // const { title, description, poster, list } = data;
    return (
        <Wrapper>
            <CardListSlick
                title={title}
                description={description}
                posterUrl={poster}
                sizeHeader="sm"
                sizeCard="sm"
            >
                {[...new Array(10)].map((_, idx) => (
                    // {list.map((item, idx) => (
                    <CardCollection key={idx} item={item} size="sm" />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(ContentSectionCollection);

const Wrapper = styled.div`
    margin: 0 20px;
`;
