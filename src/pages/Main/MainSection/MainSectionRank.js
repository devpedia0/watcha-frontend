import React from "react";
import styled from "styled-components";

import { CardListSlick, CardPoster } from "../../../components";

const MainSectionRank = ({ data }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    const { title, description, poster, list } = data;

    return (
        <Wrapper>
            <CardListSlick
                title={title}
                description={description}
                posterUrl={poster}
            >
                {list.map((item, idx) => (
                    <StyledCard key={idx} item={item} rank={idx + 1} />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default MainSectionRank;

const Wrapper = styled.div``;

const StyledCard = styled(CardPoster)`
    width: 33.3333333%;

    @media only screen and (min-width: 760px) {
        width: 25%;
        padding-right: 6px;
        padding-left: 6px;
    }
    @media only screen and (min-width: 1100px) {
        width: 20%;
        padding-right: 8px;
        padding-left: 8px;
    }
`;
