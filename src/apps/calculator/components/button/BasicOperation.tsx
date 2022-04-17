import React, { useContext } from 'react';
import { Context } from '../../Context';
import styled from 'styled-components';
import { roundButton } from '@shared/styles/Mixin';
import { fontAll } from '@shared/styles/Variables';

interface BasicOperationButtonProps {
  operation: string;
}

const Button = styled.button`
  ${roundButton(5)}
  font-size: 2.5rem;
  font-family: ${fontAll.popp};
  color: #ffffff;
  background-color: #ff9102;
`;

function BasicOperationButton({ operation }: BasicOperationButtonProps) {
  const {
    display,
    storedNum,
    setStoredNum,
    setOperator,
    calculate,
    canCalculate,
  } = useContext(Context);

  const handleClick = () => {
    const prev = Number(display);
    if (canCalculate) {
      calculate(storedNum, prev);
      setStoredNum(prev);
    }
    setOperator(operation);
  };

  return <Button onClick={handleClick}>{operation}</Button>;
}

export default BasicOperationButton;
