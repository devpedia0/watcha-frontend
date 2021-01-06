import {
    CONTENT_INIT,
    CONTENT_INITIALIZE,
    CONTENT_INTEREST_STATE,
    CONTENT_INTEREST_DELETE,
    CONTENT_COMMENT,
    CONTENT_COMMENT_DELETE,
    CONTENT_COMMENT_EDIT,
    CONTENT_STAR,
    CONTENT_STAR_DELETE,
    CONTENT_FETCH_COLLECTION,
    CONTENT_FETCH_COMMENT,
} from "../types";
import api from "../../services/api";
import { getPageId } from "../../utils/helperFunc";

const fetch = () => async (dispatch) => {
    try {
        const res = await api.get(`/contents/${getPageId()}`);

        dispatch({
            type: CONTENT_INIT,
            payload: res.data,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const initialize = () => {
    return {
        type: CONTENT_INITIALIZE,
    };
};

const changeInterestState = (state) => async (dispatch) => {
    try {
        await api.post(`/contents/${getPageId()}/interests`, { state });
        dispatch({
            type: CONTENT_INTEREST_STATE,
            payload: state,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const deleteInterestState = () => async (dispatch) => {
    try {
        await api.delete(`/contents/${getPageId()}/interests`);
        dispatch({
            type: CONTENT_INTEREST_DELETE,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const createComment = (description) => async (dispatch) => {
    try {
        await api.post(`/contents/${getPageId()}/comments`, {
            description,
        });

        dispatch({
            type: CONTENT_COMMENT,
            payload: description,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const editComment = (description) => async (dispatch) => {
    try {
        await api.put(`/contents/${getPageId()}/comments`, {
            description,
        });
        dispatch({
            type: CONTENT_COMMENT_EDIT,
            payload: description,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const deleteComment = () => async (dispatch) => {
    try {
        await api.delete(`/contents/${getPageId()}/comments`);
        dispatch({
            type: CONTENT_COMMENT_DELETE,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const setStar = (score) => async (dispatch) => {
    try {
        api.post(`/contents/${getPageId()}/scores`, { score });
        dispatch({
            type: CONTENT_STAR,
            payload: score,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const deleteStar = () => async (dispatch) => {
    try {
        await api.delete(`/contents/${getPageId()}/scores`);
        dispatch({
            type: CONTENT_STAR_DELETE,
        });
    } catch (err) {
        console.error(err.response);
    }
};

const fetchMoreComment = () => async (dispatch, getState) => {
    try {
        const {
            page,
            size,
            count,
            list,
            fetchMore,
        } = getState().content.data.comments;
        if (!fetchMore) return;
        const res = await api.get(
            `/contents/${getPageId()}/comments?page=${page}&size=${size}`
        );

        dispatch({
            type: CONTENT_FETCH_COMMENT,
            payload: {
                list: res.data,
                page: page + 1,
                fetchMore: list.length + res.data.length < count,
            },
        });
    } catch (err) {
        console.error(err.response ? err.response : err);
    }
};

const fetchMoreCollection = () => async (dispatch, getState) => {
    try {
        const {
            page,
            size,
            count,
            list,
            fetchMore,
        } = getState().content.data.collections;
        if (!fetchMore) return;
        const res = await api.get(
            `/contents/${getPageId()}/collections?page=${page}&size=${size}`
        );

        dispatch({
            type: CONTENT_FETCH_COLLECTION,
            payload: {
                list: res.data,
                page: page + 1,
                fetchMore: list.length + res.data.length < count,
            },
        });
    } catch (err) {
        console.error(err.response ? err.response : err);
    }
};

const contentActions = {
    fetch,
    initialize,
    changeInterestState,
    deleteInterestState,
    createComment,
    editComment,
    deleteComment,
    setStar,
    deleteStar,
    fetchMoreComment,
    fetchMoreCollection,
};

export default contentActions;
