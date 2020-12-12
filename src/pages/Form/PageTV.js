import React from "react";
import useInputs from "../../Hooks/useInputs";
import LayoutForm from "../../layouts/LayoutForm";
import {

    FormSection,
    File,
    Input,
    SelectCtg,
    YearPicker,
    Textarea,
    RadioYN,
    FormRoles,
    FormTags,
} from "../../components";

const initialValue = {
    file: "",
    mainTitle: "",
    category: "",
    productionDate: new Date(),
    description: "",
    originTitle: "",
    countryCode: "",
    isWatchaContent: "false",
    isNetflixContent: "false",
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
        <LayoutForm>
            <FormSection title="TV 추가">
                <div className="row">
                    <div className="col-4">
                        <File
                            name="file"
                            value={inputs.file}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-8">
                        <Input
                            title="제목"
                            name="mainTitle"
                            value={inputs.mainTitle}
                            onChange={onChange}
                            error={errors.mainTitle}
                        />

                        <SelectCtg
                            title="카테고리"
                            name="category"
                            value={inputs.category}
                            onChange={onChange}
                            error={errors.category}
                        />


                        <YearPicker
                            title="제작연도"
                            name="productionDate"
                            value={inputs.productionDate}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <Textarea
                    title="설명"
                    name="description"
                    value={inputs.description}
                    onChange={onChange}
                    error={errors.description}
                />
            </FormSection>
            <FormSection title="추가 정보">
                <Input
                    title="원제목"
                    name="originTitle"
                    value={inputs.originTitle}
                    onChange={onChange}
                    error={errors.originTitle}
                />
                <Input
                    title="국가코드"
                    name="countryCode"
                    value={inputs.countryCode}
                    onChange={onChange}
                    error={errors.countryCode}
                />

                <RadioYN
                    title="왓챠여부"
                    name="isWatchaContent"
                    value={inputs.isWatchaContent}
                    onChange={onChange}
                />
                <RadioYN
                    title="넷플릭스 여부"
                    name="isNetflixContent"
                    value={inputs.isNetflixContent}
                    onChange={onChange}
                />

                <FormRoles
                    roles={inputs.roles}
                    setRoles={setInputs}
                    error={errors.roles}
                />
                <FormTags
                    tags={inputs.tags}
                    setTags={setInputs}
                    error={errors.tags}
                />
            </FormSection>
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
            >
                submit
            </button>
        </LayoutForm>
    );
};

export default PageTV;
