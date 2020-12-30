import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CardComment, HeaderDetail } from "../../components";
import { Loader } from "../../styles";
import useIntersection from "../../Hooks/useIntersection";

import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../../redux/actions";

const ContentsComment = () => {
    const dispatch = useDispatch();
    const { data, initFetch, isFetching, fetchMore } = useSelector(
        (state) => state.comment
    );

    const loaderRef = useRef();
    const [isIntersecting, setIntersecting] = useIntersection(
        loaderRef,
        initFetch
    );

    useEffect(() => {
        dispatch(commentActions.init());

        return () => dispatch(commentActions.initialize());
    }, [setIntersecting, dispatch]);

    useEffect(() => {
        if (isIntersecting && fetchMore) {
            dispatch(commentActions.fetchMore());
        }
    }, [isIntersecting, fetchMore, dispatch]);

    return (
        <Wrapper>
            <HeaderDetail title="코멘트" />
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <Content>
                    {data.map((item, idx) => (
                        <StyledCard key={idx} item={item} />
                    ))}
                </Content>
            )}

            <StyledLoader ref={loaderRef}>
                {isFetching && <Loader />}
            </StyledLoader>
        </Wrapper>
    );
};

export default ContentsComment;

const Wrapper = styled.div``;

const Content = styled.div`
    max-width: 640px;
    margin: 160px auto;
`;

const StyledCard = styled(CardComment)`
    width: 100%;
    margin-bottom: 20px;

    .content {
        height: auto;
    }
`;

const StyledLoader = styled.div`
    height: 50px;
`;
