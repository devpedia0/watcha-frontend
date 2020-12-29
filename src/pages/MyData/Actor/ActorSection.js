import React from "react";
import styled from "styled-components";
import ActorCard from "./ActorCard";
import ActorCardListSlick from "./ActorCardListSlick";
import { Divider } from "../../../styles";
const item = {
    name: "name",
    description: "description",
    profileImagePath: "",
};

const ActorSection = () => {
    return (
        <Wrapper>
            <ActorCardListSlick
                title="선호배우"
                sizeHeader="sm"
                sizeCard="sm"
                horizon
            >
                {[...new Array(10)].map((_, idx) => (
                    <ActorCard key={idx} item={item} width="49%" radius="4%" />
                ))}
            </ActorCardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(ActorSection);

const Wrapper = styled.div`
    margin: 0 20px;
`;
