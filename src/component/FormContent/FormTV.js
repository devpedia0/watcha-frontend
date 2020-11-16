import React, { useEffect } from "react";
import FormContainer from "../../styles/FormContainer";

const initialValue = {
    origin_title: "",
    country_code: "KO",
    watcha_yn: "n",
    netflix_yn: "n",
};

const FormTV = ({ data, setData }) => {
    useEffect(() => {
        setData((state) => ({
            ...state,
            Content: initialValue,
        }));
    }, [setData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((state) => ({
            ...state,
            Content: {
                ...state.Content,
                [name]: value,
            },
        }));
    };

    return (
        <FormContainer>
            <h2 className="mb-3">TV 프로그램</h2>
            <div className="form-group">
                <label>원제목</label>
                <input
                    className="form-control"
                    name="origin_title"
                    value={data.origin_title || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>국가코드</label>
                <input
                    className="form-control"
                    name="country_code"
                    value={data.country_code || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>왓차여부</label>
                <br />
                {[
                    { key: "y", title: "Y" },
                    { key: "n", title: "N" },
                ].map((option) => (
                    <div
                        key={option.key}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="watcha_yn"
                            value={option.key}
                            checked={option.key === data.watcha_yn}
                            onChange={handleChange}
                            id={`watcha_yn${option.key}`}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`watcha_yn${option.key}`}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </div>

            <div className="form-group">
                <label>넷플릭스 여부</label>
                <br />
                {[
                    { key: "y", title: "Y" },
                    { key: "n", title: "N" },
                ].map((option) => (
                    <div
                        key={option.key}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="netflix_yn"
                            value={option.key}
                            checked={option.key === data.netflix_yn}
                            onChange={handleChange}
                            id={`netflix_yn${option.key}`}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`netflix_yn${option.key}`}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </div>
        </FormContainer>
    );
};

export default React.memo(FormTV);
