import React from 'react';
import NotePad from './Pad';

interface BoardProps {
  notes: NoteItem[];
  handleDelete: DeleteNote;
  handleUpdate: UpdateNote;
}

function Board({ notes, handleDelete, handleUpdate }: BoardProps) {
  return (
    <ul>
      {notes.map((note, i) => {
        return (
          <NotePad
            key={i}
            note={note}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </ul>
  );
}

export default Board;
