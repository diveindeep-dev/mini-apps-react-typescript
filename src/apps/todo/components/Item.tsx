import React from 'react';

interface ItemProps {
  todo: TodoItem;
}

function Item({ todo }: ItemProps) {
  return (
    <li>
      <input type="checkbox" id={todo.id.toString()} checked={todo.complete} />
      <label htmlFor={todo.id.toString()}>{todo.text}</label>
      <button>-</button>
    </li>
  );
}

export default Item;
