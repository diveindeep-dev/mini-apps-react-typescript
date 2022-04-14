import React, { useContext } from 'react';
import { Context } from '../../Context';
import { isFull } from '../../utils';
import styled from 'styled-components';
import { roundButton } from '@shared/styles/Mixin';
import { fontAll } from '@shared/styles/Variables';

interface FunctionButtonProps {
  func: string;
}

const Button = styled.button<FunctionButtonProps>`
  ${roundButton(5)}
  font-size: 2.2rem;
  font-family: ${fontAll.rubik};
  color: ${(props) => (props.func === '.' ? '#ffffff' : '#000000')};
  background-color: ${(props) => (props.func === '.' ? '#333333' : '#a5a5a5')};
`;

function FunctionButton({ func }: FunctionButtonProps) {
  const { display, setDisplay, canConcat, setCanConcat } = useContext(Context);

  const handleClick = () => {
    const prev = display;

    switch (func) {
      case '.':
        if (canConcat) {
          if (display.includes('.') || isFull(prev)) {
            break;
          }
          setDisplay(`${prev}.`);
        } else {
          setCanConcat(true);
          setDisplay(`0.`);
        }
        break;
      case '+/-':
        display.includes('-')
          ? setDisplay(`${prev.replace('-', '')}`)
          : setDisplay(`-${prev}`);
        break;
      case '%':
        setDisplay(`${Number(prev) / 100}`);
        break;
      default:
        break;
    }
  };

  return (
    <Button func={func} onClick={handleClick}>
      {func}
    </Button>
  );
}

export default FunctionButton;
