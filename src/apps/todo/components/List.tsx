import React from 'react';
import Item from './Item';

interface ListProps {
  todos: TodoItem[];
}

function List({ todos }: ListProps) {
  return (
    <ul>
      {todos.map((todo, i) => {
        return <Item key={i} todo={todo} />;
      })}
    </ul>
  );
}

export default List;
