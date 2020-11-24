import { FORM_INIT, FORM_CHANGE, FORM_SUBMIT, FORM_INITIALIZE } from "../types";
// import api from "../../service/api";
// import axios from "axios";

const init = (initialValue) => {
    return {
        type: FORM_INIT,
        payload: initialValue,
    };
};

const change = (e) => {
    const { name, value, type, files } = e.target;

    return {
        type: FORM_CHANGE,
        payload: {
            name,
            value: type === "file" ? files[0] : value,
        },
    };
};

const submit = (pathname, data) => async (dispatch) => {
    try {
        // const res = await api.post(pathname, data);
        // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
        // const data2 = {
        //     email: "gkb10a@gmail.com",
        //     password: "1234",
        // };
        // const options = {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // };
        // const res = await axios.post(
        //     "http://222.111.195.42:8080/signin",
        //     data2
        // );

        // const res = await axios.post(
        //     "http://121.160.25.204:8080/signin",
        //     data2
        // );
        // const res = await axios.post(
        //     "http://localhost:8080/signin",
        //     data2,
        //     options
        // );

        dispatch({
            type: FORM_SUBMIT,
            payload: "",
        });
    } catch (e) {
        console.log(e);
        console.log(e.response);

        // {
        //     "status": 400,
        //     "code": "C001",
        //     "message": "적절하지 않은 입력값이 있습니다",
        //     "errors": [
        //         {
        //             "field": "description",
        //             "input": "",
        //             "message": "공백일 수 없습니다"
        //         }
        //     ]
        // }
    }
};

const initialize = () => {
    return {
        type: FORM_INITIALIZE,
    };
};

const formActions = {
    init,
    change,
    submit,
    initialize,
};

export default formActions;
