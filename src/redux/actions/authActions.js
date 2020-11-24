import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_LOGOUT } from "../types";
import api from "../../services/api";

const signin = () => async (dispatch) => {
    try {
        // const res = await api.post("/auth/signin", {
        //     email: "gkb10a@gmail.com",
        //     password: "1234",
        // });

        dispatch({
            type: AUTH_LOGIN,
            payload: "",
        });
    } catch (e) {
        console.log(e.response);
    }
    return {
        type: AUTH_LOGIN,
    };
};

const signup = () => {
    return {
        type: AUTH_SIGNUP,
    };
};

const logout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

const authActions = {
    signin,
    signup,
    logout,
};

export default authActions;
