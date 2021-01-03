import {
    CONTENT_INIT,
    CONTENT_INITIALIZE,
    CONTENT_INTEREST_STATE,
    CONTENT_COMMENT,
    CONTENT_COMMENT_DELETE,
    CONTENT_COMMENT_EDIT,
    CONTENT_STAR,
    CONTENT_STAR_DELETE,
    CONTENT_FETCH_COMMENT,
    CONTENT_FETCH_COLLECTION,
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
                data: {
                    ...action.payload,
                    comments: {
                        ...action.payload.comments,
                        page: 1,
                        size: action.payload.comments.list.length,
                        fetchMore: true,
                    },
                    collections: {
                        ...action.payload.collections,
                        page: 1,
                        size: action.payload.collections.list.length,
                        fetchMore: true,
                    },
                },
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
        case CONTENT_COMMENT_EDIT:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    commentDescription: action.payload,
                },
            };
        case CONTENT_COMMENT_DELETE:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    commentDescription: "",
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

        case CONTENT_FETCH_COMMENT:
            return {
                ...state,
                data: {
                    ...state.data,
                    comments: {
                        ...state.data.comments,
                        ...action.payload,
                        list: [
                            ...state.data.comments.list,
                            ...action.payload.list,
                        ],
                    },
                },
            };
        case CONTENT_FETCH_COLLECTION:
            return {
                ...state,
                data: {
                    ...state.data,
                    collections: {
                        ...state.data.collections,
                        ...action.payload,
                        list: [
                            ...state.data.collections.list,
                            ...action.payload.list,
                        ],
                    },
                },
            };

        default:
            return state;
    }
};

export default contentReducers;
