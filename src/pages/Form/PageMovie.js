import React from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";
import { validateAll } from "../../utils/validate";
// components
import FormContent from "../../component/Form/FormContent";
import FormMovie from "../../component/Form/FormMovie";
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
    runningTimeInMinutes: "",
    bookRate: "",
    totalAudience: "",
    isWatchaContent: "false",
    isNetflixContent: "false",
    roles: [],
    tags: [],
};

const PageMovie = () => {
    const { inputs, setInputs, errors, onChange, onSubmitFile } = useInputs(
        initialValue
    );

    const handleSubmit = () => {
        if (!inputs.file) {
            alert("파일을 추가해주세요.");
        }

        let { tags, roles, ...body } = inputs;
        let sendData = {
            ...body,
            roles: roles.map((role) => ({ ...role, participantId: role.id })),
            tags: tags.map((tag) => tag.id),
        };
        onSubmitFile("/admin/movies", sendData, "poster");
    };

    return (
        <FormLayout>
            <FormContent
                title="영화 추가"
                inputs={inputs}
                onChange={onChange}
                errors={errors}
            />
            <FormMovie inputs={inputs} onChange={onChange} errors={errors} />

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

export default PageMovie;
