import React from "react";
import FormContainer from "../../styles/FormContainer";

const FormTag = ({ data, onChange, onSubmit }) => {
    return (
        <FormContainer className="card">
            <div className="card-header bg-white d-flex justify-content-between">
                <h3>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-tag-fill mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        />
                    </svg>
                    태그입력
                </h3>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>설명</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={data.description}
                        onChange={onChange}
                        rows="3"
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div>
        </FormContainer>
    );
};

export default React.memo(FormTag);
