import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import history from "../../history";
import { Loader } from "../../styles";
import api from "../../services/api";
import TestSection from "./TestSection";

const MainComponent = () => {
    const id = JSON.parse(localStorage.getItem("id"));

    const pathname = history.location.pathname;
    const contentType = pathname === "/" ? "MOVIES" : pathname.split("/")[1];
    const [state, setState] = useState({
        id: 0,
        isNetflixContent: false,
        isWatchaContent: false,
        mainTitle: "",
        score: 0,
    });
    console.log("state", state);
    const getDataAPI = useCallback(async () => {
        const baseUrl = `/users/${id}/${contentType}/ratings`;
        const response = await api.get(baseUrl + `?page=1&size=7`);
        setState(() => response.data);
        console.log(response);
    }, [contentType, id]);

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

    return (
        <Wrapper>
            <TestSection data={state} />
            {state.loading && <Loader />}
        </Wrapper>
    );
};

export default MainComponent;

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
