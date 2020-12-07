import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
    CardCollection,
    CardListSlick,
    CardPoster,
    Loader,
} from "../../components";
import dummy from "../../utils/dummy";

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     min-height: calc(100vh - 0px);
//     margin-top: 74px;
//     width: 100%;

//     @media only screen and (min-width: 600px) {
//         min-height: calc(100vh - 343px);
//         margin-top: 74px;
//     }

//     @media only screen and (min-width: 760px) {
//         margin-top: 80px;
//     }

//     @media only screen and (min-width: 1100px) {
//         margin-top: 86px;
//     }
// `;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0px);
    margin-top: 74px;
    max-width: 1320px;
    margin-bottom: 20px;
    margin-right: 15px;
    margin-left: 15px;
    @media only screen and (min-width: 600px) {
        min-height: calc(100vh - 343px);
        margin-top: 74px;
    }

    @media only screen and (min-width: 719px) {
        margin-bottom: 30px;
        margin-right: 20px;
        margin-left: 20px;
    }
    @media only screen and (min-width: 760px) {
        margin-right: 3.5%;
        margin-left: 3.5%;
        margin-top: 80px;
    }
    @media only screen and (min-width: 1100px) {
        margin-bottom: 42px;
        margin-right: 60px;
        margin-left: 60px;
        margin-top: 86px;
    }
    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }
`;

const steps = [
    { id: "rank" },
    { id: "score" },
    { id: "award" },
    { id: "tag" },
    { id: "popular" },
    { id: "collection" },
];

const Home = () => {
    const [state, setState] = useState({
        step: 0,
        loading: false,
        rank: {},
        score: {},
        award: {},
        tag: {},
        popular: {},
        collection: {},
    });

    const getDataAPI = useCallback(() => {
        if (state.step <= 5) {
            const type = steps[state.step].id;
            // const res = await api.get(fetchURL);
            const res = dummy;
            setState((prevState) => ({
                ...prevState,
                [type]: res.data,
            }));
        }

        setState((prevState) => ({
            ...prevState,
            loading: false,
        }));
    }, [state.step]);

    const infiniteScroll = useCallback(() => {
        let elem = document.documentElement;
        let body = document.body;

        let scrollHeight = Math.max(elem.scrollHeight, body.scrollHeight);
        let scrollTop = Math.max(elem.scrollTop, body.scrollTop);
        let clientHeight = elem.clientHeight;

        if (scrollTop + 250 >= scrollHeight - clientHeight) {
            setState((prevState) => ({
                ...prevState,
                loading: true,
                step: prevState.step + 1,
            }));
            setTimeout(() => {
                getDataAPI();
            }, 1000);
        }
    }, [getDataAPI]);

    useEffect(() => {
        window.addEventListener("scroll", infiniteScroll);
        getDataAPI();
        return () => window.removeEventListener("scroll", infiniteScroll);
    }, [infiniteScroll, getDataAPI]);

    return (
        <Wrapper>
            <CardListSlick data={state.rank} card={CardPoster} />
            <CardListSlick data={state.rank} card={CardPoster} />
            <CardListSlick data={state.rank} card={CardPoster} />
            <CardListSlick data={state.score} card={CardPoster} size="medium" />
            <CardListSlick data={state.award} card={CardPoster} size="medium" />
            <CardListSlick data={state.tag} card={CardPoster} size="medium" />
            <CardListSlick data={state.popular} card={CardPoster} />
            <CardListSlick
                data={state.collection}
                card={CardCollection}
                size="medium"
            />
            {state.loading && <Loader />}
        </Wrapper>
    );
};

export default Home;
