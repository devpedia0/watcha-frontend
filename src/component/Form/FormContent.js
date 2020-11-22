import React, { useRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { ImgContantainer } from "../../styles/ImgContainer";
import CardList from "../CardList/CardList";
registerLocale("ko", ko);

const FormContent = ({ title, inputs, errors, onChange }) => {
    const imgRef = useRef();
    const handleClickImage = () => imgRef.current.click();

    return (
        <CardList title={title}>
            <div className="row">
                <div className="col-4 d-flex flex-column">
                    <ImgContantainer
                        src={inputs?.file && URL.createObjectURL(inputs.file)}
                        onClick={handleClickImage}
                    />
                    <div className="form-group">
                        <div
                            className="custom-file"
                            style={{ display: "none" }}
                        >
                            <input
                                name="file"
                                type="file"
                                className="custom-file-input"
                                ref={imgRef}
                                onChange={onChange}
                                hidden
                            />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleClickImage}
                    >
                        이미지{inputs?.file ? " 변경" : " 추가"}
                    </button>
                    <div className="form-group">
                        <label>제목</label>
                        <input
                            name="mainTitle"
                            value={inputs.mainTitle || ""}
                            onChange={onChange}
                            className={`form-control ${
                                errors.mainTitle && "is-invalid"
                            }`}
                        />
                        {errors.mainTitle && (
                            <div className="invalid-feedback">
                                {errors.mainTitle}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label>카테고리</label>
                        <select
                            name="category"
                            value={inputs.category || ""}
                            onChange={onChange}
                            className={`custom-select ${
                                errors.category && "is-invalid"
                            }`}
                        >
                            <option value="">카테고리 선택</option>
                            <option value="romance">로맨스</option>
                            <option value="action">액션</option>
                            <option value="comedy">코미디</option>
                            <option value="crime">범죄</option>
                        </select>
                        {errors.category && (
                            <div className="invalid-feedback">
                                {errors.category}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label>제작연도</label>
                        <DatePicker
                            locale="ko"
                            selected={inputs.productionDate || new Date()}
                            onChange={(date) => {
                                return onChange({
                                    target: {
                                        name: "productionDate",
                                        value: date,
                                    },
                                });
                            }}
                            showYearPicker
                            dateFormat="yyyy"
                            className="custom-select"
                        />
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-group">
                        <label>설명</label>
                        <textarea
                            name="description"
                            value={inputs.description || ""}
                            onChange={onChange}
                            rows="3"
                            className={`form-control ${
                                errors.description && "is-invalid"
                            }`}
                        />
                        {errors.description && (
                            <div className="invalid-feedback">
                                {errors.description}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CardList>
    );
};

export default React.memo(FormContent);
