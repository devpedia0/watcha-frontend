import React, { useState, useEffect } from "react";

import styled from "styled-components";
import useObserver from "../../Hooks/useObserver";
import { CardList, CardPoster } from "..";
import { Loader } from "../../styles";
import history from "../../history";
import { useSelector, useDispatch } from "react-redux";
import { detailActions } from "../../redux/actions";

const CardListInfinite = ({ posters, fetchUrl }) => {
    const SIZE = 12;
    const [showMore, setShowMore] = useState(true);

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    const { data, initFetch, isFetching, fetchMore } = detail;
    const [ref, isIntersecting] = useObserver(initFetch);

    const handleClick = () => {
        setShowMore(false);
    };

    useEffect(() => {
        dispatch(detailActions.init(posters, SIZE));
        return () => dispatch(detailActions.initialize());
    }, [dispatch, posters]);

    useEffect(() => {
        if (isIntersecting && !showMore && fetchMore) {
            dispatch(detailActions.fetchMore(fetchUrl));
        }
    }, [dispatch, isIntersecting, showMore, fetchMore, fetchUrl]);

    return (
        <Wrppaer>
            <CardList title="작품들">
                {data.map((item, idx) => (
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
            <StyledLoader ref={ref}>
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
