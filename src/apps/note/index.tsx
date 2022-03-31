import React, { useState } from 'react';
import Board from './components/Board';

const sampleNotes: NoteItem[] = [
  {
    id: 1,
    text: '**Typescript와 React**로 만들었습니다. *마크다운*도 적용됩니다!',
  },
];

function Note() {
  const [notes, setNotes] = useState<NoteItem[]>(sampleNotes);

  return (
    <div>
      <div>NOTE</div>
      <button>+</button>
      <Board notes={notes} />
    </div>
  );
}

export default Note;
