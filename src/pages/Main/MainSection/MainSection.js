import React from "react";
import styled from "styled-components";

import { CardListSlick, CardPoster } from "../../../components";

const MainSection = ({ data }) => {
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
                    <StyledCard key={idx} item={item} />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default MainSection;

const Wrapper = styled.div``;
const StyledCard = styled(CardPoster)`
    width: 33.3333333%;

    @media only screen and (min-width: 600px) {
        width: 25%;
    }
    @media only screen and (min-width: 760px) {
        width: 20%;
        padding: 0 5px;
    }
    @media only screen and (min-width: 1100px) {
        width: 16.6667%;
        padding: 0 8px;
    }
`;
