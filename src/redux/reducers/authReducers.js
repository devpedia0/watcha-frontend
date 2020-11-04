import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_LOGOUT } from "../types";

const INITIAL_STATE = {};
const authReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return;

        case AUTH_SIGNUP:
            return;

        case AUTH_LOGOUT:
            return;

        default:
            return state;
    }
};

export default authReducers;
