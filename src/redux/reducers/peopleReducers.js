import {
    PEOPLE_INIT,
    PEOPLE_INITIALIZE,
    PEOPLE_FETCH_DATA,
    PEOPLE_FETCHING,
} from "../types";

const INITIAL_STATE = {
    info: {},
    data: [],
    initFetch: false,
    isFetching: false,
    fetchMore: true,
    page: 1,
    size: 20,
};

const peopleReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case PEOPLE_INIT:
            return {
                ...state,
                ...action.payload,
                page: state.page + 1,
                initFetch: true,
            };
        case PEOPLE_INITIALIZE:
            return INITIAL_STATE;

        case PEOPLE_FETCHING:
            return {
                ...state,
                isFetching: true,
            };

        case PEOPLE_FETCH_DATA:
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

export default peopleReducers;
