import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import api from "../../services/api";
import history from "../../history";
import { CardComment, HeaderDetail } from "../../components";
import { Loader } from "../../styles";
import useIntersection from "../../Hooks/useIntersection";

const ContentsComment = () => {
    const pathname = history.location.pathname;
    const pageId = pathname.split("/")[2];
    const userId = pathname.split("/")[4];

    const [data, setData] = useState({
        list: [],
        page: 2,
        size: 10,
        initFetch: false,
        isFetching: false,
        fetchMore: true,
    });

    const loaderRef = useRef();
    const [isIntersecting, setIntersecting] = useIntersection(loaderRef);

    const { list, page, size, initFetch, isFetching, fetchMore } = data;

    useEffect(() => {
        setIntersecting(false);
        api.get(
            `/contents/${pageId}/comments${
                userId ? "/" + userId : ""
            }?page=1&size=${size}`
        ).then((res) => {
            if (Array.isArray(res.data)) {
                setData((state) => ({
                    ...state,
                    list: res.data,
                    initFetch: true,
                }));
            } else {
                setData((state) => ({
                    ...state,
                    list: [res.data],
                    initFetch: true,
                    fetchMore: false,
                }));
            }
        });
    }, [pageId, size, userId, setIntersecting]);

    const fetchUrlNext = `/contents/${pageId}/comments?page=${page}&size=${size}`;
    useEffect(() => {
        if (isIntersecting && initFetch && fetchMore) {
            setData((state) => ({ ...state, isFetching: true }));
            api.get(fetchUrlNext).then((res) => {
                setData((state) => ({
                    ...state,
                    list: [...state.list, ...res.data],
                    page: state.page + 1,
                    isFetching: false,
                    fetchMore: res.data < state.size ? false : true,
                }));
            });
            setIntersecting(false);
        }
    }, [
        isIntersecting,
        setIntersecting,
        initFetch,
        isFetching,
        fetchMore,
        fetchUrlNext,
    ]);

    return (
        <Wrapper>
            <HeaderDetail title="코멘트" />
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <Content>
                    {list.map((item, idx) => (
                        <StyledCard key={idx} item={item} />
                    ))}
                </Content>
            )}

            <StyledLoader ref={loaderRef}>
                {data.isFetching && <Loader />}
            </StyledLoader>
        </Wrapper>
    );
};

export default ContentsComment;

const Wrapper = styled.div``;

const Content = styled.div`
    max-width: 640px;
    margin: 160px auto;
`;

const StyledCard = styled(CardComment)`
    width: 100%;
    margin-bottom: 20px;

    .content {
        height: auto;
    }
`;

const StyledLoader = styled.div`
    height: 50px;
`;
