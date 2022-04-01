import React from 'react';
import NotePad from './Pad';

interface BoardProps {
  notes: NoteItem[];
  handleDelete: DeleteNote;
}

function Board({ notes, handleDelete }: BoardProps) {
  return (
    <ul>
      {notes.map((note, i) => {
        return <NotePad key={i} note={note} handleDelete={handleDelete} />;
      })}
    </ul>
  );
}

export default Board;
