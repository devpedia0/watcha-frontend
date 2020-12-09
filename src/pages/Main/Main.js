import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import history from "../../history";
import { Loader } from "../../components";
import api from "../../services/api";
import dummy from "../../utils/dummy";
import MainSection from "./MainSection/MainSection";
import MainSectionAward from "./MainSection/MainSectionAward";

const steps = [
    { id: "score" },
    { id: "tag" },
    { id: "popular" },
    { id: "collection" },
    { id: "award" },
];

const Main = () => {
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
            <MainSection data={state.box_office} rank={true} />
            <MainSection data={state.mars} rank={true} />
            <MainSection data={state.netflix} rank={true} />
            <MainSection data={state.score} sizeCard="md" />
            <MainSection data={state.tag} sizeCard="md" />
            <MainSection data={state.popular} sizeCard="md" />
            <MainSection data={state.collection} sizeCard="md" />
            <MainSectionAward data={state.award} sizeCard="md" />
            {state.loading && <Loader />}
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
