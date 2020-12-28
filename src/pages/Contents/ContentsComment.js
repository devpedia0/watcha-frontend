import React from "react";
import styled from "styled-components";
import { CardComment, HeaderDetail } from "../../components";

const ContentsComment = () => {
    return (
        <Wrapper>
            <HeaderDetail title="코멘트" />
            <Content>
                {[...new Array(10)].map((_, idx) => (
                    <StyledCard key={idx} />
                ))}
            </Content>
        </Wrapper>
    );
};

export default ContentsComment;

const Wrapper = styled.div``;

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
