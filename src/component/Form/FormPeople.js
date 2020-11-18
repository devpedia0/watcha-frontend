import React from "react";
import useInputs from "../../Hooks/useInputs";
import FormContainer from "../../styles/FormContainer";

const initialValue = {
    name: "",
    profile_image_id: "",
    description: "",
};

const FormPeople = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);
    return (
        <FormContainer className="card">
            <div className="card-header bg-white d-flex justify-content-between">
                <h3>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-people-fill mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                        />
                    </svg>
                    인물 추가
                </h3>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>이름</label>
                    <input
                        className="form-control"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInputs}
                    />
                </div>
                <div className="form-group">
                    <label>프로필사진</label>
                    <div className="custom-file">
                        <input
                            name="profile_image_id"
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
                    <label>설명</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={inputs.description}
                        onChange={handleChangeInputs}
                        rows="3"
                    />
                </div>

                <button type="button" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </FormContainer>
    );
};

export default React.memo(FormPeople);
