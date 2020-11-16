import { useState } from "react";
const useInputs = (initialValue) => {
    const [inputs, setInputs] = useState(initialValue);

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };
    return { inputs, setInputs, handleChangeInputs };
};

export default useInputs;
