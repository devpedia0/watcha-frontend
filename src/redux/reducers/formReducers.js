import { FORM_INIT, FORM_CHANGE, FORM_SUBMIT, FORM_INITIALIZE } from "../types";

const INITIAL_STATE = {};
const formReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FORM_INIT:
            return action.payload;

        case FORM_CHANGE:
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            };

        case FORM_SUBMIT:
            return;

        case FORM_INITIALIZE:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default formReducers;
