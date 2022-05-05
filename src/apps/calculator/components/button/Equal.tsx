import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import { roundButton } from '@shared/styles/Mixin';
import { fontAll } from '@shared/styles/Variables';

const Button = styled.button`
  ${roundButton(5)}
  font-size: 2.5rem;
  font-family: ${fontAll.popp};
  color: #ffffff;
  background-color: #ff9102;
`;

function EqualButton() {
  const { display, equal, setEqual, calculate, storedNum } =
    useContext(Context);

  const handleClick = () => {
    if (equal.isClicked) {
      calculate(Number(display), equal.num);
    } else {
      const prev = Number(display);
      setEqual({ isClicked: true, num: prev });
      calculate(storedNum, prev);
    }
  };
  return <Button onClick={handleClick}>=</Button>;
}

export default EqualButton;
