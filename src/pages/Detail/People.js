import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../redux/actions";
import useObserver from "../../Hooks/useObserver";
import { CardList, CardPoster } from "../../components";
import { BoxImg, Loader } from "../../styles";

const People = (props) => {
    const dispatch = useDispatch();
    const pageId = props.match.params.pageId;
    const detail = useSelector((state) => state.detail);
    const { info, data, initFetch, isFetching, fetchMore } = detail;

    const [loaderRef, isIntersecting] = useObserver(initFetch);

    useEffect(() => {
        dispatch(detailActions.initPeople(pageId));
        return () => dispatch(detailActions.initialize());
    }, [dispatch, pageId]);

    useEffect(() => {
        if (isIntersecting && fetchMore) {
            const fetchUrl = `/participants/${pageId}/contents`;
            dispatch(detailActions.fetchMore(fetchUrl));
        }
    }, [isIntersecting, fetchMore, dispatch, pageId]);
    return (
        <Wrapper>
            <div className="people-header">
                <div className="people-block">
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
                <div className="people-description">{info.description}</div>
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
    max-width: 1320px;

    @media only screen and (min-width: 719px) {
        padding-top: 62px;
        padding-bottom: unset;
    }

    @media only screen and (min-width: 1440px) {
        margin-right: auto;
        margin-left: auto;
    }

    .people-header {
        border-bottom: 1px solid ${(props) => props.theme.line};
        padding-bottom: 20px;
    }

    .people-block {
        display: flex;
        align-items: center;
        margin: 22px 0 0px;
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
            line-height: 24px;
            margin-top: 2px;
        }
    }

    .people-description {
        margin-top: 16px;
        color: rgb(120, 120, 120);
        font-weight: 400;
        white-space: normal;
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
