<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import useInputs from '../../Hooks/useInputs';
import LayoutForm from '../../layouts/LayoutForm';
import {
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
import React from "react";
import styled from "styled-components";
import useInputs from "../../hooks/useInputs";
import {
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
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2

const initialValue = {
  file: '',
  mainTitle: '',
  category: '',
  productionDate: new Date(),
  description: '',
  originTitle: '',
  countryCode: '',
  runningTimeInMinutes: '',
  bookRate: '',
  totalAudience: '',
  isWatchaContent: 'false',
  isNetflixContent: 'false',
  roles: [],
  tags: [],
};

const PageMovie = () => {
  const { inputs, setInputs, errors, onChange, onSubmitFile } = useInputs(
    initialValue
  );

  const handleSubmit = () => {
    if (!inputs.file) {
      alert('파일을 추가해주세요.');
    }

    let { tags, roles, ...body } = inputs;
    let sendData = {
      ...body,
      roles: roles.map((role) => ({ ...role, participantId: role.id })),
      tags: tags.map((tag) => tag.id),
    };
<<<<<<< HEAD
    onSubmitFile('/admin/movies', sendData, 'poster');
  };

  return (
    <LayoutForm>
      <CardList title="영화 추가">
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
=======
    return (
        <>
            <FormSection title="영화 추가">
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
                <div className="form-row">
                    <Input
                        className="col"
                        title="국가코드"
                        name="countryCode"
                        value={inputs.countryCode}
                        onChange={onChange}
                        error={errors.countryCode}
                    />

                    <Input
                        className="col"
                        title="상영시간(분)"
                        name="runningTimeInMinutes"
                        value={inputs.runningTimeInMinutes}
                        onChange={onChange}
                        error={errors.runningTimeInMinutes}
                    />
                </div>
                <div className="form-row">
                    <Input
                        className="col"
                        title="예매율"
                        name="bookRate"
                        value={inputs.bookRate}
                        onChange={onChange}
                        error={errors.bookRate}
                    >
                        %
                    </Input>

                    <Input
                        className="col"
                        title="누적관객"
                        name="totalAudience"
                        value={inputs.totalAudience}
                        onChange={onChange}
                        error={errors.totalAudience}
                    />
                </div>
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
            </FormSection>
            <FormRoles
                roles={inputs.roles}
                setRoles={setInputs}
                error={errors.roles}
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
            />

            <YearPicker
              title="제작연도"
              name="productionDate"
              value={inputs.productionDate}
              onChange={onChange}
            />
<<<<<<< HEAD
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
        <div className="form-row">
          <Input
            className="col"
            title="국가코드"
            name="countryCode"
            value={inputs.countryCode}
            onChange={onChange}
            error={errors.countryCode}
          />

          <Input
            className="col"
            title="상영시간(분)"
            name="runningTimeInMinutes"
            value={inputs.runningTimeInMinutes}
            onChange={onChange}
            error={errors.runningTimeInMinutes}
          />
        </div>
        <div className="form-row">
          <Input
            className="col"
            title="예매율"
            name="bookRate"
            value={inputs.bookRate}
            onChange={onChange}
            error={errors.bookRate}>
            %
          </Input>

          <Input
            className="col"
            title="누적관객"
            name="totalAudience"
            value={inputs.totalAudience}
            onChange={onChange}
            error={errors.totalAudience}
          />
        </div>
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
      </CardList>
      <FormRoles
        roles={inputs.roles}
        setRoles={setInputs}
        error={errors.roles}
      />
      <FormTags tags={inputs.tags} setTags={setInputs} error={errors.tags} />
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={handleSubmit}>
        submit
      </button>
    </LayoutForm>
  );
=======
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
            >
                submit
            </button>
        </>
    );
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
};

export default PageMovie;

const Wrapper = styled.div`
  background: #f8f8f8;
  margin-top: 71px;
  padding-top: 2px;
  padding-bottom: 50px;
  width: 100%;

  a {
    padding: 15px 25px;
  }

  label {
    margin: 10px 0;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media only screen and (min-width: 737px) {
    margin-top: 62px;
    height: 100%;
  }
`;
