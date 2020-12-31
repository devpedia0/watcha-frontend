import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_INIT } from "../types";
import history from "../../history";
import api from "../../services/api";
import AuthService from "../../services/auth.service";

const initUser = (userId) => async (dispatch) => {
    try {
        const res = await api.get(`/users/${userId}`);
        dispatch({
            type: AUTH_INIT,
            payload: { ...res.data, userId },
        });
    } catch (e) {}
};

const login = (inputs) => async (dispatch) => {
    try {
        const { email, password } = inputs;
        const res = await AuthService.login(email, password);
        const id = res.headers.id;

        dispatch(initUser(id));
        history.push("/");
    } catch (e) {
        console.log(e.response);
    }
    return {
        type: AUTH_LOGIN,
    };
};

const logout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

const authActions = {
    initUser,
    login,
    logout,
};

export default authActions;
