import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "../../../../styles";
import api from "../../../../services/api";
import { CardListSlick, CardPoster } from "../../../../components";
import history from "../../../../history";

const RatedByScore = ({ fetchUrl }) => {
    const [state, setState] = useState({
        data: {},
        isFetching: true,
    });

    useEffect(() => {
        api.get(`${fetchUrl}?size=20`).then((res) => {
            setState({
                data: res.data,
                isFetching: false,
            });
        });
    }, [fetchUrl]);

    if (state.isFetching) return <Loader height="800px" />;
    console.log(state.data);
    return (
        <Wrapper>
            {Object.keys(state.data)
                .sort((a, b) => b - a)
                .map((key) => (
                    <CardListSlick
                        title={`${key} 점 준 영화`}
                        count={state.data[key].count}
                    >
                        {state.data[key].list.map((item, idx) => (
                            <StyledCard
                                key={idx}
                                item={item}
                                size="sm"
                                onClick={() =>
                                    history.push(`/contents/${item.id}`)
                                }
                            />
                        ))}
                    </CardListSlick>
                ))}
        </Wrapper>
    );
};

export default RatedByScore;

const Wrapper = styled.div`
    padding: 220px 20px;
`;
const StyledCard = styled(CardPoster)`
    width: 33.3333333%;
    margin: 0 5px;

    @media only screen and (min-width: 520px) {
        width: 25%;
    }
    @media only screen and (min-width: 680px) {
        width: 20%;
    }
    @media only screen and (min-width: 840px) {
        width: 16.6667%;
    }
    @media only screen and (min-width: 960px) {
        width: 14.28%;
    }
    @media only screen and (min-width: 1100px) {
        width: 12.5%;
    }
    @media only screen and (min-width: 1200px) {
        width: 11.1111%;
    }
    @media only screen and (min-width: 1360px) {
        width: 10%;
    }
    @media only screen and (min-width: 1600px) {
        width: 9.1%;
    }
`;
