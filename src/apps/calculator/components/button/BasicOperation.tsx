import React from 'react';
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
  return <Button>{operation}</Button>;
}

export default BasicOperationButton;
