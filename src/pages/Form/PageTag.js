import React from 'react';
import useInputs from '../../Hooks/useInputs';
import LayoutForm from '../../layouts/LayoutForm';
import { CardList, Textarea } from '../../components';

const initialValue = {
  description: '',
};

const PageTag = () => {
  const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

  const handleSubmit = () => {
    onSubmit('/admin/tags', inputs);
  };

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
};

export default PageTag;
