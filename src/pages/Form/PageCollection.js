import React from "react";
import FormLayout from "../../layouts/FormLayout";
import useInputs from "../../Hooks/useInputs";
// components
import CardList from "../../component/CardList/CardList";

import { Input, Textarea } from "../../component/Form";

const initialValue = {
    user_id: "",
    title: "",
    description: "",
    delete_yn: "n",
};

const PageCollection = () => {
    const pathname = "";
    const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

    const handleSubmit = () => {
        onSubmit(pathname, inputs);
    };

    return (
        <FormLayout>
            <CardList title="컬렉션추가">
                <Input
                    title="유저"
                    name="user_id"
                    value={inputs.user_id}
                    onChange={onChange}
                    error={errors.user_id}
                    disabled
                />

                <Input
                    title="제목"
                    name="title"
                    value={inputs.title}
                    onChange={onChange}
                    error={errors.title}
                    disabled
                />
                <Textarea
                    title="설명"
                    name="description"
                    value={inputs.description}
                    onChange={onChange}
                    error={errors.description}
                />

                {/* <div className="form-group">
                    <label>삭제</label>
                    <br />
                    {[
                        { key: "y", title: "동의" },
                        { key: "n", title: "비동의" },
                    ].map((option) => (
                        <div
                            key={option.key}
                            className="form-check form-check-inline"
                        >
                            <input
                                className="form-check-input"
                                type="radio"
                                name="delete_yn"
                                value={option.key}
                                checked={option.key === inputs.delete_yn}
                                onChange={onChange}
                                id={`delete_yn_${option.key}`}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`delete_yn_${option.key}`}
                            >
                                {option.title}
                            </label>
                        </div>
                    ))}
                </div> */}

                <button
                    type="button"
                    className="btn btn-primary"
                    onSubmit={handleSubmit}
                >
                    Submit
                </button>
            </CardList>
        </FormLayout>
    );
};

export default PageCollection;
