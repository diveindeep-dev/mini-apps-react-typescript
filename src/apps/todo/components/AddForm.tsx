import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { colorAll } from '@shared/styles/Variables';
import { flexCenter } from '@shared/styles/Mixin';

interface AddFormProps {
  handleAdd: AddTodo;
}

const Input = styled.input`
  margin: 1rem 0;
  width: 80%;
  font-size: 1.3rem;
  border-bottom: 2px solid ${colorAll.navy};
`;

const AddButton = styled.button`
  ${flexCenter}
  min-width: 2rem;
  min-height: 2rem;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${colorAll.green2};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;

function AddForm({ handleAdd }: AddFormProps) {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    handleAdd(text);
    setText('');
  };

  return (
    <Form>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="To Do"
      />
      <AddButton type="submit" onClick={handleSubmit}>
        +
      </AddButton>
    </Form>
  );
}

export default AddForm;
