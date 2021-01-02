import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { HeaderDetail } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { contentActions } from "../../redux/actions";
import { Loader } from "../../styles";

const ContentsBook = ({ match }) => {
    const contentId = match.params.contentId;

    const dispatch = useDispatch();
    const {
        data: { contentInfo },
        isFetching,
    } = useSelector((state) => state.content);
    useEffect(() => {
        dispatch(contentActions.fetch());

        return () => dispatch(contentActions.initialize());
    }, [dispatch]);

    const pageObj = {
        contents: "목차",
        description: "출판사 제공 책소개",
    };

    if (isFetching) return <Loader height="800px" />;

    const text = contentInfo[contentId].split("\n").map((line, idx) => {
        return (
            <span key={idx}>
                {line}
                <br />
            </span>
        );
    });

    return (
        <Wrapper>
            <HeaderDetail title={pageObj[contentId]} />

            <Content type={contentInfo[contentId]}>{text}</Content>
        </Wrapper>
    );
};

export default ContentsBook;

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
