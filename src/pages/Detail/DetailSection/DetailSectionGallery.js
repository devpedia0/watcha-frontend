import React from "react";
import styled from "styled-components";

import { CardListSlick } from "../../../components";

const img =
    "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_360,q_80,w_640/v1598255821/glrkwcqul3pjtp2gadlh.jpg";
const DetialSectionGallery = ({ data }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    // const { list } = data;
    return (
        <Wrapper>
            <CardListSlick title="갤러리" sizeHeader="sm" sizeCard="sm">
                {[...new Array(10)].map((_, idx) => (
                    // {list.map((item, idx) => (
                    <CardGallery key={idx}>
                        <div className="img-block">
                            <img src={img} alt="" />
                        </div>
                    </CardGallery>
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default React.memo(DetialSectionGallery);

const Wrapper = styled.div`
    padding: 0 20px;
    background: #fff;
    border-color: #e3e3e3 !important;
    overflow: hidden;

    @media only screen and (min-width: 1023px) {
        border: 1px solid;
        border-radius: 6px;
    }
`;

const CardGallery = styled.div`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
    padding: 0 5px;
    width: 50%;

    .img-block {
        position: relative;
        overflow: hidden;
        background: #f8f8f8;
        box-sizing: border-box;
        border: solid 1px rgba(0, 0, 0, 0.08);
        border-radius: 3px;
        padding-bottom: 66.46153846153847%;

        img {
            display: inline-block;
            position: absolute;
            inset: 0px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            opacity: 1;
            transition: all 300ms ease 0s;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
    }
    @media only screen and (min-width: 719px) {
        width: 25%;
    }

    @media only screen and (min-width: 1023px) {
        width: 50%;
    }
`;
