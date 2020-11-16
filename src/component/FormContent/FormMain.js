import React from "react";
import FormContainer from "../../styles/FormContainer";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const FormMain = ({ data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((state) => ({
            ...state,
            [name]: value,
        }));
    };

    return (
        <FormContainer>
            <h2 className="mb-3">컨텐츠</h2>
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
                    value={data.main_title || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>카테고리</label>
                <select
                    name="category"
                    value={data.category || ""}
                    onChange={handleChange}
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
                    selected={data.production_year || new Date()}
                    onChange={(date) => {
                        console.log(date);
                        return handleChange({
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
                    value={data.description || ""}
                    onChange={handleChange}
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label>컨텐츠 종류</label>
                <select
                    name="dtype"
                    value={data.dtype || ""}
                    onChange={handleChange}
                    className="custom-select"
                >
                    <option value="">(선택)</option>
                    <option value="movie">영화</option>
                    <option value="book">책</option>
                    <option value="tv">TV 프로그램</option>
                </select>
            </div>
            <br />
        </FormContainer>
    );
};

export default FormMain;
