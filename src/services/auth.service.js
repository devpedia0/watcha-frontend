import api from "./api";
import { getPageId } from "../utils/helperFunc";

const contentType = ["MOVIES", "BOOKS", "TV_SHOWS"];

const register = (countryCode, name, email, password) => {
    return api.post("/auth/signup", {
        countryCode,
        name,
        email,
        password,
    });
};

const login = (email, password) => {
    return api
        .post("/auth/signin", {
            email,
            password,
        })
        .then((response) => {
            if (response) {
                const accessToken = response.headers.authorization;
                const refreshToken = response.headers.refreshtoken;
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(accessToken)
                );
                localStorage.setItem(
                    "refreshToken",
                    JSON.stringify(refreshToken)
                );
                localStorage.setItem("id", JSON.stringify(response.headers.id));
                api.defaults.headers.common["Authorization"] = accessToken;
            }
            return response;
        })
        .catch((error) => alert(error));
};

const checkEmail = (email) => {
    return api.get("/public/email", {
        params: {
            email: email,
        },
    });
};

const facebookLogin = (accessToken) => {
    return api
        .post("/auth/facebook", {
            accessToken,
        })
        .then((response) => {
            if (response) {
                localStorage.setItem(
                    "facebookUser",
                    JSON.stringify(response.data)
                );
            }
            return response;
        });
};

const getUserInfo = () => {
    return api.get(`/users/${getPageId()}`).then((response) => {
        if (response) {
            return response;
        }
    });
};

const getUserRating = () => {
    return api.get(`/users/${getPageId()}/ratings`).then((response) => {
        if (response) {
            return response;
        }
    });
};

const setUserInfo = () => {
    return api.put("/users/settings").then((response) => {
        return response;
    });
};

const getUserRatingDetail = () => {
    return api
        .get(`/users/${getPageId()}/${contentType[0]}/ratings`)
        .then((response) => {
            if (response) {
                return response;
            }
        });
};

const authService = {
    facebookLogin,
    register,
    login,
    checkEmail,
    // onRefresh,
    getUserInfo,
    setUserInfo,
    getUserRating,
    getUserRatingDetail,
};

export default authService;
