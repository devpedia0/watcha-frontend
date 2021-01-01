import React from "react";
import styled from "styled-components";

// import { Divider } from "../../pages/Detail/DetailSection/DetailSectionInfo";
import { CardListSlick, Card } from "../../components";
// ★
const DirectorSection = ({ data }) => {
    return (
        <Wrapper>
            <CardListSlick title="선호감독" horizon>
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
            {/* <Divider /> */}
        </Wrapper>
    );
};

export default React.memo(DirectorSection);

const Wrapper = styled.div`
    margin: 0 20px;
`;

const ScoreCount = styled.span`
    color: #787878;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
`;
