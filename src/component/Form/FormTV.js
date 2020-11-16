import React from "react";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    origin_title: "",
    country_code: "KO",
    watcha_yn: "n",
    netflix_yn: "n",
};

const FormTV = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);

    return (
        <form>
            <h2 className="mb-3">TV 프로그램(2/3)</h2>
            <div className="form-group">
                <label>원제목</label>
                <input
                    className="form-control"
                    name="origin_title"
                    value={inputs.origin_title}
                    onChange={handleChangeInputs}
                />
            </div>

            <div className="form-group">
                <label>국가코드</label>
                <input
                    className="form-control"
                    name="country_code"
                    value={inputs.country_code}
                    onChange={handleChangeInputs}
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
                            checked={option.key === inputs.watcha_yn}
                            onChange={handleChangeInputs}
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
                            checked={option.key === inputs.netflix_yn}
                            onChange={handleChangeInputs}
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

            <button type="button" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default FormTV;
