import React from 'react';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { colorAll } from '@shared/styles/Variables';
import { flexCenter } from '@shared/styles/Mixin';

interface ItemProps {
  todo: TodoItem;
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
}

const CheckBox = styled.div`
  ${flexCenter}
  align-self: flex-start;
  min-width: 2rem;
  min-height: 2rem;
  border: 2px solid ${colorAll.navy};
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
    word-break: break-all;
  }

  &:hover {
    cursor: pointer;
  }
`;

const InvisibleInput = styled.input`
  display: none;

  &:checked + ${Label} {
    color: ${colorAll.grey};
    text-decoration: line-through;

    ${CheckBox} {
      color: #ffffff;
      border: 2px solid ${colorAll.navy};
      background-color: ${colorAll.navy};
    }
  }
`;

const DelButton = styled.button`
  opacity: 0;
  color: ${colorAll.grey};

  &:hover {
    color: ${colorAll.navy};
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;

  &:hover {
    color: ${colorAll.grey};

    ${CheckBox} {
      border: 2px solid ${colorAll.grey};
    }

    ${DelButton} {
      opacity: 1;
    }
  }
`;

function Item({ todo, handleToggle, handleDelete }: ItemProps) {
  return (
    <Li>
      <InvisibleInput
        type="checkbox"
        id={todo.id.toString()}
        checked={todo.completed}
        onChange={() => handleToggle(todo)}
      />
      <Label htmlFor={todo.id.toString()}>
        <CheckBox>{todo.completed && <FaCheck />}</CheckBox>
        <span>{todo.text}</span>
      </Label>
      <DelButton onClick={() => handleDelete(todo.id)}>
        <FaTrashAlt />
      </DelButton>
    </Li>
  );
}

export default Item;
