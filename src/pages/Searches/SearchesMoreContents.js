import React, { useEffect } from "react";
import styled from "styled-components";
import useObserver from "../../Hooks/useObserver";
import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../redux/actions";
import { CardList, HeaderDetail, Card } from "../../components";
import { Loader } from "../../styles";
import api from "../../services/api";
import queryString from "query-string";
import { translate } from "../../utils/helperFunc";

const SearchesMoreContents = (props) => {
    const SIZE = 20;
    const contentType = props.match.params.contentType;
    const query = queryString.parse(props.location.search).query;
    const fetchUrl = `/public/searches/${contentType}?query=${query}&page=1&size=${SIZE}`;
    const fetchMoreUrl = `/public/searches/${contentType}?query=${query}`;

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    const { data, initFetch, isFetching, fetchMore } = detail;
    const [loaderRef, isIntersecting] = useObserver(initFetch);

    useEffect(() => {
        api.get(fetchUrl)
            .then((res) => {
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
            <HeaderDetail title={translate(contentType)} />
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <CardList>
                    {data.map((item, idx) => (
                        <Card
                            key={item.id}
                            radius="4%"
                            width="33%"
                            imageUrl={item.posterImagePath}
                            title={item.mainTitle}
                            subTitle={
                                item.productionDate?.split("-")[0] +
                                (item.countryCode
                                    ? " • " + item.countryCode
                                    : "") +
                                (item.author ? " • " + item.author : "")
                            }
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

export default SearchesMoreContents;

const Wrapper = styled.div`
    margin: 50px 20px;
`;

const StyledLoader = styled.div`
    height: 50px;
`;
