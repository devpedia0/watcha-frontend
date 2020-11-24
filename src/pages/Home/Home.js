import React from "react";
import styled from "styled-components";
import { PostersRank } from "../../components";

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
            <PostersRank />
            <PostersRank />
            <PostersRank />
            <PostersRank size="medium" />
            <PostersRank size="medium" />
        </Wrapper>
    );
};

export default Home;
