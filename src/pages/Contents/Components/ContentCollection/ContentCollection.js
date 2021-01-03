import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { contentActions } from "../../../../redux/actions";
import { CardListSlick, CardCollection } from "../../../../components";
import { Divider } from "../../../../styles";
import history from "../../../../history";

const ContentCollection = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.content);
    const { count, list, fetchMore } = data.collections;

    const handleFetchMore = () => {
        dispatch(contentActions.fetchMoreCollection());
    };

    return (
        <Wrapper>
            <CardListSlick
                title="이 작품이 담긴 컬렉션"
                count={count}
                fetchMore={fetchMore}
                onClickfetch={handleFetchMore}
            >
                {list.map((item, idx) => (
                    <StyledCard
                        key={idx}
                        item={item}
                        size="sm"
                        onClick={() => history.push(`/detail/decks/${item.id}`)}
                    />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(ContentCollection);

const Wrapper = styled.div``;

const StyledCard = styled(CardCollection)`
    color: rgb(41, 42, 50);
    font-size: 15px;
    letter-spacing: -0.5px;
    line-height: 20px;
    font-weight: 500;
    width: 33.3333333%;

    @media only screen and (min-width: 760px) {
        width: 25%;
        padding: 0 5px;
    }
    @media only screen and (min-width: 1100px) {
        width: 20%;
        padding: 0 5px;
    }
`;
