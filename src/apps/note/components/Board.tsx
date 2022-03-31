import React from 'react';
import NotePad from './Pad';

interface BoardProps {
  notes: NoteItem[];
}

function Board({ notes }: BoardProps) {
  return (
    <ul>
      {notes.map((note, i) => {
        return <NotePad key={i} note={note} />;
      })}
    </ul>
  );
}

export default Board;
