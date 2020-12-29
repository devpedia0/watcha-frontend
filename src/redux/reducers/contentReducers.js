import {
    CONTENT_INIT,
    CONTENT_INITIALIZE,
    CONTENT_INTEREST_STATE,
    CONTENT_COMMENT,
    CONTENT_STAR,
    CONTENT_STAR_DELETE,
} from "../types";

const INITIAL_STATE = {
    data: {},
    isFetching: true,
    userData: {
        commentDescription: null,
        interestState: null,
        isLogin: false,
        score: null,
        userId: null,
    },
};

const contentReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case CONTENT_INIT:
            const context = action.payload.context;
            const userData = context
                ? { ...context, isLogin: true }
                : INITIAL_STATE.userData;

            return {
                data: action.payload,
                isFetching: false,
                userData: userData,
            };
        case CONTENT_INITIALIZE:
            return INITIAL_STATE;

        case CONTENT_INTEREST_STATE:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    interestState: action.payload,
                },
            };

        case CONTENT_COMMENT:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    commentDescription: action.payload,
                },
            };
        case CONTENT_STAR:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    score: action.payload,
                },
            };
        case CONTENT_STAR_DELETE:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    score: 0,
                },
            };
        default:
            return state;
    }
};

export default contentReducers;
