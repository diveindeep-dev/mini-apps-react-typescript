import React from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { colorAll } from '@shared/styles/Variables';
import { flexCenter } from '@shared/styles/Mixin';

interface ToggleProps {
  handleToggle: HandleToggle;
  isChecked: boolean;
}

const Label = styled.label`
  ${flexCenter}
  position: relative;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  background-color: ${colorAll.yellow};
  transition: transform 0.3s ease-in-out;
  z-index: 99;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;

  &:checked ~ .side {
    transition: transform 0.3s ease-in-out;
    transform: translateX(0%);
  }

  &:checked ~ .back {
    display: initial;
  }

  &:checked ~ ${Label} {
    transition: transform 0.3s ease-in-out;
    transform: translateX(-200px);
  }
`;

function BurgerToggle(props: ToggleProps) {
  const { handleToggle, isChecked } = props;

  return (
    <>
      <Input
        type="checkbox"
        onChange={handleToggle}
        checked={isChecked}
        id="side"
      />
      <Label htmlFor="side">{isChecked ? <IoClose /> : <IoMenu />}</Label>
    </>
  );
}

export default BurgerToggle;
