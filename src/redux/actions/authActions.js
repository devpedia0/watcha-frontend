import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_LOGOUT } from "../types";

export const auth_login = () => {
    return {
        type: AUTH_LOGIN,
    };
};

export const auth_signup = () => {
    return {
        type: AUTH_SIGNUP,
    };
};

export const auth_logout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};
