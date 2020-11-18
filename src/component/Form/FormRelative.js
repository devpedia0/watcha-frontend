import React from "react";
import styled from "styled-components";
import useOpen from "../../Hooks/useOpen";

import useInputs from "../../Hooks/useInputs";
import FormContainer from "../../styles/FormContainer";
import { ImgContantainer } from "../../styles/ImgContainer";
import ModalPeople from "../Modal/ModalPeople";
import CardList from "../CardList/CardList";

const initialValue = {
    role: "",
    act_name: "",
};

const FormRelative = ({ data, setData }) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const { inputs, setInputs, handleChangeInputs } = useInputs(initialValue);

    const handleClickSave = () => {
        setData((state) => ({
            ...state,
            People: [...state.People, inputs],
        }));
        setInputs(initialValue);
        onClickClose();
    };

    const handleClickRow = (item) => {
        setInputs((state) => ({
            ...state,
            ...item,
        }));
    };

    return (
        <FormContainer className="card">
            <div className="card-header bg-white d-flex justify-content-between">
                <h3>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-people-fill mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                        />
                    </svg>
                    인물 추가
                </h3>
                <ModalPeople
                    isOpen={isOpen}
                    onClickClose={onClickClose}
                    inputs={inputs}
                    onChange={handleChangeInputs}
                    onClickSave={handleClickSave}
                    onClickRow={handleClickRow}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onClickOpen}
                >
                    추가하기
                </button>
            </div>
            <div className="card-body">
                <ImgContantainer
                    width="100px"
                    height="100px"
                    onClick={onClickOpen}
                />
                <CardList data={data} title={"추가 리스트"} />
            </div>
        </FormContainer>
    );
};

export default React.memo(FormRelative);
