import { useState, useCallback } from "react";
import api from "../service/api";
import history from "../history";
import { validate } from "../utils/validate";

const useInputs = (initialValue) => {
    const [inputs, setInputs] = useState(initialValue);
    const [errors, setErrors] = useState([]);

    const onChange = useCallback((e) => {
        const { name, value, type, files } = e.target;
        const error = validate(name, value);
        if (error) {
            setErrors((state) => ({
                ...state,
                [name]: error,
            }));
        }

        if (type === "file") {
            setInputs((state) => ({
                ...state,
                [name]: files[0],
            }));
        } else {
            setInputs((state) => ({
                ...state,
                [name]: value,
            }));
        }
    }, []);

    const onSubmit = useCallback(async (pathname, data) => {
        try {
            const res = await api.post(pathname, data);
            console.log(res);
            history.goBack();
        } catch (e) {
            console.log(e);
            console.log(e.response);
            console.log(e.response.data.error);
            // e.response.data.error => "Unauthorized" => 401
        }
    }, []);

    return { inputs, setInputs, errors, setErrors, onChange, onSubmit };
};

export default useInputs;
