import React from "react";
import styled from "styled-components";
import { CardCollection, CardListSlick, CardPoster } from "../../components";

const collectionItem = {
    posters: [
        process.env.PUBLIC_URL + "/images/1.jpg",
        process.env.PUBLIC_URL + "/images/2.jpg",
        process.env.PUBLIC_URL + "/images/3.jpg",
        process.env.PUBLIC_URL + "/images/4.jpg",
    ],
    title: "컬렉션 테스트",
};

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

const Home = () => {
    return (
        <Wrapper>
            <CardListSlick fetchURL="" card={CardPoster} />
            <CardListSlick fetchURL="" card={CardPoster} />
            <CardListSlick fetchURL="" card={CardPoster} />
            <CardListSlick fetchURL="" card={CardPoster} size="medium" />
            <CardListSlick fetchURL="" card={CardPoster} size="medium" />
            <CardListSlick fetchURL="" card={CardPoster} size="medium" />
            <CardListSlick fetchURL="" card={CardCollection} size="medium" />
        </Wrapper>
    );
};

export default Home;
