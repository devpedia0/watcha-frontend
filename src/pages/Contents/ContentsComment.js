import React, { useEffect } from "react";
import styled from "styled-components";
import { CardComment, HeaderDetail } from "../../components";
import { Loader } from "../../styles";
import useObserver from "../../Hooks/useObserver";

import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../redux/actions";

const ContentsComment = (props) => {
    const dispatch = useDispatch();
    const { pageId, userId } = props.match.params;
    const detail = useSelector((state) => state.detail);
    const { data, initFetch, isFetching, fetchMore } = detail;

    const [loaderRef, isIntersecting] = useObserver(initFetch);

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
        <>
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <>
                    <HeaderDetail title="코멘트" />
                    <Content>
                        {data.map((item, idx) => (
                            <StyledCard key={idx} item={item} />
                        ))}
                    </Content>
                </>
            )}

            <StyledLoader ref={loaderRef}>
                {isFetching && <Loader />}
            </StyledLoader>
        </>
    );
};

export default ContentsComment;

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
