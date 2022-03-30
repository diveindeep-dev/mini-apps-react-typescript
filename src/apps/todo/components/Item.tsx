import React from 'react';

interface ItemProps {
  todo: TodoItem;
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
}

function Item({ todo, handleToggle, handleDelete }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        id={todo.id.toString()}
        checked={todo.completed}
        onChange={() => handleToggle(todo)}
      />
      <label htmlFor={todo.id.toString()}>{todo.text}</label>
      <button onClick={() => handleDelete(todo.id)}>-</button>
    </li>
  );
}

export default Item;
