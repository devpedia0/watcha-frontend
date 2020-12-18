import React from 'react';
import styled from 'styled-components';

import { CardListSlick, CardPoster } from '../../components';

const Section = ({ data, sizeCard, rank }) => {
  if (Object.keys(data).length === 0) {
    return null;
  }

  const { title, description, poster, list } = data;

  return (
    <Wrapper>
      <CardListSlick title={title} description={description} posterUrl={poster}>
        {list.map((item, idx) => (
          <CardPoster
            key={idx}
            item={item}
            size={sizeCard}
            rank={rank && idx + 1}
          />
        ))}
      </CardListSlick>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div``;
