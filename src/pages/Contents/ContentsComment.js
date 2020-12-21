import React from "react";
import styled from "styled-components";
import { CardComment, HeaderDetail } from "../../components";

const ContentsComment = () => {
    return (
        <Wrap>
            <HeaderDetail title="코멘트" />
            <Content>
                {[...new Array(10)].map((_, idx) => (
                    <StyledCard key={idx} />
                ))}
            </Content>
        </Wrap>
    );
};

export default ContentsComment;

const Wrap = styled.div`
    padding-top: 0px;
    padding-bottom: 56px;

    @media only screen and (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }
`;

const Content = styled.div`
    max-width: 640px;
    margin: 100px auto;
`;

const StyledCard = styled(CardComment)`
    width: 100%;
    margin-bottom: 20px;

    .content {
        height: auto;
    }
`;
