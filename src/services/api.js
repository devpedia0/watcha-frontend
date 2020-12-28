import axios from "axios";
import history from "../history";

const token = JSON.parse(localStorage.getItem("accessToken"));
const _refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
// 만료 엑세스토큰
// => "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Nzk1Iiwicm9sZXMiOlsiVVNFUiJdLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3NzYwNDI1LCJpYXQiOjE2MDc3NTY4MjV9.jPx5bngGV7tMYSXTT9MwxLzo3KW2qvUZV_wqERwOw5s"

const api = axios.create({
    baseURL: "http://222.111.195.42:8080",
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
            console.log("토큰값 에러", error.response.data.error);

            // 리프레시 토큰 오류
            const requestUrl = error.response.config.url;
            if (requestUrl === "/auth/token") {
                alert("다시 로그인해주세요.");
                return history.push("/");
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
                    alert("다시 로그인해 주세요.");
                    return history.push("/");
                });
        }

        return Promise.reject(error);
    }
);

export default api;
