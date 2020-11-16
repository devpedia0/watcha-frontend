import React from "react";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    name: "",
    profile_image_id: "",
    description: "",
};

const FormPeople = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);
    return (
        <form>
            <h2 className="mb-3">관계자 추가</h2>
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
        </form>
    );
};

export default FormPeople;