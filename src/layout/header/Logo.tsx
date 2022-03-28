import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorAll, fontAll } from '@shared/styles/Variables';
import { flexCenter } from '@shared/styles/Mixin';

const H1 = styled.h1`
  ${flexCenter}
  width: 10rem;
  font-size: 2rem;
  font-family: ${fontAll.logo};
  color: ${colorAll.blue};
  background-color: ${colorAll.yellow};
  border: 5px solid ${colorAll.blue};
  border-radius: 45%;
`;

function Logo() {
  return (
    <Link to="/">
      <H1>MART</H1>
    </Link>
  );
}

export default Logo;
