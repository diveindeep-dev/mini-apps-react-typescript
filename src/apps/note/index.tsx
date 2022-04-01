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

  const addNote: AddNote = () => {
    const newNotes: NoteItem = {
      id: new Date().getTime(),
      text: '',
    };
    setNotes([...notes, newNotes]);
  };

  const deleteNote: DeleteNote = (noteId: number) => {
    const newNotes = notes.filter((note: NoteItem) => note.id !== noteId);
    setNotes(newNotes);
  };

  return (
    <div>
      <div>NOTE</div>
      <button onClick={addNote}>+</button>
      <Board notes={notes} handleDelete={deleteNote} />
    </div>
  );
}

export default Note;
