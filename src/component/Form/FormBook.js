import React from "react";
import CardList from "../../component/CardList/CardList";

const FormBook = ({ inputs, onChange }) => {
    return (
        <CardList title="추가정보">
            <div className="form-group">
                <label>부제목</label>
                <input
                    className="form-control"
                    name="subtitle"
                    value={inputs.subtitle || ""}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label>페이지</label>
                <input
                    className="form-control"
                    name="page"
                    value={inputs.page || ""}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label>목차</label>
                <textarea
                    className="form-control"
                    name="contents"
                    value={inputs.contents || ""}
                    onChange={onChange}
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label>출판사 설명</label>
                <textarea
                    className="form-control"
                    name="elaboration"
                    value={inputs.elaboration || ""}
                    onChange={onChange}
                    rows="3"
                />
            </div>
        </CardList>
    );
};

export default React.memo(FormBook);
