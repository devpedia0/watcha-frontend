import React, { useState, useEffect } from 'react';
import history from '../../history';
import styled from 'styled-components';
import api from '../../services/api';
// import axios from 'axios';

<<<<<<< HEAD
<<<<<<< HEAD
import BoxImg from '../Box/BoxImg';
import useOpen from '../../Hooks/useOpen';
import Modal from './Modal';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
=======
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4
import BoxImg from "../Box/BoxImg";
import useOpen from "../../hooks/useOpen";
import Modal from "./Modal";
import Card from "../Card/Card";
import { FormSection } from "..";
<<<<<<< HEAD
>>>>>>> 6021e5a547a7bc1c81fddc5c878b0ad7f402d4d2
=======

>>>>>>> 8e5ccb44def4bb0d1f008d7ad213251e42826ed4

const Wrapper = styled.div`
  label {
    margin: 10px 0;
  }
`;

const ModalParticipant = ({
  selectedList,
  inputs,
  onChange,
  onClickSave,
  onClickRow,
}) => {
  const pageId = history.location.pathname.split('/')[2];
  const [isOpen, onClickOpen, onClickClose] = useOpen();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const handleClickSave = () => {
    onClickSave();
    onClickClose();
  };
  useEffect(() => {
    const getAPIdata = async () => {
      const res = await api.get(`admin/participants?page=1&size=20`);
      //const res = await axios.get(`http://localhost:8080/participants?page=1&size=20`);
      setData(res.data);
    };

    getAPIdata();
  }, [pageId]);

<<<<<<< HEAD
<<<<<<< HEAD
  const handleClickSearch = async () => {
    const res = await api.get(`/participants?page=1&size=20&search=${search}`);
    setData(res.data);
  };

  return (
    <>
      <BoxImg width="100px" height="100px" onClick={onClickOpen} />
      <Modal
        title="인물추가"
        isOpen={isOpen}
        onClick={handleClickSave}
        onClickClose={onClickClose}>
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
          <CardList title={'인물 검색'}>
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
              <Card
                key={idx}
                item={item}
                radius="50%"
                onClickSelect={onClickRow}
                selected={inputs.id === item.id}
                disabled={selectedList.indexOf(item.id) > -1}
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
    const handleClickSearch = async () => {
        console.log("?");
        const res = await api.get(
            `admin/participants?page=1&size=20&query=${search}`
        );
        console.log("?s", res);
        setData(res.data);
    };

    return (
        <>
            <BoxImg width="100px" height="100px" onClick={onClickOpen} />
            <Modal
                title="인물추가"
                isOpen={isOpen}
                onClick={handleClickSave}
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
                                <span className="input-group-text">검색</span>
                            </div>
                        </div>
                        <br />
                        {data.map((item, idx) => (
                            <Card
                                key={idx}
                                item={item}
                                radius="50%"
                                onClickSelect={onClickRow}
                                selected={inputs.id === item.id}
                                disabled={selectedList.indexOf(item.id) > -1}
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

export default ModalParticipant;
