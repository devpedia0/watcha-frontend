import React from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";

// components
import FormContent from "../../component/Form/FormContent";
import FormMovie from "../../component/Form/FormMovie";
import FormRoleList from "../../component/Form/FormRoleList";
import FormTagList from "../../component/Form/FormTagList";

const initialValue = {
    file: "",
    mainTitle: "",
    category: "",
    productionDate: "",
    description: "",
    originTitle: "",
    countryCode: "",
    runningTimeInMinutes: "",
    bookRate: "",
    totalAudience: "",
    isWatchaContent: "",
    isNetflixContent: "",
    roleList: [],
    tagList: [],
};

const PageMovie = () => {
    const { inputs, setInputs, errors, onChange, onSubmit } = useInputs(
        initialValue
    );
    console.log(errors);
    const handleSubmit = () => {
        let { file, tagList, ...body } = inputs;
        let sendData = { ...body, tagList: tagList.map((tag) => tag.id) };
        let formData = new FormData();
        formData.append("file", inputs.file);
        formData.append(
            "body",
            new Blob([JSON.stringify(sendData)], {
                type: "application/json",
            })
        );

        onSubmit("/admin/movies", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <FormLayout>
            <FormContent
                title="영화 추가"
                inputs={inputs}
                onChange={onChange}
            />
            <FormMovie inputs={inputs} onChange={onChange} />
            <FormRoleList roleList={inputs.roleList} setRoleList={setInputs} />
            <FormTagList tagList={inputs.tagList} setTagList={setInputs} />
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
