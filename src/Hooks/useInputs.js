import { useState, useCallback } from "react";
import api from "../service/api";
import history from "../history";
import { validate, validateAll } from "../utils/validate";

const useInputs = (initialValue) => {
    const [inputs, setInputs] = useState(initialValue);
    const [errors, setErrors] = useState([]);

    const onChange = useCallback((e) => {
        const { name, value, type, files } = e.target;
        const error = validate(name, value);

        setErrors((state) => ({
            ...state,
            [name]: error,
        }));

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
            // validate
            let { isValid, checkedErrors } = validateAll(data);
            if (!isValid) {
                setErrors(checkedErrors);
                return;
            }

            const res = await api.post(pathname, data);
            console.log(res);
            // history.goBack();
        } catch (e) {
            console.log(e);
            console.log(e.response);
            console.log(e.response.data.error);
            // e.response.data.error => "Unauthorized" => 401
        }
    }, []);

    const onSubmitFile = useCallback(async (pathname, data, reqFileName) => {
        try {
            let { isValid, checkedErrors } = validateAll(data);
            if (!isValid) {
                setErrors(checkedErrors);
                return;
            }

            let { file, ...body } = data;
            console.log(body);
            let formData = new FormData();
            formData.append(reqFileName, file);
            formData.append(
                "body",
                new Blob([JSON.stringify(body)], {
                    type: "application/json",
                })
            );

            const res = await api.post(pathname, formData);
            // await api.post(pathname, formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // });
            console.log(res);
            //history.goBack();
        } catch (e) {
            console.log(e);
            console.log(e.response);
            console.log(e.response.data.error);
        }
    }, []);

    return {
        inputs,
        setInputs,
        errors,
        setErrors,
        onChange,
        onSubmit,
        onSubmitFile,
    };
};

export default useInputs;
