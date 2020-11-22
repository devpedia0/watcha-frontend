import React from "react";
import CardList from "../../component/CardList/CardList";

const FormBook = ({ inputs, errors, onChange }) => {
    return (
        <CardList title="추가정보">
            <div className="form-group">
                <label>부제목</label>
                <input
                    name="subtitle"
                    value={inputs.subtitle || ""}
                    onChange={onChange}
                    className={`form-control ${
                        errors.subtitle && "is-invalid"
                    }`}
                />
                {errors.subtitle && (
                    <div className="invalid-feedback">{errors.subtitle}</div>
                )}
            </div>
            <div className="form-group">
                <label>페이지</label>
                <input
                    name="page"
                    value={inputs.page || ""}
                    onChange={onChange}
                    className={`form-control ${errors.page && "is-invalid"}`}
                />
                {errors.page && (
                    <div className="invalid-feedback">{errors.page}</div>
                )}
            </div>
            <div className="form-group">
                <label>목차</label>
                <textarea
                    name="contents"
                    value={inputs.contents || ""}
                    onChange={onChange}
                    rows="3"
                    className={`form-control ${
                        errors.contents && "is-invalid"
                    }`}
                />
                {errors.contents && (
                    <div className="invalid-feedback">{errors.contents}</div>
                )}
            </div>
            <div className="form-group">
                <label>출판사 설명</label>
                <textarea
                    name="elaboration"
                    value={inputs.elaboration || ""}
                    onChange={onChange}
                    rows="3"
                    className={`form-control ${
                        errors.elaboration && "is-invalid"
                    }`}
                />
                {errors.elaboration && (
                    <div className="invalid-feedback">{errors.elaboration}</div>
                )}
            </div>
        </CardList>
    );
};

export default React.memo(FormBook);
