import React from 'react';

import useInputs from '../../Hooks/useInputs';
<<<<<<< HEAD

<<<<<<< HEAD
import ModalParticipant from '../Modal/ModalParticipant';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
=======
import ModalParticipant from "../Modal/ModalParticipant";
import FormSection from "../Form/FormSection";
import Card from "../Card/Card";
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======
import ModalParticipant from "../Modal/ModalParticipant";
import FormSection from "../Form/FormSection";
import Card from "../Card/Card";

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

const initialValue = {
  role: '',
  characterName: '',
  participantId: '',
};

const FormRoles = ({ roles, setRoles }) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { inputs, setInputs, onChange } = useInputs(initialValue);

  const handleClickSave = () => {
    setRoles((state) => ({
      ...state,
      roles: [inputs, ...roles],
    }));

    setInputs(initialValue);
  };

  const handleClickDelete = (rowIdx) => {
    setRoles((state) => ({
      ...state,
      roles: state.roles.filter((item) => item.id !== rowIdx),
    }));
  };

  const handleClickRow = (item) => {
    setInputs((state) => ({
      ...state,
      ...item,
    }));
  };

  return (
    <CardList title="인물추가">
      <ModalParticipant
        selectedList={roles.map((item) => item.id)}
        inputs={inputs}
        onChange={onChange}
        onClickRow={handleClickRow}
        onClickSave={handleClickSave}
      />
      <br />
      {roles.map((item, idx) => (
        <Card
          radius="50%"
          key={idx}
          item={item}
          onClickDelete={handleClickDelete}
        />
      ))}
    </CardList>
  );
=======
    const { inputs, setInputs, onChange } = useInputs(initialValue);

    const handleClickSave = () => {
        setRoles((state) => ({
            ...state,
            roles: [inputs, ...roles],
        }));

        setInputs(initialValue);
    };

    const handleClickDelete = (rowIdx) => {
        setRoles((state) => ({
            ...state,
            roles: state.roles.filter((item) => item.id !== rowIdx),
        }));
    };

    const handleClickRow = (item) => {
        setInputs((state) => ({
            ...state,
            ...item,
        }));
    };

    return (
        <FormSection title="인물추가">
            <ModalParticipant
                selectedList={roles.map((item) => item.id)}
                inputs={inputs}
                onChange={onChange}
                onClickRow={handleClickRow}
                onClickSave={handleClickSave}
            />
            <br />
            {roles.map((item, idx) => (
                <Card
                    radius="50%"
                    key={idx}
                    item={item}
                    onClickDelete={handleClickDelete}
                />
            ))}
        </FormSection>
    );
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

    const { inputs, setInputs, onChange } = useInputs(initialValue);

    const handleClickSave = () => {
        setRoles((state) => ({
            ...state,
            roles: [inputs, ...roles],
        }));

        setInputs(initialValue);
    };

    const handleClickDelete = (rowIdx) => {
        setRoles((state) => ({
            ...state,
            roles: state.roles.filter((item) => item.id !== rowIdx),
        }));
    };

    const handleClickRow = (item) => {
        setInputs((state) => ({
            ...state,
            ...item,
        }));
    };

    return (
        <FormSection title="인물추가">
            <ModalParticipant
                selectedList={roles.map((item) => item.id)}
                inputs={inputs}
                onChange={onChange}
                onClickRow={handleClickRow}
                onClickSave={handleClickSave}
            />
            <br />
            {roles.map((item, idx) => (
                <Card
                    radius="50%"
                    key={idx}
                    item={item}
                    onClickDelete={handleClickDelete}
                />
            ))}
        </FormSection>
    );

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
};

export default React.memo(FormRoles);
