import React from "react";
import useInputs from "../../Hooks/useInputs";
import history from "../../history";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
// import formAPI from "../../services/formAPI";
registerLocale("ko", ko);

const initialValue = {
    poster_image_id: "",
    main_title: "",
    category: "",
    production_year: new Date(),
    description: "",
    dtype: "movie",
};

const FormContent = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);

    const handleClickSubmit = async () => {
        try {
            // TODO: validate
            // const { isValid, errors } = validateAll(inputs);

            // TODO: API
            //const content_id = (await formAPI.submit("/content", inputs));
            const content_id = 1;
            const url = `/form/content/${inputs.dtype}?content_id=${content_id}`;
            history.push(url);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form>
            <h2 className="mb-3">컨텐츠(1/3)</h2>
            <div className="form-group">
                <label>포스터 이미지</label>
                <div className="custom-file">
                    <input
                        name="poster_image_id"
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                    />
                    <label
                        className="custom-file-label"
                        htmlFor="customFile"
                        data-browse="few"
                    />
                </div>
            </div>
            <div className="form-group">
                <label>제목</label>
                <input
                    className="form-control"
                    name="main_title"
                    value={inputs.main_title}
                    onChange={handleChangeInputs}
                />
            </div>
            <div className="form-group">
                <label>카테고리</label>
                <select
                    name="category"
                    value={inputs.category}
                    onChange={handleChangeInputs}
                    className="custom-select"
                >
                    <option value="">카테고리 선택</option>
                    <option value="romance">로맨스</option>
                    <option value="action">액션</option>
                    <option value="comedy">코미디</option>
                    <option value="crime">범죄</option>
                </select>
            </div>
            <div className="form-group">
                <label>제작연도</label>
                <DatePicker
                    locale="ko"
                    selected={inputs.production_year}
                    onChange={(date) => {
                        console.log(date);
                        return handleChangeInputs({
                            target: {
                                name: "production_year",
                                value: date,
                            },
                        });
                    }}
                    showYearPicker
                    dateFormat="yyyy"
                    className="custom-select"
                />
            </div>
            <div className="form-group">
                <label>설명</label>
                <textarea
                    className="form-control"
                    name="description"
                    value={inputs.description}
                    onChange={handleChangeInputs}
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label>컨텐츠 종류</label>
                <select
                    name="dtype"
                    value={inputs.dtype}
                    onChange={handleChangeInputs}
                    className="custom-select"
                >
                    <option value="movie">영화</option>
                    <option value="book">책</option>
                    <option value="tv">TV 프로그램</option>
                </select>
            </div>

            <button
                type="button"
                className="btn btn-success"
                onClick={handleClickSubmit}
            >
                Next
            </button>
        </form>
    );
};

export default FormContent;
