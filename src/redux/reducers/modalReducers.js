import { MODAL_CHANGE, MODAL_CLOSE } from "../types";

const INITIALVALUE = "";
const modalReducers = (state = INITIALVALUE, action = {}) => {
    switch (action.type) {
        case MODAL_CHANGE:
            return action.payload;

        case MODAL_CLOSE:
            return "";

        default:
            return state;
    }
};

export default modalReducers;
