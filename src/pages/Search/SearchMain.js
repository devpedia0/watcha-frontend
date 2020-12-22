import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import history from "../../history";
import { Loader } from "../../components";
import api from "../../services/api";
import MainSection from "../Main/MainSection/MainSection";

const steps = [
    { id: "score" },
    { id: "tag" },
    { id: "popular" },
    { id: "collection" },
    { id: "award" },
];

const SearchMain = () => {
    const pathname = history.location.pathname;
    const charType = pathname === "/" ? "searches" : pathname.split("/")[1];
    const [state, setState] = useState({
        popular: {},
    });
    console.log(state);

    return (
        <Wrapper>
            <MainSection data={state.score} />
        </Wrapper>
    );
};

export default SearchMain;

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
