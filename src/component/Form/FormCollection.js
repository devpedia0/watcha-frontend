import React from "react";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    user_id: "",
    title: "",
    description: "",
    delete_yn: "",
};

const FormContent = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);
    return (
        <form>
            <h2 className="mb-3">컬렉션</h2>
            <div className="form-group">
                <label>유저</label>
                <input
                    className="form-control"
                    name="user_id"
                    value={inputs.user_id}
                    onChange={handleChangeInputs}
                    disabled
                />
            </div>

            <div className="form-group">
                <label>제목</label>
                <input
                    className="form-control"
                    name="title"
                    value={inputs.title}
                    onChange={handleChangeInputs}
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
                <label>삭제</label>
                <br />
                {[
                    { key: "y", title: "동의" },
                    { key: "n", title: "비동의" },
                ].map((option) => (
                    <div
                        key={option.key}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="delete_yn"
                            value={option.key}
                            checked={option.key === inputs.delete_yn}
                            onChange={handleChangeInputs}
                            id={`delete_yn_${option.key}`}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`delete_yn_${option.key}`}
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

export default FormContent;
