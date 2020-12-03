import React from "react";
import {
    BoxForm,
    CardPoster,
    CardList,
    CardListSlick,
    CardCollection,
} from "../../components";
import styled from "styled-components";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0px);
    margin-top: 74px;
    width: 100%;

    @media only screen and (min-width: 600px) {
        min-height: calc(100vh - 343px);
        margin-top: 74px;
    }

    @media only screen and (min-width: 760px) {
        margin-top: 80px;
    }

    @media only screen and (min-width: 1100px) {
        margin-top: 86px;
    }
`;

const Detail = () => {
    return (
        <Wrapper>
            <BoxForm>
                <CardListSlick fetchURL="" card={CardCollection} />
                <CardList fetchURL="" card={CardPoster} />
            </BoxForm>
        </Wrapper>
    );
};

export default Detail;
