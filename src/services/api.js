import axios from "axios";
import { modalActions } from "../redux/actions";
import store from "../redux/store";

const token = JSON.parse(localStorage.getItem("accessToken"));
const _refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
// 만료 엑세스토큰
// => "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Nzk1Iiwicm9sZXMiOlsiVVNFUiJdLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3NzYwNDI1LCJpYXQiOjE2MDc3NTY4MjV9.jPx5bngGV7tMYSXTT9MwxLzo3KW2qvUZV_wqERwOw5s"

const api = axios.create({
    baseURL: "https://devpedia.site",
    headers: {
        // Authorization: `${token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

api.defaults.headers.common["Authorization"] = token;

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.data.status === 401 && error.response) {
            // 리프레시 토큰 오류
            const requestUrl = error.response.config.url;
            if (requestUrl === "/auth/token") {
                localStorage.clear();
                return store.dispatch(modalActions.setModal("login"));
            }

            // 엑세스 토큰 재발급
            const option = { headers: { RefreshToken: _refreshToken } };
            api.post("/auth/token", {}, option)
                .then((response) => {
                    const newToken = response.headers.authorization;
                    localStorage.setItem(
                        "accessToken",
                        JSON.stringify(newToken)
                    );
                    api.defaults.headers.common["Authorization"] = newToken;
                })
                // 리프레시 토큰 오류
                .catch((err) => {
                    return store.dispatch(modalActions.setModal("login"));
                });
        }

        return Promise.reject(error);
    }
);

export default api;
