import React from 'react';
import styled from 'styled-components';
import { roundButton } from '@shared/styles/Mixin';

interface NumberButtonProps {
  number: number;
}

const Button = styled.button`
  ${roundButton(5)}
  font-size: 2.2rem;
  background-color: #333333;
  color: #ffffff;
`;

const ZeroButton = styled(Button)`
  width: 10.8rem;
  padding-right: 80px;
  border-top-left-radius: 90px;
  border-bottom-left-radius: 90px;
  border-top-right-radius: 90px;
  border-bottom-right-radius: 90px;
`;

function NumberButton({ number }: NumberButtonProps) {
  return (
    <>
      {number === 0 ? (
        <ZeroButton>{number}</ZeroButton>
      ) : (
        <Button>{number}</Button>
      )}
    </>
  );
}

export default NumberButton;
