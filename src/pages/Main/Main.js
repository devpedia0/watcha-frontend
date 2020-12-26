import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import history from "../../history";
import { Loader } from "../../components";
import api from "../../services/api";
import MainSection from "./MainSection/MainSection";
import MainSectionRank from "./MainSection/MainSectionRank";
import MainSectionAward from "./MainSection/MainSectionAward";
import MainSectionCollection from "./MainSection/MainSectionCollection";

const steps = [
    { id: "score" },
    { id: "tag" },
    { id: "popular" },
    { id: "collection" },
    { id: "award" },
];

const initialState = {
    step: 0,
    isFetching: true,
    isLoading: false,
    box_office: {},
    mars: {},
    netflix: {},
    score: {},
    award: {},
    tag: {},
    popular: {},
    collection: {},
};

const Main = () => {
    const pathname = history.location.pathname;
    const charType = pathname === "/" ? "movies" : pathname.split("/")[1];
    const [state, setState] = useState(initialState);

    const getDataAPI = useCallback(async () => {
        if (state.step <= 4) {
            const baseUrl = `/public/${charType}/`;
            const charId = steps[state.step];
            const res = await api.get(baseUrl + charId.id);
            setState({
                ...state,
                [charId.id]: res.data[0],
                step: state.step + 1,
                isLoading: false,
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
                    isLoading: true,
                });
            }
            window.removeEventListener("scroll", infiniteScroll);
        }
    }, [getDataAPI, state]);

    useEffect(() => {
        if (!state.isLoading) {
            window.addEventListener("scroll", infiniteScroll);
        }
        return () => window.removeEventListener("scroll", infiniteScroll);
    }, [infiniteScroll, state.isLoading]);

    useEffect(() => {
        const fetchAPI = async () => {
            const baseUrl = `/public/${charType}/rankings`;
            const res = await api.get(baseUrl);
            setState((prevState) => ({
                ...prevState,
                box_office: res.data[0],
                mars: res.data[1],
                netflix: res.data[2],
                isFetching: false,
            }));
        };
        fetchAPI();
        return () => setState(initialState);
    }, [charType]);

    if (state.isFetching) {
        return (
            <PageLoading>
                <Loader />
            </PageLoading>
        );
    }

    return (
        <Wrapper>
            <MainSectionRank data={state.box_office} />
            <MainSectionRank data={state.mars} />
            <MainSectionRank data={state.netflix} />
            <MainSection data={state.score} />
            <MainSection data={state.tag} />
            <MainSection data={state.popular} />
            <MainSectionCollection data={state.collection} />
            <MainSectionAward data={state.award} />
            {state.isLoading && <Loader />}
        </Wrapper>
    );
};

export default Main;

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

const PageLoading = styled.div`
    height: 800px;
    padding-top: 400px;
`;
