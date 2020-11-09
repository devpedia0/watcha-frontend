import React from "react";
import styled from "styled-components";
import Recommend from "../component/Recommend";
import Collection from "../component/Collection";
import RankList from "../component/RankList/RankList";

const Wrapper = styled.div``;

const Home = () => {
    return (
        <div>
            <RankList />
            <RankList />
            <RankList />
            <Recommend />
            <Recommend />
            <Recommend />
            <Collection />
        </div>
    );
};

export default Home;
