import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import { colorAll } from '@shared/styles/Variables';

interface ListProps {
  todos: TodoItem[];
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
}

const Ul = styled.ul`
  height: 50vh;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colorAll.greyLight};
  }
`;

function List({ todos, handleToggle, handleDelete }: ListProps) {
  return (
    <Ul>
      {todos.map((todo, i) => {
        return (
          <Item
            key={i}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </Ul>
  );
}

export default List;
