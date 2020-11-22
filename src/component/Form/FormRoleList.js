import React from "react";
import styled from "styled-components";

import useInputs from "../../Hooks/useInputs";

import ModalParticipant from "../Modal/ModalParticipant";
import CardList from "../CardList/CardList";
import Card from "../Card/Card";

const initialValue = {
    role: "",
    characterName: "",
    participantId: "",
};

const FormRoleList = ({ roleList, setRoleList }) => {
    const { inputs, setInputs, onChange } = useInputs(initialValue);

    const handleClickSave = () => {
        setRoleList((state) => ({
            ...state,
            roleList: [inputs, ...roleList],
        }));

        setInputs(initialValue);
    };

    const handleClickDelete = (rowIdx) => {
        setRoleList((state) => ({
            ...state,
            roleList: state.filter((item) => item.id !== rowIdx),
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
                selectedList={roleList.map((item) => item.id)}
                inputs={inputs}
                onChange={onChange}
                onClickRow={handleClickRow}
                onClickSave={handleClickSave}
            />
            <br />
            {roleList.map((item, idx) => (
                <Card
                    radius="50%"
                    key={idx}
                    item={item}
                    onClickDelete={handleClickDelete}
                />
            ))}
        </CardList>
    );
};

export default React.memo(FormRoleList);
