import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import api from "../../../../../services/api";

import useOpen from "../../../../../Hooks/useOpen";
import { FormSection, CardTag, ModalWrapper } from "../../../../../components";

const ModalTag = ({ tags, onClickSave }) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const [newTags, setNewTagS] = useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getAPIdata = async () => {
            const res = await api.get(`/admin/tags?page=1&size=20`);
            setData(res.data);
        };

        getAPIdata();
    }, []);

    useEffect(() => {
        setNewTagS(tags);
    }, [tags]);

    const handleClickSearch = async () => {
        const res = await api.get(`/admin/tags?page=1&size=20&query=${search}`);
        setData(res.data);
    };

    const handleClickSave = () => {
        onClickSave(newTags);
        onClickClose();
    };

    const handleClick = useCallback(
        (newItem) => {
            newTags.indexOf(newItem) > -1
                ? setNewTagS((state) =>
                      state.filter((item) => item !== newItem)
                  )
                : setNewTagS((state) => [...state, newItem]);
        },
        [newTags]
    );

    return (
        <>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-primary mb-2"
                    onClick={onClickOpen}
                >
                    태그 추가
                </button>
            </div>
            {isOpen && (
                <ModalWrapper
                    width="750px"
                    height="700px"
                    onCloseModal={onClickClose}
                >
                    <Header className="card-header bg-white d-flex justify-content-between">
                        <h3>태그 추가</h3>
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
                        <FormSection title={"태그 검색"}>
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
                            {data.map((item, idx) => (
                                <CardTag
                                    key={idx}
                                    item={item}
                                    selected={
                                        newTags
                                            .map((tag) => tag.id)
                                            .indexOf(item.id) > -1
                                    }
                                    onClick={handleClick}
                                />
                            ))}
                        </FormSection>
                    </Wrapper>
                </ModalWrapper>
            )}
        </>
    );
};

export default ModalTag;

const Wrapper = styled.div`
    label {
        margin: 10px 0;
    }
`;

const Header = styled.div`
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
