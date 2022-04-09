import React from 'react';
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
  return <Button func={func}>{func}</Button>;
}

export default FunctionButton;
