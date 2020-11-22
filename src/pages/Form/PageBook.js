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
    productionDate: "",
    description: "",

    subtitle: "",
    contents: "",
    page: "",
    elaboration: "",

    roleList: [],
    tagList: [],
};

const PageBook = () => {
    const { inputs, setInputs, onChange, onSubmit } = useInputs(initialValue);

    const handleSubmit = () => {
        let { file, tagList, ...body } = inputs;
        let sendData = { ...body, tagList: tagList.map((tag) => tag.id) };
        console.log(sendData);
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
            <FormContent title="책 추가" inputs={inputs} onChange={onChange} />
            <FormBook inputs={inputs} onChange={onChange} />
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

export default PageBook;
