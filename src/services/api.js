import axios from "axios";

// const token = JSON.parse(localStorage.getItem("token"));
const api = axios.create({
    // baseURL: "http://121.160.25.204:8080",
    baseURL: "http://222.111.195.42:8080",
    //baseURL: "http://localhost:8080",
    headers: {
        //Authorization: `Bearer ${token}`,
        //"Access-Control-Allow-Origin": "*",
        Authorization:
            // "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NCIsInJvbGVzIjpbIlVTRVIiLCJBRE1JTiJdLCJ0eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwNjYyOTM4OSwiaWF0IjoxNjA2MDI0NTg5fQ.vX8L1_-Dq-GgexAixYw7yM2g4tlnrKz1NxOYxt6OUfI",
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl0sInR5cGUiOiJyZWZyZXNoIiwiZXhwIjoxNjA3MjM2MjM3LCJpYXQiOjE2MDY2MzE0Mzd9.2W9q17zJ2-PUcy5gPNYa_iZ0Ii1Fo4dFSQoCCmkUZBM",
    },
});

export default api;
