import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { peopleActions } from "../../redux/actions";
import useIntersection from "../../Hooks/useIntersection";
import { BoxImg, CardList, CardPoster, Loader } from "../../components";

const People = () => {
    const dispatch = useDispatch();
    const { info, data, initFetch, isFetching, fetchMore } = useSelector(
        (state) => state.people
    );

    useEffect(() => {
        dispatch(peopleActions.init());
        return () => dispatch(peopleActions.initialize());
    }, [dispatch]);

    const loaderRef = useRef();
    const [isIntersecting, setIntersecting] = useIntersection(
        loaderRef,
        initFetch
    );
    console.log(info);
    console.log(data);
    useEffect(() => {
        if (isIntersecting && fetchMore) {
            dispatch(peopleActions.fetchMore());
        }
    }, [isIntersecting, fetchMore, dispatch]);
    return (
        <Wrapper>
            <div className="people-header">
                <BoxImg
                    width="84px"
                    height="84px"
                    mr="15px"
                    radius="6px"
                    src={info.profileImagePath + "?w=100&h=100"}
                />
                <div className="people-info">
                    <h2>{info.name}</h2>
                    <p>{info.job}</p>
                </div>
            </div>
            <CardList>
                {data.map((item, idx) => (
                    <StyledCard key={idx} item={item} />
                ))}
            </CardList>
            <StyledLoader ref={loaderRef}>
                {isFetching && <Loader />}
            </StyledLoader>
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

    @media only screen and (min-width: 520px) {
        width: 25%;
    }
    @media only screen and (min-width: 680px) {
        width: 16.666%;
    }
    @media only screen and (min-width: 840px) {
        width: 16.666%;
    }

    @media only screen and (min-width: 960px) {
        width: 14.285%;
    }

    @media only screen and (min-width: 1100px) {
        width: 12.5%;
    }
    @media only screen and (min-width: 1200px) {
        width: 11.111111%;
    }
`;

const StyledLoader = styled.div`
    height: 50px;
`;
