import React from 'react';
import useInputs from '../../Hooks/useInputs'
;
import { FormSection, Textarea } from '../../components';

const initialValue = {
  description: '',
};

const PageTag = () => {
  const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

  const handleSubmit = () => {
    onSubmit('/admin/tags', inputs);
  };

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
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </FormSection>
  );
};

export default PageTag;
