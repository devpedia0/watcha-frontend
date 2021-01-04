import { useState, useEffect, useRef, useCallback } from "react";
import api from "../services/api";
import { makeUrlQuery } from "../utils/helperFunc";

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
};

const INITIAL_STATE = {
    data: [],
    initFetch: false,
    isFetching: false,
    fetchMore: true,
    isIntersecting: false,
    page: 1,
    size: 10,
};
const useFetchMore = () => {
    const loaderRef = useRef();
    const [state, setState] = useState(INITIAL_STATE);
    useEffect(() => {
        const elem = loaderRef?.current;
        if (!elem) return;

        const observer = new IntersectionObserver(([entry]) => {
            state.initFetch && entry.intersectionRatio > 0
                ? setState((state) => ({ ...state, isIntersecting: true }))
                : setState((state) => ({ ...state, isIntersecting: false }));
        }, options);

        observer.observe(elem);
        return () => observer.unobserve(elem);
    }, [loaderRef, state.initFetch]);

    const oninitFetch = useCallback((data, size) => {
        setState((prevState) => ({
            ...prevState,
            data,
            page: prevState.page + 1,
            initFetch: true,
            size,
        }));
    }, []);

    const initialize = useCallback(() => setState(INITIAL_STATE), []);

    const onFetchMore = useCallback(async (fetchUrl) => {
        try {
            setState((prevState) => ({ ...prevState, isFetching: true }));

            const res = await api.get(
                makeUrlQuery(fetchUrl, {
                    size: state.size,
                    page: state.page + 1,
                })
            );
            setState((prevState) => ({
                ...prevState,
                data: [...prevState.data, ...res.data],
                page: prevState.page + 1,
                isFetching: false,
                fetchMore: res.data.length < prevState.size ? false : true,
            }));
        } catch (err) {
            console.log(err);
            console.log(err.response);
        }
    }, []);

    return { loaderRef, state, oninitFetch, initialize, onFetchMore };
};

export default useFetchMore;
