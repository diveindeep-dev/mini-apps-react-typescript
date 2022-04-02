import React, { ChangeEvent, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface PadProps {
  note: NoteItem;
  handleDelete: DeleteNote;
  handleUpdate: UpdateNote;
}

function Pad({ note, handleDelete, handleUpdate }: PadProps) {
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [text, setText] = useState<string>(note.text);

  const handleToggle: HandleToggle = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    handleUpdate({ id: note.id, text: e.target.value });
  };

  return (
    <li>
      <button onClick={handleToggle}>{editMode ? `done` : `edit`}</button>
      <button onClick={() => handleDelete(note.id)}>delete</button>
      <div>
        {editMode ? (
          <textarea value={text} onChange={handleChange} />
        ) : (
          <div onClick={handleToggle}>
            <ReactMarkdown>{note.text}</ReactMarkdown>
          </div>
        )}
      </div>
    </li>
  );
}

export default Pad;
