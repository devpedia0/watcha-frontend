import api from "../../services/api";
import { makeUrlQuery } from "../../utils/helperFunc";
import {
    DETAIL_INIT,
    DETAIL_INITIALIZE,
    DETAIL_FETCHING,
    DETAIL_FETCH_DATA,
} from "../types";

const initPeople = (pageId) => async (dispatch) => {
    try {
        let size = 20;
        let res = await api.get(`participants/${pageId}?size=${size}`);
        let { contents, ...info } = res.data;

        dispatch({
            type: DETAIL_INIT,
            payload: { info, data: contents, size },
        });
    } catch (err) {
        console.log(err.response);
    }
};

const initComment = (pageId, userId) => async (dispatch) => {
    try {
        let size = 10;
        let fetchUrl = `/contents/${pageId}/comments${userId}`;
        let res = await api.get(`${fetchUrl}?page=1&size=${size}`);

        let data = res.data;
        let fetchMore = true;
        if (!Array.isArray(res.data)) {
            data = [res.data];
            fetchMore = false;
        }

        dispatch({
            type: DETAIL_INIT,
            payload: { data, fetchMore, size },
        });
    } catch (err) {
        console.log(err.response);
    }
};

const initWatcha = (pageId) => async (dispatch) => {
    try {
        let size = 20;
        let res = await api.get(`/public/awards/${pageId}?size=${size}`);
        let { list, ...info } = res.data;

        dispatch({
            type: DETAIL_INIT,
            payload: { info, data: list, size },
        });
    } catch (err) {
        console.log(err.response);
    }
};
const initContentRated = (fetchUrl, size) => async (dispatch) => {
    try {
        let res = await api.get(makeUrlQuery(fetchUrl, { size, page: 1 }));

        dispatch({
            type: DETAIL_INIT,
            payload: { data: res.data, size },
        });
    } catch (err) {
        console.log(err.response);
    }
};

const initialize = () => async (dispatch) => {
    try {
        dispatch({
            type: DETAIL_INITIALIZE,
        });
    } catch (err) {
        console.log(err.response);
    }
};

const fetchMore = (fetchUrl) => async (dispatch, getState) => {
    try {
        dispatch({ type: DETAIL_FETCHING });

        let { page, size } = getState().detail;
        const res = await api.get(
            makeUrlQuery(fetchUrl, { size, page: page + 1 })
        );
        dispatch({
            type: DETAIL_FETCH_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
    }
};

const datailActions = {
    initPeople,
    initComment,
    initWatcha,
    initContentRated,
    initialize,
    fetchMore,
};

export default datailActions;
