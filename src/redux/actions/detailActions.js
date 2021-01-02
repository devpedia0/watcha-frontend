import api from "../../services/api";
import {
    DETAIL_INIT,
    DETAIL_INITIALIZE,
    DETAIL_FETCHING,
    DETAIL_FETCH_DATA,
} from "../types";
import { getPageId, getUserId } from "../../utils/helperFunc";

const initPeople = () => async (dispatch) => {
    try {
        let size = 20;
        let res = await api.get(`participants/${getPageId()}?size=${size}`);
        let { contents, ...info } = res.data;

        dispatch({
            type: DETAIL_INIT,
            payload: { info, data: contents, size },
        });
    } catch (err) {
        console.log(err);
    }
};

const initComment = () => async (dispatch) => {
    try {
        let size = 10;
        let fetchUrl = `/contents/${getPageId()}/comments${getUserId()}`;
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
        console.log(err);
    }
};

const initWatcha = () => async (dispatch) => {
    try {
        let size = 20;
        let res = await api.get(`/public/awards/${getPageId()}?size=${size}`);
        let { list, ...info } = res.data;

        dispatch({
            type: DETAIL_INIT,
            payload: { info, data: list, size },
        });
    } catch (err) {
        console.log(err);
    }
};

// const init = (fetchUrl, size) => async (dispatch) => {
//     try {
//         let res = await api.get(fetchUrl + `?size=${size}`);
//     } catch (err) {
//         console.log(err);
//     }
// };

const initialize = () => async (dispatch) => {
    try {
        dispatch({
            type: DETAIL_INITIALIZE,
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchMorePeople = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DETAIL_FETCHING });

        let { page, size } = getState().detail;
        const res = await api.get(
            `/participants/${getPageId()}/contents?page=${
                page + 1
            }&size=${size}`
        );
        dispatch({
            type: DETAIL_FETCH_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchMoreComment = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DETAIL_FETCHING });

        let { page, size } = getState().detail;
        const res = await api.get(
            `/contents/${getPageId()}/comments?page=${page + 1}&size=${size}`
        );
        dispatch({
            type: DETAIL_FETCH_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchMoreWatcha = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DETAIL_FETCHING });

        let { page, size } = getState().detail;
        const res = await api.get(
            `/public/awards/${getPageId()}/contents?page=${
                page + 1
            }&size=${size}`
        );
        dispatch({
            type: DETAIL_FETCH_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

const datailActions = {
    initPeople,
    initComment,
    initWatcha,
    initialize,
    fetchMorePeople,
    fetchMoreComment,
    fetchMoreWatcha,
};

export default datailActions;
