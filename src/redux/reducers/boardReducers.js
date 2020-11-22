import {
    BOARD_FETCH,
    BOARD_INSERT,
    BOARD_UPDATE,
    BOARD_DELETE,
} from "../types";

const INITIAL_STATE = {
    prevPageId: "",
    data: [],
};
const boardReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case BOARD_FETCH:
            return {
                ...state,
                ...action.payload,
            };

        case BOARD_INSERT:
            return {
                ...state,
                data: [action.payload, ...state.data],
            };

        case BOARD_UPDATE:
            return;

        case BOARD_DELETE:
            return;

        default:
            return state;
    }
};

export default boardReducers;
