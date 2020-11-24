import React from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";

import Title from "../../styles/Title";
import {
    File,
    Input,
    SelectCtg,
    YearPicker,
    Textarea,
    FormRoles,
    FormTags,
} from "../../component/Form";

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
            <Title>영화 추가</Title>
            <div className="row">
                <div className="col-4">
                    <File name="file" value={inputs.file} onChange={onChange} />
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
                rows="3"
            />

            <Title>추가 정보</Title>

            <Input
                title="부제목"
                name="subtitle"
                value={inputs.subtitle}
                onChange={onChange}
                error={errors.subtitle}
            />
            <Input
                title="페이지"
                name="page"
                value={inputs.page}
                onChange={onChange}
                error={errors.page}
            />
            <Textarea
                title="설명"
                name="contents"
                value={inputs.contents}
                onChange={onChange}
                error={errors.contents}
            />
            <Textarea
                title="출판사 설명"
                name="elaboration"
                value={inputs.elaboration}
                onChange={onChange}
                error={errors.elaboration}
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
