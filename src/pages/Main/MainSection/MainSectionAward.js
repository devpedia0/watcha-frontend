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
                    <CardCollection
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
