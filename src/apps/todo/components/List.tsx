import React from 'react';
import Item from './Item';

interface ListProps {
  todos: TodoItem[];
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
}

function List({ todos, handleToggle, handleDelete }: ListProps) {
  return (
    <ul>
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
    </ul>
  );
}

export default List;
