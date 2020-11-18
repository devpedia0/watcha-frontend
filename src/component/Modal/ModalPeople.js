import React from "react";
import Modal from "./Modal";

import styled from "styled-components";
import CardList from "../CardList/CardList";
import { Search } from "../../component/Header";
import data from "../../img/data";
const Wrapper = styled.div`
    label {
        margin: 10px 0;
    }
`;

const ModalPeople = ({
    isOpen,
    onClickClose,
    inputs,
    onChange,
    onClickSave,
    onClickRow,
}) => {
    return (
        <Modal
            title="인물추가"
            isOpen={isOpen}
            onClick={onClickSave}
            onClickClose={onClickClose}
        >
            <Wrapper>
                <div className="form-group">
                    <label>역할</label>
                    <input
                        className="form-control"
                        name="role"
                        value={inputs.role}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label>극중이름</label>
                    <input
                        className="form-control"
                        name="act_name"
                        value={inputs.act_name}
                        onChange={onChange}
                    />
                </div>
                <CardList
                    data={data}
                    selectedId={inputs.participant_id}
                    title={"인물 검색"}
                    circle={true}
                    onClickRow={onClickRow}
                >
                    <Search>
                        <input placeholder="검색하기" autoComplete="off" />
                    </Search>
                </CardList>
            </Wrapper>
        </Modal>
    );
};

export default ModalPeople;
