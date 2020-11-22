import React, { useState, useRef } from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";

// components
import { ImgContantainer } from "../../styles/ImgContainer";
import CardList from "../../component/CardList/CardList";

const initialValue = {
    file: "",
    // id: "",
    name: "",
    //profileImagePath: "",
    description: "",
};

const PageParticipant = () => {
    const imgRef = useRef();
    const { inputs, errors, onChange, onSubmitFile } = useInputs(initialValue);

    const handleClickImage = () => imgRef.current.click();
    const handleSubmit = () => {
        if (!inputs.file) {
            alert("파일을 추가해주세요.");
        }
        onSubmitFile("/admin/participants", inputs, "profile");
    };

    const imageUrl = inputs.profileImagePath
        ? inputs.profileImagePath
        : inputs.file
        ? URL.createObjectURL(inputs.file)
        : "";
    console.log(errors);
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
                                name="name"
                                value={inputs.name}
                                onChange={onChange}
                                className={`form-control ${
                                    errors.name && "is-invalid"
                                }`}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label>설명</label>
                            <textarea
                                name="description"
                                value={inputs.description}
                                onChange={onChange}
                                rows="3"
                                className={`form-control ${
                                    errors.description && "is-invalid"
                                }`}
                            />
                            {errors.description && (
                                <div className="invalid-feedback">
                                    {errors.description}
                                </div>
                            )}
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
