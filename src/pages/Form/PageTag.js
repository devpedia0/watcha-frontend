import React from "react";

// components
import FormLayout from "../../layouts/FormLayout";
import CardList from "../../component/CardList/CardList";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    description: "",
};

const PageTag = () => {
    const { inputs, onChange, onSubmit } = useInputs(initialValue);

    const handleSubmit = () => {
        onSubmit("/admin/tags", inputs);
    };

    return (
        <FormLayout>
            <CardList title="태그 등록">
                <div className="form-group">
                    <label>설명</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={inputs.description}
                        onChange={onChange}
                        rows="3"
                        few={"Few"}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </CardList>
        </FormLayout>
    );
};

export default PageTag;
