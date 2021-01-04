import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import useInterSection from "../../Hooks/useIntersection";
import { CardList, CardPoster } from "..";
import { Loader } from "../../styles";
import api from "../../services/api";
import history from "../../history";

const CardListInfinite = ({ posters, fetchUrl }) => {
    const [data, setData] = useState({
        list: [],
        showMore: true,
        fetchMore: true,
        isFetching: false,
        initFetch: false,
        page: 2,
        size: 12,
    });
    const {
        list,
        showMore,
        fetchMore,
        isFetching,
        initFetch,
        page,
        size,
    } = data;

    const loaderRef = useRef();
    const [isIntersecting] = useInterSection(loaderRef, initFetch);

    const handleClick = () => {
        setData({
            ...data,
            showMore: false,
            isFetching: true,
        });
    };

    const fetchUrlNext = `${fetchUrl}?page=${page}&size=${size}`;

    useEffect(() => {
        if (isIntersecting && !showMore && fetchMore) {
            setData((state) => ({ ...state, isFetching: true }));
            api.get(fetchUrlNext).then((res) => {
                setData((state) => ({
                    ...state,
                    list: [...state.list, ...res.data],
                    page: state.page + 1,
                    isFetching: false,
                    fetchMore: res.data < state.size ? false : true,
                }));
            });
        }
    }, [isIntersecting, showMore, fetchMore, fetchUrlNext]);

    useEffect(() => {
        setData((state) => ({ ...state, list: posters, initFetch: true }));
    }, [posters]);

    return (
        <Wrppaer>
            <CardList title="작품들">
                {list.map((item, idx) => (
                    <StyledCard
                        key={idx}
                        item={item}
                        onClick={() =>
                            history.push(`/detail/watcha/${item.id}`)
                        }
                    />
                ))}
            </CardList>
            {showMore && <Button onClick={handleClick}>더보기</Button>}
            <StyledLoader ref={loaderRef}>
                {isFetching && <Loader height="800px" />}
            </StyledLoader>
        </Wrppaer>
    );
};

export default CardListInfinite;
const Wrppaer = styled.div``;

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
