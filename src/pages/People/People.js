import React from "react";
import styled from "styled-components";
import { BoxImg, CardList, CardPoster } from "../../components";

const People = () => {
    const list = [];
    return (
        <Wrapper>
            <div className="people-header">
                <BoxImg
                    width="84px"
                    height="84px"
                    mr="15px"
                    radius="6px"
                    src="https://an2-img.amz.wtchn.net/image/v1/people/medium/97d6c1ebe08b45dc2c61.jpg?v=1606730243"
                />
                <div className="people-info">
                    <h2>마이크 뉴웰</h2>
                    <p>감독</p>
                </div>
            </div>
            <CardList>
                {list.map((item, idx) => (
                    <StyledCard key={idx} item={item} />
                ))}
            </CardList>
        </Wrapper>
    );
};

export default People;

const Wrapper = styled.div`
    padding: 71px 15px 113px 15px;

    @media only screen and (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }

    .people-header {
        display: flex;
        align-items: center;
        margin: 22px 0 0px;
        padding-bottom: 20px;

        border-bottom: 1px solid ${(props) => props.theme.line};
    }

    .people-info {
        h2 {
            font-size: 2rem;
            font-weight: 600;
        }

        p {
            color: #959595;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: -0.2px;
            line-height: 18px;
            margin-top: 2px;
        }
    }
`;

const StyledCard = styled(CardPoster)`
    width: 33.3333333%;
    margin-bottom: 30px;

    @media only screen and (min-width: 719px) {
        width: 25%;
    }
`;
