import React from 'react';
import useInputs from '../../Hooks/useInputs';

<<<<<<< HEAD
<<<<<<< HEAD
import LayoutForm from '../../layouts/LayoutForm';
import { CardList, Input, Textarea } from '../../components';

const initialValue = {
  user_id: '',
  title: '',
  description: '',
  delete_yn: 'n',
};

const PageCollection = () => {
  const pathname = '';
  const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
import { FormRoles, FormSection, Input, Textarea } from "../../components";

const initialValue = {
    user_id: "",
    title: "",
    description: "",
    delete_yn: "n",
    roles: [],
};

const PageCollection = () => {
    const pathname = "";
    const { inputs, setInputs, errors, onChange, onSubmit } = useInputs(
        initialValue
    );
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

  const handleSubmit = () => {
    onSubmit(pathname, inputs);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <LayoutForm>
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
          onSubmit={handleSubmit}>
          Submit
        </button>
      </CardList>
    </LayoutForm>
  );
=======
    return (
        <FormSection title="컬렉션추가">
            <Input
                title="유저"
                name="user_id"
                value={inputs.user_id}
                onChange={onChange}
                error={errors.user_id}
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
            <FormRoles
                roles={inputs.roles}
                setRoles={setInputs}
                error={errors.roles}
            />
            <button
                type="button"
                className="btn btn-primary"
                onSubmit={handleSubmit}
            >
                Submit
            </button>
        </FormSection>
    );
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

    return (
        <FormSection title="컬렉션추가">
            <Input
                title="유저"
                name="user_id"
                value={inputs.user_id}
                onChange={onChange}
                error={errors.user_id}
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
            <FormRoles
                roles={inputs.roles}
                setRoles={setInputs}
                error={errors.roles}
            />
            <button
                type="button"
                className="btn btn-primary"
                onSubmit={handleSubmit}
            >
                Submit
            </button>
        </FormSection>
    );

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
};

export default PageCollection;
