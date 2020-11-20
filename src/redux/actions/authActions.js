import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_LOGOUT } from "../types";

const authActions = {
    login() {
        return {
            type: AUTH_LOGIN,
        };
    },
    signup() {
        return {
            type: AUTH_SIGNUP,
        };
    },
    logout() {
        return {
            type: AUTH_LOGOUT,
        };
    },
};

export default authActions;
