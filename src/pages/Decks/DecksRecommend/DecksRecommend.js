import React, { useState, useEffect, useCallback, useRef } from "react";

import styled from "styled-components";
import { CardList, CardPoster, Loader } from "../../../components";
// import api from "../../services/api";
const DecksRecommend = ({ posters }) => {
    const [state, setState] = useState({
        data: [],
        showMore: true,
        isFetching: false,
        page: 0,
        size: 12,
    });
    const loaderRef = useRef();

    const fetchData = useCallback(async () => {
        // [ TODO ]
        // Fetch Data More
        // const res = await api.post(`${baseURL}?page=${state.page}&size=${state.size}`)
        setTimeout(() => {
            setState((state) => ({
                ...state,
                data: [...state.data, ...posters],
                isFetching: false,
            }));
        }, 1000);
    }, [posters]);

    const handleIntersection = useCallback(
        (entries) => {
            const target = entries[0];
            if (target.isIntersecting && !state.isFetching) {
                setState((state) => ({ ...state, isFetching: true }));
                fetchData();
            }
        },
        [state.isFetching, fetchData]
    );

    useEffect(() => {
        setState((state) => ({ ...state, data: posters }));
    }, [posters]);

    useEffect(() => {
        if (state.showMore) return;

        const loaderElem = loaderRef?.current;
        if (!loaderElem) return;

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25,
        };
        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(loaderRef.current);

        return () => observer.unobserve(loaderElem);
    }, [state.showMore, handleIntersection]);

    const handleClick = () => {
        setState({
            ...state,
            showMore: false,
            isFetching: true,
        });
        fetchData();
    };

    return (
        <Wrppaer>
            <CardList title="작품들" sizeHeader="sm">
                {state.data.map((item, idx) => (
                    <StyledCard key={idx} item={item} />
                ))}
            </CardList>
            {state.showMore ? (
                <Button onClick={handleClick}>더보기</Button>
            ) : (
                <StyledLoader ref={loaderRef}>
                    {state.isFetching && <Loader />}
                </StyledLoader>
            )}
        </Wrppaer>
    );
};

export default DecksRecommend;
const Wrppaer = styled.div`
    padding: 0 20px;
`;

const StyledCard = styled(CardPoster)`
    width: 33.3333333%;
    margin-bottom: 30px;

    @media only screen and (min-width: 719px) {
        width: 25%;
    }
`;

const Button = styled.button`
    margin: 20px 0;

    cursor: pointer;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 20px;
    box-sizing: border-box;
    min-width: 72px;
    height: 32px;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    text-align: center;
    width: 100%;
    border: 1px solid rgb(227, 227, 227);
`;

const StyledLoader = styled.div`
    height: 50px;
`;
