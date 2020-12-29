import { AUTH_INIT, AUTH_LOGIN, AUTH_LOGOUT } from "../types";

const INITIAL_STATE = {};
const authReducers = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case AUTH_INIT:
            return action.payload;

        case AUTH_LOGIN:
            return;

        case AUTH_LOGOUT:
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default authReducers;
