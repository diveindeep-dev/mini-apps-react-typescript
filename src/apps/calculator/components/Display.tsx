import React, { useContext } from 'react';
import { Context } from '../Context';
import styled from 'styled-components';

const H2 = styled.h2`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 8rem;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 5rem;
`;

function Display() {
  const { display } = useContext(Context);

  let formatted = Number(display).toLocaleString('ko-KR');
  const matchDecimal = display.match(/([0-9]*)(\.\d*?)$/);

  if (matchDecimal) {
    const integer = Number(matchDecimal[1]).toLocaleString('ko-KR');
    formatted = `${integer}${matchDecimal[2]}`;
  }

  return <H2>{formatted}</H2>;
}

export default Display;
