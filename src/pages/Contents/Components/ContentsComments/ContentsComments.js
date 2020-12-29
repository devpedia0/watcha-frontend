import React from "react";
import styled from "styled-components";
import history from "../../../../history";
import { getPageId } from "../../../../utils/helperFunc";
import { useSelector } from "react-redux";

import { CardListSlick, CardComment } from "../../../../components";
import { Divider } from "../../../../styles";

const ContentsInfo = () => {
    const { data } = useSelector((state) => state.content);
    const { count, list } = data.comments;
    return (
        <>
            <CardListSlick
                title="코멘트"
                count={count}
                addComponent={
                    <Link href={`/contents/${getPageId()}/comments`}>
                        더보기
                    </Link>
                }
            >
                {list.map((item, idx) => (
                    <StyledCard
                        key={idx}
                        item={item}
                        onClick={() =>
                            history.push(
                                `/contents/${getPageId()}/comments/${
                                    item.userId
                                }`
                            )
                        }
                    />
                ))}
            </CardListSlick>
            <Divider />
        </>
    );
};

export default ContentsInfo;

const Link = styled.a`
    float: right;
    margin: 12px 0;

    color: #ff2f6e;
`;

const StyledCard = styled(CardComment)`
    width: 95%;

    @media only screen and (min-width: 719px) {
        width: 47.5% !important;
    }
`;
