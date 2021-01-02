import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "../../../../styles";
import api from "../../../../services/api";
import { CardListSlick, CardPoster } from "../../../../components";
import history from "../../../../history";

const RatedByScore = ({ match, selected }) => {
    const { userId, contentType } = match.params;
    const [state, setState] = useState({
        data: {},
        isFetching: true,
    });

    useEffect(() => {
        api.get(
            `/users/${userId}/${contentType.toUpperCase()}/ratings/by_rating?size=20`
        ).then((res) => {
            setState({
                data: res.data,
                isFetching: false,
            });
        });
    }, [userId, contentType]);
    console.log(state);
    if (state.isFetching) return <Loader height="800px" />;

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
    margin: 200px 20px;
    background: ${(props) => props.theme.bgGray};
`;

const StyledCard = styled(CardPoster)`
    width: 33.3333333%;

    @media only screen and (min-width: 600px) {
        width: 25%;
    }
    @media only screen and (min-width: 760px) {
        width: 20%;
        padding: 0 5px;
    }
    @media only screen and (min-width: 1100px) {
        width: 16.6667%;
        padding: 0 8px;
    }
`;
