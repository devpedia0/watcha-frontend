import React from "react";
import styled from "styled-components";
import history from "../../../history";
import { CardListSlick, CardCollection } from "../../../components";

const MainSectionAward = ({ data, sizeCard }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    const { title, description, list } = data;

    return (
        <Wrapper>
            <CardListSlick
                title={title}
                description={description}
                sizeHeader="lg"
            >
                {list.map((item, idx) => (
                    <StyledCard
                        key={idx}
                        item={item}
                        size={sizeCard}
                        onClick={() => history.push(`/watcha/${item.id}`)}
                    />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default MainSectionAward;

const Wrapper = styled.div``;

const StyledCard = styled(CardCollection)`
    width: 33%;

    @media only screen and (min-width: 760px) {
        width: 25%;
        padding: 0 5px;
    }
    @media only screen and (min-width: 1100px) {
        width: 20%;
        padding: 0 8px;
    }
`;
