import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useIntersection from "../../../../Hooks/useIntersection";
import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../../../redux/actions";
import { CardList, CardPoster } from "../../../../components";
import { Loader } from "../../../../styles";
import history from "../../../../history";

const OrderByTotal = ({ fetchUrl }) => {
    const dispatch = useDispatch();
    const { data, initFetch, isFetching, fetchMore } = useSelector(
        (state) => state.detail
    );

    useEffect(() => {
        dispatch(detailActions.initContentRated(fetchUrl, 20));
        return () => dispatch(detailActions.initialize());
    }, [dispatch, fetchUrl]);

    const loaderRef = useRef();
    const [isIntersecting] = useIntersection(loaderRef, initFetch);

    useEffect(() => {
        if (isIntersecting && fetchMore) {
            dispatch(detailActions.fetchMore(fetchUrl));
        }
    }, [isIntersecting, fetchMore, dispatch, fetchUrl]);

    return (
        <Wrapper>
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <CardList>
                    {data.map((item, idx) => (
                        <StyledCard
                            key={idx}
                            item={item}
                            onClick={() => history.push(`/contents/${item.id}`)}
                        />
                    ))}
                </CardList>
            )}

            <StyledLoader ref={loaderRef}>
                {isFetching && <Loader />}
            </StyledLoader>
        </Wrapper>
    );
};

export default OrderByTotal;

const Wrapper = styled.div`
    padding: 200px 20px;
    background: ${(props) => props.theme.bgGray};
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
