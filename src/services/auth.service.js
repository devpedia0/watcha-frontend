import api from "./api";

const id = JSON.parse(localStorage.getItem("id"));
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
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(response.headers.authorization)
                );
                localStorage.setItem(
                    "refreshToken",
                    JSON.stringify(response.headers.refreshtoken)
                );
                localStorage.setItem("id", JSON.stringify(response.headers.id));
            }
            return response;
        })
        .catch((error) => alert(error));
};

const onRefresh = (Token) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken === null && refreshToken !== null) {
        return api
            .post("auth/token", { params: { refreshToken: refreshToken } })
            .then((response) =>
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(response.headers.authorization)
                )
            );
    }
    return api
        .post("/auth/token", localStorage.getItem("refreshToken"))
        .then((response) => {})
        .catch((error) => {
            console.log("refreshError", error);
        });
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
    return api.get(`/users/${id}`).then((response) => {
        if (response) {
            return response;
        }
    });
};

const getUserRating = () => {
    return api.get(`/users/${id}/ratings`).then((response) => {
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
        .get(`/users/${id}/${contentType[0]}/ratings`)
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
    onRefresh,
    getUserInfo,
    setUserInfo,
    getUserRating,
    getUserRatingDetail,
};

export default authService;
