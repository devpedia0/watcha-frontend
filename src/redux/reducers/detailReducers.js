import {
    DETAIL_INIT,
    DETAIL_INITIALIZE,
    DETAIL_FETCHING,
    DETAIL_FETCH_DATA,
} from "../types";

const INITIAL_STATE = {
    info: {},
    data: [],
    initFetch: false,
    isFetching: false,
    fetchMore: true,
    page: 1,
    size: 10,
};

const detailReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case DETAIL_INIT:
            return {
                ...state,
                ...action.payload,
                page: state.page + 1,
                initFetch: true,
            };

        case DETAIL_FETCH_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                page: state.page + 1,
                isFetching: false,
                fetchMore: action.payload.length < state.size ? false : true,
            };

        case DETAIL_INITIALIZE:
            return INITIAL_STATE;

        case DETAIL_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        default:
            return state;
    }
};

export default detailReducers;
