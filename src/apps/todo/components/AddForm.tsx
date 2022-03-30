import React, { ChangeEvent, FormEvent, useState } from 'react';

interface AddFormProps {
  handleAdd: AddTodo;
}

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
    <form>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="To Do"
      />
      <button type="submit" onClick={handleSubmit}>
        +
      </button>
    </form>
  );
}

export default AddForm;
