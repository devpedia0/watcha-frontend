import React from "react";
import styled from "styled-components";

import { Divider } from "../../styles";
import { CardListSlick, Card } from "../../components";

const ActorSection = ({ data }) => {
    return (
        <Wrapper>
            <CardListSlick title="선호배우" horizon>
                {data.map((item, idx) => (
                    <Card
                        key={idx}
                        item={item}
                        score={item.score}
                        count={item.count}
                        width="95%"
                        radius="50%"
                        movieName={item.movieName}
                        analysis="analysis"
                    />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(ActorSection);

const Wrapper = styled.div`
    margin-left: 20px;
`;
