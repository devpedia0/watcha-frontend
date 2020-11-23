import React from "react";

// components
import FormLayout from "../../layouts/FormLayout";
import CardList from "../../component/CardList/CardList";
import useInputs from "../../Hooks/useInputs";
import { Textarea } from "../../component/Form";

const initialValue = {
    description: "",
};

const PageTag = () => {
    const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

    const handleSubmit = () => {
        console.log(inputs);
        onSubmit("/admin/tags", inputs);
    };

    return (
        <FormLayout>
            <CardList title="태그 등록">
                <Textarea
                    title="설명"
                    name="description"
                    value={inputs.description}
                    onChange={onChange}
                    error={errors.description}
                    rows="3"
                />
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
