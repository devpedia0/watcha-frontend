import React, { useEffect } from "react";
import useInputs from "../../Hooks/useInputs";
import queryString from "query-string";
import history from "../../history";

const initialValue = {
    content_id: "",
    origin_title: "",
    country_code: "KO",
    running_time_minutes: "",
    watcha_yn: "n",
    netflix_yn: "n",
    book_rate: "",
    accumulated_audience: "",
};

const FormMovie = () => {
    const content_id = queryString.parse(window.location.search).content_id;
    const { inputs, setInputs, handleChangeInputs } = useInputs(initialValue);

    useEffect(() => {
        if (!content_id) {
            history.goback();
        }

        setInputs((state) => ({
            ...state,
            content_id,
        }));
    }, [content_id, setInputs]);

    const handleClickSubmit = async () => {
        try {
            // TODO: validate
            // const { isValid, errors } = validateAll(inputs);

            // TODO: API
            // await formAPI.submit("/content/movie", inputs)
            const url = `/form/content/relativepeople?content_id=${content_id}`;
            history.push(url);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form>
            <h2 className="mb-3">영화(2/3)</h2>
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
                <label>상영시간(분)</label>
                <input
                    className="form-control"
                    name="running_time_minutes"
                    value={inputs.running_time_minutes}
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

            <div className="form-group">
                <label>예매율</label>
                <div className="input-group">
                    <input
                        className="form-control"
                        name="book_rate"
                        value={inputs.book_rate}
                        onChange={handleChangeInputs}
                    />

                    <div className="input-group-append">
                        <span className="input-group-text">%</span>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label>누적관객</label>
                <input
                    className="form-control"
                    name="accumulated_audience"
                    value={inputs.accumulated_audience}
                    onChange={handleChangeInputs}
                />
            </div>

            <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickSubmit}
            >
                Next
            </button>
        </form>
    );
};

export default FormMovie;
