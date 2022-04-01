import React from 'react';

interface PadProps {
  note: NoteItem;
  handleDelete: DeleteNote;
}

function Pad({ note, handleDelete }: PadProps) {
  return (
    <li>
      <button>edit</button>
      <button onClick={() => handleDelete(note.id)}>delete</button>
      <div>{note.text}</div>
    </li>
  );
}

export default Pad;
