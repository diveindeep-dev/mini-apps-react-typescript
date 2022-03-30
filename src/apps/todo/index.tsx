import React, { useState } from 'react';
import AddForm from './components/AddForm';
import List from './components/List';
import styled from 'styled-components';
import { colorAll, fontAll } from '@shared/styles/Variables';
import { media } from '@shared/styles/Mixin';

const initialTodos: TodoItem[] = [
  { id: 1, text: '👩‍💻 Solve a Algorithm Problem', completed: true },
  { id: 2, text: '✍️ Write a Blog Post', completed: false },
  { id: 3, text: '🏃‍♀️ Workout: Running ', completed: true },
];

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    font-size: 2rem;
    font-weight: 600;
    color: ${colorAll.grey};
  }
`;

const Div = styled.div`
  width: 500px;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #c4c4c4;
  font-family: ${fontAll.roboto};

  ${media.mobile} {
    width: 300px;
    padding: 40px 20px;
  }
`;

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

  const completedList: TodoItem[] = todos.filter((todo) => {
    return todo.completed === true;
  });

  return (
    <Div>
      <Top>
        <h1>Todo: </h1>
        <div>{`${completedList.length} / ${todos.length}`}</div>
      </Top>
      <AddForm handleAdd={addTodo} />
      <List todos={todos} handleToggle={toggleTodo} handleDelete={deleteTodo} />
    </Div>
  );
}

export default Todo;
