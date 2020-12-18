import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import history from '../../history';

import api from '../../services/api';
import Section from '../MyData/Section';

const MyMovie = () => {
  const pathname = history.location.pathname;
  const id = localStorage.getItem('id');
  const charType = pathname === '/' ? 'movies' : pathname.split('/')[1];
  const [state, setState] = useState('movies');

  const getDataAPI = useCallback(async () => {
    if (state.step <= 4) {
      const baseUrl = `/users/${id}/movies/ratings`;
      const res = await api.get(baseUrl);
      console.log(res);
    }
  }, []);

  const infiniteScroll = useCallback(() => {
    let elem = document.documentElement;
    let body = document.body;

    let scrollHeight = Math.max(elem.scrollHeight, body.scrollHeight);
    let scrollTop = Math.max(elem.scrollTop, body.scrollTop);
    let clientHeight = elem.clientHeight;

    if (scrollTop + 200 >= scrollHeight - clientHeight) {
      if (state.step < 5) {
        getDataAPI();
        setState({
          ...state,
          loading: true,
        });
      }
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [getDataAPI, state]);

  useEffect(() => {
    if (!state.loading) {
      window.addEventListener('scroll', infiniteScroll);
    }
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [infiniteScroll, state.loading]);

  useEffect(() => {
    const fetchAPI = async () => {
      const baseUrl = `/public/${charType}/rankings`;
      const res = await api.get(baseUrl);
      setState((prevState) => ({
        ...prevState,
        box_office: res.data[0],
        mars: res.data[1],
        netflix: res.data[2],
      }));
    };
    fetchAPI();
  }, [charType]);

  return (
    <Wrapper>
      <Section data={state} rank={true} />
    </Wrapper>
  );
};

export default MyMovie;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 0px);
  margin-top: 74px;
  max-width: 1320px;
  margin-bottom: 20px;
  margin-right: 15px;
  margin-left: 15px;
  @media only screen and (min-width: 600px) {
    min-height: calc(100vh - 343px);
    margin-top: 74px;
  }

  @media only screen and (min-width: 719px) {
    margin-bottom: 30px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 760px) {
    margin-right: 3.5%;
    margin-left: 3.5%;
    margin-top: 80px;
  }
  @media only screen and (min-width: 1100px) {
    margin-bottom: 42px;
    margin-right: 60px;
    margin-left: 60px;
    margin-top: 86px;
  }
  @media only screen and (min-width: 1440px) {
    margin-right: auto;
    margin-left: auto;
  }
`;
