import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { HeaderDetail } from "../../components";
import history from "../../history";
import { useSelector, useDispatch } from "react-redux";
import { contentActions } from "../../redux/actions";
import { Loader } from "../../styles";

const ContentsInfo = () => {
    const pageCtg = history.location.pathname.split("/")[4];

    const dispatch = useDispatch();
    const {
        data: { contentInfo },
        isFetching,
    } = useSelector((state) => state.content);

    useEffect(() => {
        dispatch(contentActions.fetch());

        return () => dispatch(contentActions.initialize());
    }, [dispatch]);

    if (isFetching) return <Loader height="800px" />;

    const pageObj = {
        contents: "목차",
        description: "출판사 제공 책소개",
    };

    const text = contentInfo[pageCtg].split("\n").map((line) => {
        return (
            <span>
                {line}
                <br />
            </span>
        );
    });

    return (
        <Wrapper>
            <HeaderDetail title={pageObj[pageCtg]} />

            <Content type={contentInfo[pageCtg]}>{text}</Content>
        </Wrapper>
    );
};

export default ContentsInfo;

const Wrapper = styled.div``;

const Content = styled.div`
    white-space: pre-wrap;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.2px;
    line-height: 24px;

    margin: 20px 20px;

    padding-top: 88px;

    ${(props) =>
        props.type === "contents" &&
        css`
            max-width: 728px;
        `}
`;
