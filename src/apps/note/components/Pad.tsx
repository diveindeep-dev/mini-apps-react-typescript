import React from 'react';

interface PadProps {
  note: NoteItem;
}

function Pad({ note }: PadProps) {
  return (
    <li>
      <button>edit</button>
      <button>delete</button>
      <div>{note.text}</div>
    </li>
  );
}

export default Pad;
