import React from "react";
import useInputs from "../../Hooks/useInputs";
import FormContainer from "../../styles/FormContainer";

const initialValue = {
    user_id: "",
    title: "",
    description: "",
    delete_yn: "",
};

const FormCollection = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);
    return (
        <FormContainer className="card">
            <div className="card-header bg-white d-flex justify-content-between">
                <h3>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-journal-bookmark-fill mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        <path
                            fillRule="evenodd"
                            d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
                        />
                    </svg>
                    컬렉션
                </h3>
            </div>
            <div className="card-body">
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
            </div>
        </FormContainer>
    );
};

export default FormCollection;
