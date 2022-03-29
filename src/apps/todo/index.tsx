import React, { useState } from 'react';
import AddForm from './components/AddForm';
import List from './components/List';

const initialTodos: TodoItem[] = [
  { id: 1, text: '👩‍💻 Solve a Algorithm Problem', complete: true },
  { id: 2, text: '✍️ Write a Blog Post', complete: false },
  { id: 3, text: '🏃‍♀️ Workout: Running ', complete: true },
];

function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  return (
    <div>
      <h1>Todo</h1>
      <AddForm />
      <List todos={todos} />
    </div>
  );
}

export default Todo;
