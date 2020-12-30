import {
    COMMENT_INIT,
    COMMENT_INITIALIZE,
    COMMENT_FETCH_DATA,
    COMMENT_FETCHING,
} from "../types";

const INITIAL_STATE = {
    data: [],
    initFetch: false,
    isFetching: false,
    fetchMore: true,
    page: 1,
    size: 10,
};

const commentReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case COMMENT_INIT:
            return {
                ...state,
                ...action.payload,
                page: state.page + 1,
                initFetch: true,
            };
        case COMMENT_INITIALIZE:
            return INITIAL_STATE;

        case COMMENT_FETCHING:
            return {
                ...state,
                isFetching: true,
            };

        case COMMENT_FETCH_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                page: state.page + 1,
                isFetching: false,
                fetchMore: action.payload.length < state.size ? false : true,
            };
        default:
            return state;
    }
};

export default commentReducers;
