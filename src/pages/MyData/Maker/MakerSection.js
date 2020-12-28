import React from "react";
import styled from "styled-components";
import MakerCard from "./MakerCard";
import MakerCardListSlick from "./MakerCardListSlick";
import { Divider } from "../../Detail/DetailSection/DetailSectionInfo";
const item = {
    name: "name",
    description: "description",
    profileImagePath: "",
};

const MakerSection = () => {
    return (
        <Wrapper>
            <MakerCardListSlick
                title="선호감독"
                sizeHeader="sm"
                sizeCard="sm"
                horizon
            >
                {[...new Array(10)].map((_, idx) => (
                    <MakerCard key={idx} item={item} width="49%" radius="4%" />
                ))}
            </MakerCardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(MakerSection);

const Wrapper = styled.div`
    margin: 0 20px;
`;
