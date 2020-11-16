import React from "react";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    description: "",
};

const FormTag = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);

    return (
        <form>
            <h2 className="mb-3">태그입력</h2>
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

export default FormTag;
