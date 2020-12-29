import React from "react";
import styled from "styled-components";

// import { Divider } from "../../pages/Detail/DetailSection/DetailSectionInfo";
import { CardListSlick, Card } from "../../components";

const DirectorSection = ({ data }) => {
    return (
        <Wrapper>
            <CardListSlick title="선호감독" horizon>
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
            {/* <Divider /> */}
        </Wrapper>
    );
};

export default React.memo(DirectorSection);

const Wrapper = styled.div`
    margin: 0 20px;
`;
