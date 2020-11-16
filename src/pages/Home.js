import React from "react";
// import styled from "styled-components";
import PostersRank from "../component/Posters/PostersRank";

// const Wrapper = styled.div``;

const Home = () => {
    return (
        <div>
            <PostersRank />
            <PostersRank />
            <PostersRank />
            <PostersRank size="medium" />
            <PostersRank size="medium" />
        </div>
    );
};

export default Home;
