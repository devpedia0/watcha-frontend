<<<<<<< HEAD
import React from 'react';
import useInputs from '../../Hooks/useInputs';
import LayoutForm from '../../layouts/LayoutForm';
import { CardList, Textarea } from '../../components';
=======
import React from "react";
import useInputs from "../../hooks/useInputs";
import { FormSection, Textarea } from "../../components";
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2

const initialValue = {
  description: '',
};

const PageTag = () => {
  const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

  const handleSubmit = () => {
    onSubmit('/admin/tags', inputs);
  };

<<<<<<< HEAD
  return (
    <LayoutForm>
      <CardList title="태그 등록">
        <Textarea
          title="설명"
          name="description"
          value={inputs.description}
          onChange={onChange}
          error={errors.description}
          rows="3"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}>
          Submit
        </button>
      </CardList>
    </LayoutForm>
  );
=======
    return (
        <FormSection title="태그 등록">
            <Textarea
                title="설명"
                name="description"
                value={inputs.description}
                onChange={onChange}
                error={errors.description}
                rows="3"
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </FormSection>
    );
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
};

export default PageTag;
