import api from "../../services/api";
import {
    PEOPLE_INIT,
    PEOPLE_INITIALIZE,
    PEOPLE_FETCH_DATA,
    PEOPLE_FETCHING,
} from "../types";
import { getPageId } from "../../utils/helperFunc";

const init = () => async (dispatch) => {
    try {
        let res = await api.get(`participants/${getPageId()}?size=20`);
        let { contents, ...info } = res.data;

        dispatch({
            type: PEOPLE_INIT,
            payload: { info, data: contents },
        });
    } catch (err) {
        console.log(err);
    }
};

const initialize = () => async (dispatch) => {
    try {
        dispatch({
            type: PEOPLE_INITIALIZE,
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchMore = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PEOPLE_FETCHING });

        let { page, size } = getState().people;
        const res = await api.get(
            `/participants/${getPageId()}/contents?page=${
                page + 1
            }&size=${size}`
        );
        dispatch({
            type: PEOPLE_FETCH_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

const peopleActions = { init, initialize, fetchMore };

export default peopleActions;
