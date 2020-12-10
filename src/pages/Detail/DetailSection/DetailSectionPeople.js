import React from "react";
import styled from "styled-components";
import { CardListSlick, Card } from "../../../components";

const item = {
    name: "name",
    description: "description",
    profileImagePath: "",
};

const DetailSectionPeople = () => {
    return (
        <Wrapper>
            <CardListSlick
                title="출연/제작"
                sizeHeader="sm"
                sizeCard="sm"
                horizon
            >
                {[...new Array(10)].map((_, idx) => (
                    <Card key={idx} item={item} width="49%" radius="4%" />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default React.memo(DetailSectionPeople);

const Wrapper = styled.div`
    margin: 0 20px;

    .card-align {
        list-style: none;
        padding: 0;
        margin: 0;
        height: 228px;
        display: flex;
        flex-flow: column wrap;
        align-content: flex-start;
        margin-right: -5px;
        margin-left: 0px;
        margin-top: 4px;
        margin-bottom: 16px;
    }
`;
