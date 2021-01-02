import React, { useState, useEffect } from "react";
import history from "../../../../../history";
import styled from "styled-components";
import api from "../../../../../services/api";

import BoxImg from "../../../../../styles/BoxImg";
import useOpen from "../../../../../Hooks/useOpen";
import Card from "../../../../../components/Card/Card";
import { FormSection, ModalWrapper } from "../../../../../components";

const ModalParticipant = ({
    selectedList,
    inputs,
    onChange,
    onClickSave,
    onClickRow,
}) => {
    const pageId = history.location.pathname.split("/")[2];
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const handleClickSave = () => {
        onClickSave();
        onClickClose();
    };
    useEffect(() => {
        const getAPIdata = async () => {
            const res = await api.get(`admin/participants?page=1&size=20`);
            setData(res.data);
        };

        getAPIdata();
    }, [pageId]);

    const handleClickSearch = async () => {
        const res = await api.get(
            `admin/participants?page=1&size=20&query=${search}`
        );
        setData(res.data);
    };

    return (
        <>
            <BoxImg width="100px" height="100px" onClick={onClickOpen} />
            {isOpen && (
                <ModalWrapper
                    width="750px"
                    height="700px"
                    onCloseModal={onClickClose}
                >
                    <Header className="card-header bg-white d-flex justify-content-between">
                        <h3>인물추가</h3>
                        <div>
                            <button
                                className="btn btn-secondary mr-1"
                                type="button"
                                onClick={onClickClose}
                            >
                                닫기
                            </button>
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleClickSave}
                            >
                                사용하기
                            </button>
                        </div>
                    </Header>
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
                                name="characterName"
                                value={inputs.characterName}
                                onChange={onChange}
                            />
                        </div>
                        <FormSection title={"인물 검색"}>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    name="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <div
                                    className="input-group-append"
                                    onClick={handleClickSearch}
                                >
                                    <span className="input-group-text">
                                        검색
                                    </span>
                                </div>
                            </div>
                            <br />
                            {data.map((item, idx) => {
                                const disabled =
                                    selectedList.indexOf(item.id) > -1;
                                return (
                                    <Card
                                        key={idx}
                                        radius="50%"
                                        imageUrl={item.profileImagePath}
                                        title={item.name}
                                        subTitle={
                                            item.role +
                                            (item.characterName
                                                ? " | " + item.characterName
                                                : "")
                                        }
                                        AddComponent={
                                            <button
                                                type="button"
                                                className={`btn ${
                                                    inputs.id === item.id &&
                                                    "btn-success"
                                                }`}
                                                onClick={() => onClickRow(item)}
                                                disabled={disabled}
                                            >
                                                {disabled ? "추가완료" : "선택"}
                                            </button>
                                        }
                                    />
                                );
                            })}
                        </FormSection>
                    </Wrapper>
                </ModalWrapper>
            )}
        </>
    );
};

export default ModalParticipant;

const Header = styled.div`
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const Wrapper = styled.div`
    label {
        margin: 10px 0;
    }
`;
