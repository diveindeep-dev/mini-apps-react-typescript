import React, { useState } from 'react';
import AddForm from './components/AddForm';
import List from './components/List';

const initialTodos: TodoItem[] = [
  { id: 1, text: '👩‍💻 Solve a Algorithm Problem', completed: true },
  { id: 2, text: '✍️ Write a Blog Post', completed: false },
  { id: 3, text: '🏃‍♀️ Workout: Running ', completed: true },
];

function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  const addTodo: AddTodo = (newTodoText: string) => {
    const newTodo: TodoItem = {
      id: new Date().getTime(),
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo: ToggleTodo = (selectedTodo: TodoItem) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = (selectedTodoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== selectedTodoId);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo</h1>
      <AddForm handleAdd={addTodo} />
      <List todos={todos} handleToggle={toggleTodo} handleDelete={deleteTodo} />
    </div>
  );
}

export default Todo;
