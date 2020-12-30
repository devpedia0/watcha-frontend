import api from "../../services/api";
import {
    COMMENT_INIT,
    COMMENT_INITIALIZE,
    COMMENT_FETCH_DATA,
    COMMENT_FETCHING,
} from "../types";
import { getPageId, getUserId } from "../../utils/helperFunc";

const init = () => async (dispatch, getState) => {
    try {
        let { page, size } = getState().comment;
        let fetchUrl = `/contents/${getPageId()}/comments${getUserId()}`;
        let res = await api.get(`${fetchUrl}?page=${page}&size=${size}`);

        let data = res.data;
        let fetchMore = true;
        if (!Array.isArray(res.data)) {
            data = [res.data];
            fetchMore = false;
        }

        dispatch({
            type: COMMENT_INIT,
            payload: {
                data,
                fetchMore,
                size,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

const initialize = () => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_INITIALIZE,
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchMore = () => async (dispatch, getState) => {
    try {
        dispatch({ type: COMMENT_FETCHING });

        let { page, size } = getState().comment;
        const res = await api.get(
            `/contents/${getPageId()}/comments?page=${page + 1}&size=${size}`
        );
        dispatch({
            type: COMMENT_FETCH_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

const commentActions = { init, initialize, fetchMore };

export default commentActions;
