import React from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";

// components
import FormContent from "../../component/Form/FormContent";
import FormTV from "../../component/Form/FormTV";
import FormRoleList from "../../component/Form/FormRoleList";
import FormTagList from "../../component/Form/FormTagList";

const initialValue = {
    file: "",
    mainTitle: "",
    category: "",
    productionDate: new Date(),
    description: "",
    originTitle: "",
    countryCode: "",
    isWatchaContent: "",
    isNetflixContent: "",
    roles: [],
    tags: [],
};

const PageTV = () => {
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
        onSubmitFile("/admin/tv_shows", sendData, "poster");
    };

    return (
        <FormLayout>
            <FormContent
                title="TV 추가"
                inputs={inputs}
                onChange={onChange}
                errors={errors}
            />
            <FormTV inputs={inputs} onChange={onChange} errors={errors} />
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

export default PageTV;
