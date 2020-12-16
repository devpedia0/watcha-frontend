import React from "react";
import styled from "styled-components";
import { CardListSlick, CardComment } from "../../../components";

const ShowMore = ({ src }) => {
    return <Link href={src}>더보기</Link>;
};

const DetailSectionComment = ({ data }) => {
    return (
        <Wrapper>
            <CardListSlick
                title="코멘트"
                sizeHeader="sm"
                addComponent={<ShowMore src="http://www.naver.com" />}
            >
                {[...new Array(10)].map((_, idx) => (
                    <StyledCard key={idx} />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(DetailSectionComment);

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
