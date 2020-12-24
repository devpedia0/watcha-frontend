import React from "react";
import styled from "styled-components";
import { CardListSlick, CardComment } from "../../../components";

const ShowMore = ({ href }) => {
    return <Link href={href}>더보기</Link>;
};

const ContentsSectionComment = ({ data }) => {
    return (
        <Wrapper>
            <CardListSlick
                title="코멘트"
                count="10"
                addComponent={<ShowMore href="http://www.naver.com" />}
            >
                {[...new Array(10)].map((_, idx) => (
                    <StyledCard key={idx} />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(ContentsSectionComment);

const Wrapper = styled.div`
    margin: 0 20px;
`;

const Link = styled.a`
    float: right;
    margin: 12px 0;

    color: #ff2f6e;
`;

export const Divider = styled.div`
    margin: 20px 0 0;
    border-bottom: 1px solid #f0f0f0;
`;

const StyledCard = styled(CardComment)`
    width: 95%;

    @media only screen and (min-width: 719px) {
        width: 47.5%;
    }
`;
