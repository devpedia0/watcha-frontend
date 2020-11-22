import { useState, useCallback } from "react";
const useInputs = (initialValue) => {
    const [inputs, setInputs] = useState(initialValue);

    const onChange = useCallback((e) => {
        const { name, value, type, files } = e.target;

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

    const onSubmit = useCallback((pathname, data) => {
        console.log(pathname, data);
    }, []);

    return { inputs, setInputs, onChange, onSubmit };
};

export default useInputs;
