import {
    CONTENT_INIT,
    CONTENT_INITIALIZE,
    CONTENT_INTEREST_STATE,
    CONTENT_COMMENT,
    CONTENT_COMMENT_DELETE,
    CONTENT_COMMENT_EDIT,
    CONTENT_STAR,
    CONTENT_STAR_DELETE,
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
        console.log(err);
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
        console.log(err);
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
        console.log(err);
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
        console.log(err);
    }
};

const deleteComment = () => async (dispatch) => {
    try {
        await api.delete(`/contents/${getPageId()}/comments`);
        dispatch({
            type: CONTENT_COMMENT_DELETE,
        });
    } catch (err) {
        console.log(err);
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
        console.log(err);
    }
};

const deleteStar = () => async (dispatch) => {
    try {
        await api.delete(`/contents/${getPageId()}/scores`);
        dispatch({
            type: CONTENT_STAR_DELETE,
        });
    } catch (err) {
        console.log(err);
    }
};

const contentActions = {
    fetch,
    initialize,
    changeInterestState,
    createComment,
    editComment,
    deleteComment,
    setStar,
    deleteStar,
};

export default contentActions;
