import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../../services/api';

<<<<<<< HEAD
<<<<<<< HEAD
import useOpen from '../../Hooks/useOpen';
import Modal from './Modal';
import CardList from '../CardList/CardList';
import CardTag from '../Card/CardTag';
=======
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
import useOpen from "../../hooks/useOpen";
import Modal from "./Modal";
// import CardTag from "../Card/CardTag";
import { FormSection, CardTag } from "..";
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

const Wrapper = styled.div`
  label {
    margin: 10px 0;
  }
`;

const ModalTag = ({ tags, onClickSave }) => {
  const [isOpen, onClickOpen, onClickClose] = useOpen();
  const [newTags, setNewTagS] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    const getAPIdata = async () => {
      const res = await api.get(`/admin/tags?page=1&size=20`);
      //const res = await axios.get(`http://localhost:8080/admin/participants?page=1&size=20`);
      setData(res.data);
    };
=======
=======
>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
    useEffect(() => {
        const getAPIdata = async () => {
            const res = await api.get(`/admin/tags?page=1&size=20`);
            console.log(res);
            //const res = await axios.get(`http://localhost:8080/admin/participants?page=1&size=20`);
            setData(res.data);
        };
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

    getAPIdata();
  }, []);

  useEffect(() => {
    setNewTagS(tags);
  }, [tags]);

<<<<<<< HEAD
<<<<<<< HEAD
  const handleClickSearch = async () => {
    const res = await api.get(`/admin/tags?page=1&size=20&search=${search}`);
    setData(res.data);
  };
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
    const handleClickSearch = async () => {
        const res = await api.get(`/admin/tags?page=1&size=20&query=${search}`);
        setData(res.data);
    };
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

  const handleClickSave = () => {
    onClickSave(newTags);
    onClickClose();
  };

  const handleClick = useCallback(
    (newItem) => {
      newTags.indexOf(newItem) > -1
        ? setNewTagS((state) => state.filter((item) => item !== newItem))
        : setNewTagS((state) => [...state, newItem]);
    },
    [newTags]
  );

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary mb-2"
          onClick={onClickOpen}>
          태그 추가
        </button>
      </div>
      <Modal
        title="인물추가"
        isOpen={isOpen}
        onClick={handleClickSave}
        onClickClose={onClickClose}>
        <Wrapper>
          <CardList title={'태그 검색'}>
            <div className="input-group">
              <input
                className="form-control"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="input-group-append" onClick={handleClickSearch}>
                <span className="input-group-text">검색</span>
              </div>
            </div>
            <br />
            {data.map((item, idx) => (
              <CardTag
                key={idx}
                item={item}
                selected={newTags.map((tag) => tag.id).indexOf(item.id) > -1}
                onClick={handleClick}
              />
            ))}
          </CardList>
        </Wrapper>
      </Modal>
    </>
  );
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
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
            <Modal
                title="인물추가"
                isOpen={isOpen}
                onClick={handleClickSave}
                onClickClose={onClickClose}
            >
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
                                <span className="input-group-text">검색</span>
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
            </Modal>
        </>
    );
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
};

export default ModalTag;
