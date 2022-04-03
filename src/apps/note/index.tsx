import React, { useState } from 'react';
import Board from './components/Board';
import { FiFilePlus } from 'react-icons/fi';
import styled from 'styled-components';
import { flexCenter, media } from '@shared/styles/Mixin';
import { colorAll, fontAll } from '@shared/styles/Variables';

const sampleNotes: NoteItem[] = [
  {
    id: 1,
    text: '**Typescript와 React**로 만들었습니다. *마크다운*도 적용됩니다!',
  },
];

const Top = styled.section`
  display: flex;
  align-items: center;
  padding: 10px 0;

  h1 {
    font-size: 2rem;
    font-family: ${fontAll.open};
  }
  button {
    ${flexCenter}
    font-size: 2rem;
    color: ${colorAll.grey};
    &:hover {
      color: ${colorAll.blueLight};
    }
  }
`;

const Div = styled.div`
  padding: 0 50px;

  ${media.mobile} {
    padding: 20px;
  }
`;

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
    const newNotes: NoteItem[] = notes.filter(
      (note: NoteItem) => note.id !== noteId
    );
    setNotes(newNotes);
  };

  const updateNote: UpdateNote = (data: NoteItem) => {
    const modified: NoteItem | undefined = notes.find(
      (note: NoteItem) => data.id === note.id
    );
    if (modified) {
      modified.text = data.text;
    }
    setNotes(notes);
  };

  return (
    <Div>
      <Top>
        <h1>NOTE</h1>
        <button onClick={addNote}>
          <FiFilePlus />
        </button>
      </Top>
      <Board
        notes={notes}
        handleDelete={deleteNote}
        handleUpdate={updateNote}
      />
    </Div>
  );
}

export default Note;
