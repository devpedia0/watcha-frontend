import React from "react";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    subtitle: "",
    page: "",
    contents: "",
    description2: "",
};

const FormBook = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);
    return (
        <form>
            <h2 className="mb-3">책(2/3)</h2>
            <div className="form-group">
                <label>부제목</label>
                <input
                    className="form-control"
                    name="subtitle"
                    value={inputs.subtitle}
                    onChange={handleChangeInputs}
                />
            </div>
            <div className="form-group">
                <label>페이지</label>
                <input
                    className="form-control"
                    name="page"
                    value={inputs.page}
                    onChange={handleChangeInputs}
                />
            </div>
            <div className="form-group">
                <label>목차</label>
                <textarea
                    className="form-control"
                    name="contents"
                    value={inputs.contents}
                    onChange={handleChangeInputs}
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label>출판사 설명</label>
                <textarea
                    className="form-control"
                    name="description2"
                    value={inputs.description2}
                    onChange={handleChangeInputs}
                    rows="3"
                />
            </div>

            <button type="button" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default FormBook;
