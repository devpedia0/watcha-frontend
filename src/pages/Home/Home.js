import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import history from "../../history";
import {
    CardCollection,
    CardListSlick,
    CardPoster,
    Loader,
} from "../../components";
import api from "../../services/api";
import dummy from "../../utils/dummy";

const steps = [
    { id: "score" },
    { id: "tag" },
    { id: "popular" },
    { id: "collection" },
    { id: "award" },
];

const Home = () => {
    const pathname = history.location.pathname;
    const charType = pathname === "/" ? "movies" : pathname.split("/")[1];
    const [state, setState] = useState({
        step: 0,
        loading: false,
        box_office: {},
        mars: {},
        netflix: {},
        score: {},
        award: {},
        tag: {},
        popular: {},
        collection: {},
    });

    const getDataAPI = useCallback(async () => {
        if (state.step <= 4) {
            const baseUrl = `/public/${charType}/`;
            const charId = steps[state.step];
            const res = await api.get(baseUrl + charId.id);
            setState({
                ...state,
                [charId.id]: res.data[0],
                step: state.step + 1,
                loading: false,
            });
        }
    }, [state, charType]);

    const infiniteScroll = useCallback(() => {
        let elem = document.documentElement;
        let body = document.body;

        let scrollHeight = Math.max(elem.scrollHeight, body.scrollHeight);
        let scrollTop = Math.max(elem.scrollTop, body.scrollTop);
        let clientHeight = elem.clientHeight;

        if (scrollTop + 200 >= scrollHeight - clientHeight) {
            if (state.step < 5) {
                getDataAPI();
                setState({
                    ...state,
                    loading: true,
                });
            }
            window.removeEventListener("scroll", infiniteScroll);
        }
    }, [getDataAPI, state]);

    useEffect(() => {
        if (!state.loading) {
            window.addEventListener("scroll", infiniteScroll);
        }
        return () => window.removeEventListener("scroll", infiniteScroll);
    }, [infiniteScroll, state.loading]);

    useEffect(() => {
        // [ TODO ] Fetch Rank Data
        // const fetchAPI = async () => {
        //     const baseUrl = `/public/${charType}/rankings?charId=`;
        //     const resRank1 = await api.get(baseUrl + "box_office");
        //     const resRank2 = await api.get(baseUrl + "mars");
        //     const resRank3 = await api.get(baseUrl + "netflix");
        //     setState((prevState) => ({
        //         ...prevState,
        //         box_office: resRank1.data,
        //         mars: resRank2.data,
        //         netflix: resRank3.data,
        //     }));
        // };
        // fetchAPI();

        const res = dummy;
        setState((prevState) => ({
            ...prevState,
            box_office: res.data,
            mars: res.data,
            netflix: res.data,
        }));
    }, []);

    return (
        <Wrapper>
            <CardListSlick
                data={state.box_office}
                card={CardPoster}
                rank={true}
            />
            <CardListSlick data={state.mars} card={CardPoster} rank={true} />
            <CardListSlick data={state.netflix} card={CardPoster} rank={true} />
            <CardListSlick data={state.score} card={CardPoster} size="medium" />
            <CardListSlick data={state.tag} card={CardPoster} size="medium" />
            <CardListSlick data={state.popular} card={CardPoster} />
            <CardListSlick
                data={state.collection}
                card={CardPoster}
                size="medium"
            />
            <CardListSlick
                data={state.award}
                card={CardCollection}
                size="medium"
            />

            {state.loading && <Loader />}
        </Wrapper>
    );
};

export default Home;

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
