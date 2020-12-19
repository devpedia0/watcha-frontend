import React, { useState } from "react";
import styled from "styled-components";
import api from "../../../services/api";

import { CardList, CardPoster } from "../../../components";

const dummy = {
    id: "few",
    posterImagePath: "",
    isNetflixContent: true,
    isWatchaContent: true,
    mainTitle: "title",
    score: 3.2,
};

const DetailSectionRecommend = () => {
    const list = [...new Array(13)];
    const [, setData] = useState(list);
    const handleClick = async () => {
        const res = await api.get("/detail/more");
        setData((state) => [...state, ...res.data]);
    };

    return (
        <Wrapper>
            <CardList title="비슷한 작품" sizeHeader="sm">
                {list.map((_, idx) => (
                    <StyledCard key={idx} item={dummy} />
                ))}
            </CardList>
            {list.length > 12 && <Button onClick={handleClick}>더보기</Button>}
        </Wrapper>
    );
};

export default React.memo(DetailSectionRecommend);

const Wrapper = styled.div`
    margin: 0 20px;
`;

const Button = styled.button`
    margin: 20px 0;

    cursor: pointer;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 20px;
    box-sizing: border-box;
    min-width: 72px;
    height: 32px;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    text-align: center;
    width: 100%;
    border: 1px solid rgb(227, 227, 227);
`;

const StyledCard = styled(CardPoster)`
    width: 33.3333333%;

    @media only screen and (min-width: 719px) {
        width: 25%;
    }
`;
