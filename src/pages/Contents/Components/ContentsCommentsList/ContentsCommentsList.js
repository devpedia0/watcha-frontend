import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CardListSlick, CardComment } from "../../../../components";
import { Divider } from "../../../../styles";
import { contentActions } from "../../../../redux/actions";

const ContentsCommentsList = () => {
    const dispatch = useDispatch();
    const pageId = useParams().pageId;
    const { data } = useSelector((state) => state.content);
    const { count, list, fetchMore } = data.comments;

    const handleFetchMore = () => {
        dispatch(contentActions.fetchMoreComment());
    };
    return (
        <>
            <CardListSlick
                title="코멘트"
                count={count}
                fetchMore={fetchMore}
                onClickfetch={handleFetchMore}
                addComponent={
                    <Link href={`/contents/${pageId}/comments`}>더보기</Link>
                }
            >
                {list.map((item, idx) => (
                    <StyledCard key={idx} item={item} />
                ))}
            </CardListSlick>
            <Divider />
        </>
    );
};

export default ContentsCommentsList;

const Link = styled.a`
    float: right;
    margin: 12px 0;
    font-weight: 500;
    color: #ff2f6e;
    cursor: pointer;
    &:hover {
        color: #ff2f6e;
    }
`;

const StyledCard = styled(CardComment)`
    width: 95%;

    @media only screen and (min-width: 719px) {
        width: 47.5% !important;
    }
`;
