import React from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";

// components
import FormContent from "../../component/Form/FormContent";
import FormBook from "../../component/Form/FormBook";
import FormRoleList from "../../component/Form/FormRoleList";
import FormTagList from "../../component/Form/FormTagList";

const initialValue = {
    file: "",
    mainTitle: "",
    category: "",
    productionDate: new Date(),
    description: "",
    subtitle: "",
    contents: "",
    page: "",
    elaboration: "",
    roles: [],
    tags: [],
};

const PageBook = () => {
    const { inputs, setInputs, errors, onChange, onSubmitFile } = useInputs(
        initialValue
    );

    const handleSubmit = () => {
        if (!inputs.file) {
            alert("파일을 추가해주세요.");
        }

        let { roles, tags, ...body } = inputs;
        let sendData = {
            ...body,
            roles: roles.map((role) => ({ ...role, participantId: role.id })),
            tags: tags.map((tag) => tag.id),
        };
        onSubmitFile("/admin/books", sendData, "poster");
    };

    return (
        <FormLayout>
            <FormContent
                title="책 추가"
                inputs={inputs}
                onChange={onChange}
                errors={errors}
            />
            <FormBook inputs={inputs} onChange={onChange} errors={errors} />
            <FormRoleList
                roles={inputs.roles}
                setRoles={setInputs}
                error={errors.roles}
            />
            <FormTagList
                tags={inputs.tags}
                setTags={setInputs}
                error={errors.tags}
            />
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
            >
                submit
            </button>
        </FormLayout>
    );
};

export default PageBook;
