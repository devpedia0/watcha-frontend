import React from "react";
import useInputs from "../../hooks/useInputs";

import LayoutForm from "../../layouts/LayoutForm";
import { CardList, File, Input, Textarea } from "../../components";

const initialValue = {
    file: "",
    // id: "",
    name: "",
    //profileImagePath: "",
    description: "",
};

const PageParticipant = () => {
    const { inputs, errors, onChange, onSubmitFile } = useInputs(initialValue);

    const handleSubmit = () => {
        if (!inputs.file) {
            alert("파일을 추가해주세요.");
        }
        onSubmitFile("/admin/participants", inputs, "profile");
    };

    return (
        <LayoutForm>
            <CardList title="인물 등록">
                <div className="row">
                    <div className="col-4 d-flex flex-column">
                        <File
                            name="file"
                            value={inputs.file}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-8">
                        <Input
                            title="이름"
                            name="name"
                            value={inputs.name}
                            onChange={onChange}
                            error={errors.name}
                        />
                        <Textarea
                            title="설명"
                            name="description"
                            value={inputs.description}
                            onChange={onChange}
                            error={errors.description}
                            rows="3"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </CardList>
        </LayoutForm>
    );
};

export default PageParticipant;
