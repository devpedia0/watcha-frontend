import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useIntersection from "../../Hooks/useIntersection";
import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../redux/actions";
import { CardList, HeaderDetail, Card } from "../../components";
import { Loader } from "../../styles";
import api from "../../services/api";
import history from "../../history";
import queryString from "query-string";
import { randomUserImg } from "../../utils/helperFunc";

const SearchesMorePeople = () => {
    const SIZE = 20;
    const query = queryString.parse(history.location.search).query;
    const fetchUrl = `/public/searches/users?query=${query}&page=1&size=${SIZE}`;
    const fetchMoreUrl = `/public/searches/users?query=${query}`;

    const dispatch = useDispatch();
    const { data, initFetch, isFetching, fetchMore } = useSelector(
        (state) => state.detail
    );
    const loaderRef = useRef();
    const [isIntersecting] = useIntersection(loaderRef, initFetch);

    useEffect(() => {
        console.log("???", fetchUrl);
        api.get(fetchUrl)
            .then((res) => {
                console.log(res.data);
                dispatch(detailActions.init(res.data, SIZE));
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
        return () => dispatch(detailActions.initialize());
    }, [dispatch, fetchUrl]);

    useEffect(() => {
        if (isIntersecting && fetchMore) {
            dispatch(detailActions.fetchMore(fetchMoreUrl));
        }
    }, [isIntersecting, fetchMore, dispatch, fetchMoreUrl]);

    return (
        <Wrapper>
            <HeaderDetail title="사용자" />
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <CardList>
                    {data.map((item, idx) => (
                        <Card
                            key={idx}
                            width="100%"
                            radius="50%"
                            imageUrl={randomUserImg()}
                            title={item.name}
                            subTitle={
                                item.characterName
                                    ? " | " + item.characterName
                                    : ""
                            }
                            onClick={() => {
                                history.push(`/users/${item.id}`);
                            }}
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

export default SearchesMorePeople;

const Wrapper = styled.div`
    margin: 50px 20px;
`;

const StyledLoader = styled.div`
    height: 50px;
`;
