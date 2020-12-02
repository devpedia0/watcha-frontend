import React from 'react';
import useInputs from '../../Hooks/useInputs';
import LayoutForm from '../../layouts/LayoutForm';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  CardList,
  File,
  Input,
  SelectCtg,
  YearPicker,
  Textarea,
  RadioYN,
  FormRoles,
  FormTags,
} from '../../components';
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
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
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

const initialValue = {
  file: '',
  mainTitle: '',
  category: '',
  productionDate: new Date(),
  description: '',
  originTitle: '',
  countryCode: '',
  isWatchaContent: 'false',
  isNetflixContent: 'false',
  roles: [],
  tags: [],
};

const PageTV = () => {
  const { inputs, setInputs, errors, onChange, onSubmitFile } = useInputs(
    initialValue
  );

  const handleSubmit = () => {
    if (!inputs.file) {
      alert('파일을 추가해주세요.');
    }

    let { roles, tags, ...body } = inputs;
    let sendData = {
      ...body,
      roles: roles.map((role) => ({ ...role, participantId: role.id })),
      tags: tags.map((tag) => tag.id),
    };
    onSubmitFile('/admin/tv_shows', sendData, 'poster');
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <LayoutForm>
      <CardList title="TV 추가">
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
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
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
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

            <SelectCtg
              title="카테고리"
              name="category"
              value={inputs.category}
              onChange={onChange}
              error={errors.category}
            />

<<<<<<< HEAD
<<<<<<< HEAD
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
      </CardList>
      <CardList title="추가 정보">
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
=======
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
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
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

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

<<<<<<< HEAD
<<<<<<< HEAD
        <FormRoles
          roles={inputs.roles}
          setRoles={setInputs}
          error={errors.roles}
        />
        <FormTags tags={inputs.tags} setTags={setInputs} error={errors.tags} />
      </CardList>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={handleSubmit}>
        submit
      </button>
    </LayoutForm>
  );
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
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
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
};

export default PageTV;
