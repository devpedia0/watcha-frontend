import React from "react";
import styled from "styled-components";
import Recommend from "../component/Recommend";
import PostersRank from "../component/Posters/PostersRank";
import Collection from "../component/Collection";

const Wrapper = styled.div``;

const Home = () => {
    return (
        <div>
            <PostersRank />
            <PostersRank />
            <PostersRank />
            <Recommend />
            <Recommend />
            <Recommend />
            <Collection />
        </div>
    );
};

export default Home;
