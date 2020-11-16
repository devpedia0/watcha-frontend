import React from "react";
import PostersRank from "../component/Posters/PostersRank";

const Home = () => {
    return (
        <div>
            <PostersRank />
            <PostersRank />
            <PostersRank />

            <PostersRank size="medium" />
            <PostersRank size="medium" />
            <PostersRank size="medium" />
        </div>
    );
};

export default Home;
