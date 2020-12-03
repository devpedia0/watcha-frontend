import React from "react";
import useInputs from "../../Hooks/useInputs";
import { FormRoles, FormSection, Input, Textarea } from "../../components";

const initialValue = {
    user_id: "",
    title: "",
    description: "",
    delete_yn: "n",
    roles: [],
};

const PageCollection = () => {
    const pathname = "";
    const { inputs, setInputs, errors, onChange, onSubmit } = useInputs(
        initialValue
    );

    const handleSubmit = () => {
        onSubmit(pathname, inputs);
    };

    return (
        <FormSection title="컬렉션추가">
            <Input
                title="유저"
                name="user_id"
                value={inputs.user_id}
                onChange={onChange}
                error={errors.user_id}
            />

            <Input
                title="제목"
                name="title"
                value={inputs.title}
                onChange={onChange}
                error={errors.title}
                disabled
            />
            <Textarea
                title="설명"
                name="description"
                value={inputs.description}
                onChange={onChange}
                error={errors.description}
            />
            <FormRoles
                roles={inputs.roles}
                setRoles={setInputs}
                error={errors.roles}
            />
            <button
                type="button"
                className="btn btn-primary"
                onSubmit={handleSubmit}
            >
                Submit
            </button>
        </FormSection>
    );
};

export default PageCollection;
