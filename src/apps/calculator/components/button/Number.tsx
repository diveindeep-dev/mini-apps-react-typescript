import React, { useContext } from 'react';
import { Context } from '../../Context';
import { isFull } from '../../utils';
import styled from 'styled-components';
import { roundButton } from '@shared/styles/Mixin';

interface NumberButtonProps {
  number: number;
}

interface NumberButtonStyleProps {
  isZero: boolean;
}

const Button = styled.button<NumberButtonStyleProps>`
  ${roundButton(5)}
  font-size: 2.2rem;
  background-color: #333333;
  color: #ffffff;

  width: ${(props) => props.isZero && '10.8rem'};
  padding-right: ${(props) => props.isZero && '70px'};
  border-radius: ${(props) => props.isZero && '90px'};
`;

function NumberButton({ number }: NumberButtonProps) {
  const { display, setDisplay, canConcat, setCanConcat } = useContext(Context);

  const handleClick = () => {
    const prev = display;
    if (canConcat) {
      if (!isFull(prev)) {
        const value = `${prev}${number}`;
        setDisplay(value);
      }
    } else {
      if (number !== 0) {
        setDisplay(`${number}`);
        setCanConcat(true);
      }
    }
  };

  return (
    <Button onClick={handleClick} isZero={number === 0}>
      {number}
    </Button>
  );
}

export default NumberButton;
