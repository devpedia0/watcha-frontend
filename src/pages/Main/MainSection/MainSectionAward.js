import React from "react";
import styled from "styled-components";

import { CardListSlick, CardCollection } from "../../../components";

const MainSectionAward = ({ data, sizeCard, rank }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    const { title, description, posterUrl, list } = data;

    return (
        <Wrapper>
            <CardListSlick
                title={title}
                description={description}
                posterUrl={posterUrl}
            >
                {list.map((item, idx) => (
                    <CardCollection
                        key={idx}
                        item={item}
                        size={sizeCard}
                        rank={rank && idx + 1}
                    />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default MainSectionAward;

const Wrapper = styled.div``;
