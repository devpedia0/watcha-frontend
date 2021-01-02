import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CardComment, HeaderDetail } from "../../components";
import { Loader } from "../../styles";
import useIntersection from "../../Hooks/useIntersection";

import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../redux/actions";

const ContentsComment = ({ match }) => {
    const { pageId, userId } = match.params;
    const dispatch = useDispatch();
    const { data, initFetch, isFetching, fetchMore } = useSelector(
        (state) => state.detail
    );

    const loaderRef = useRef();
    const [isIntersecting] = useIntersection(loaderRef, initFetch);

    useEffect(() => {
        dispatch(detailActions.initComment(pageId, userId));

        return () => dispatch(detailActions.initialize());
    }, [dispatch, pageId, userId]);

    useEffect(() => {
        if (isIntersecting && fetchMore) {
            const fetchUrl = `/contents/${pageId}/comments`;
            dispatch(detailActions.fetchMore(fetchUrl));
        }
    }, [isIntersecting, fetchMore, dispatch, pageId]);

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
