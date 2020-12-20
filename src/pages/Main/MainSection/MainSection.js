import React from "react";
import styled from "styled-components";

import { CardListSlick, CardPoster } from "../../../components";

const MainSection = ({ data }) => {
<<<<<<< HEAD
    if (Object.keys(data).length === 0) {
        return null;
    }
=======

    if (Object.keys(data).length === 0) {
        return null;
    }

>>>>>>> 0003be5e446f51d2aff629170132d9ce2265eb9b

    const { title, description, poster, list } = data;

<<<<<<< HEAD
=======

>>>>>>> 0003be5e446f51d2aff629170132d9ce2265eb9b
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
<<<<<<< HEAD
=======

>>>>>>> 0003be5e446f51d2aff629170132d9ce2265eb9b
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
