import React, { useState, useRef } from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";

// components
import { ImgContantainer } from "../../styles/ImgContainer";
import CardList from "../../component/CardList/CardList";

const initialValue = {
    file: "",
    id: "",
    name: "",
    profileImagePath: "",
    description: "",
};

const PageParticipant = () => {
    const imgRef = useRef();
    const { inputs, onChange, onSubmit } = useInputs(initialValue);

    const handleClickImage = () => imgRef.current.click();
    const handleSubmit = async () => {
        const { file, ...body } = inputs;
        const formData = new FormData();
        formData.append("file", inputs.file);
        formData.append(
            "body",
            new Blob([JSON.stringify(body)], { type: "application/json" })
        );
        onSubmit("/admin/participants", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    const imageUrl = inputs.profileImagePath
        ? inputs.profileImagePath
        : inputs.file
        ? URL.createObjectURL(inputs.file)
        : "";

    return (
        <FormLayout>
            <CardList title="인물 등록">
                <div className="row">
                    <div className="col-4 d-flex flex-column">
                        <ImgContantainer
                            src={imageUrl}
                            onClick={handleClickImage}
                        />
                        <div className="form-group">
                            <div
                                className="custom-file"
                                style={{ display: "none" }}
                            >
                                <input
                                    name="file"
                                    type="file"
                                    className="custom-file-input"
                                    ref={imgRef}
                                    onChange={onChange}
                                    hidden
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="form-group">
                            <label>이름</label>
                            <input
                                className="form-control"
                                name="name"
                                value={inputs.name}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>설명</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={inputs.description}
                                onChange={onChange}
                                rows="3"
                            />
                        </div>
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
        </FormLayout>
    );
};

export default PageParticipant;
