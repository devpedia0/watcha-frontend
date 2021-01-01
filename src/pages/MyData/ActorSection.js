import React from "react";
import styled from "styled-components";

import { Divider } from "../../styles";
import { CardListSlick, Card } from "../../components";
// ★
const ActorSection = ({ data }) => {
    return (
        <Wrapper>
            <CardListSlick title="선호배우" horizon>
                {data.map((item, idx) => (
                    <Card
                        key={idx}
                        width="95%"
                        radius="50%"
                        imageUrl={item.profileImagePath}
                        title={item.name}
                        subTitle={
                            item.role +
                            (item.characterName
                                ? " | " + item.characterName
                                : "")
                        }
                        AddComponent={
                            <ScoreCount>
                                {item.score}점 • {item.count}편
                            </ScoreCount>
                        }
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

const ScoreCount = styled.span`
    color: #787878;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
`;
