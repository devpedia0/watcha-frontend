import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import history from "../../history";
import api from "../../services/api";

import useIntersection from "../../Hooks/useIntersection";
import { CardList, HeaderDetail, CardPoster } from "../../components";
import { Loader } from "../../styles";

const Watcha = () => {
    const pathname = history.location.pathname;
    const pageId = pathname.split("/")[2];
    const loaderRef = useRef();
    const isIntersecting = useIntersection(loaderRef);
    const [data, setData] = useState({
        isFetching: true,
        list: [],
        page: 2,
        size: 20,
    });

    useEffect(() => {
        api.get(`/public/awards/${pageId}?size=20`).then((res) => {
            setData((state) => ({
                ...state,
                ...res.data,
            }));
        });
    }, [pageId]);

    useEffect(() => {
        if (!isIntersecting || data.page === 0) return;
        setData((state) => ({ ...state, isFetching: true }));
        api.get(
            `/public/awards/${pageId}/contents?page=${data.page}&size=${data.size}`
        ).then((res) => {
            setData((state) => ({
                ...state,
                list: [...state.list, ...res.data],
                isFetching: false,
                page: res.data < state.size ? 0 : data.page + 1,
            }));
        });
    }, [isIntersecting, pageId, data.page, data.size]);

    return (
        <Wrapper>
            <HeaderDetail title={data.title} />
            <CardList>
                {data.list.map((item, idx) => (
                    <StyledCard key={idx} item={item} />
                ))}
            </CardList>
            <StyledLoader ref={loaderRef}>
                {data.isFetching && <Loader />}
            </StyledLoader>
        </Wrapper>
    );
};

export default Watcha;

const Wrapper = styled.div`
    margin: 50px 20px;
`;
const StyledCard = styled(CardPoster)`
    width: 33.3333333%;
    margin-bottom: 30px;

    @media only screen and (min-width: 520px) {
        width: 25%;
    }
    @media only screen and (min-width: 680) {
        width: 20%;
    }
    @media only screen and (min-width: 840px) {
        width: 16.6667%;
    }
    @media only screen and (min-width: 960px) {
        width: 14.2857%;
    }
    @media only screen and (min-width: 1100px) {
        width: 12.5%;
    }
    @media only screen and (min-width: 1200px) {
        width: 11.1111%;
    }
    @media only screen and (min-width: 1360px) {
        width: 10%;
    }
    @media only screen and (min-width: 1600px) {
        width: 9.09%;
    }
`;

const StyledLoader = styled.div`
    height: 50px;
`;
