
import React from 'react';
// import styled from "styled-components";
import Rank from '../component/Rank';
import Recommend from '../component/Recommend';
import Collection from '../component/Collection';

// const Wrapper = styled.div``;

const Home = () => {
  return (
    <div>
      <Rank />
      <Rank />
      <Rank />
      <Recommend />
      <Recommend />
      <Recommend />
      <Collection />
    </div>
  );

};

export default Home;
