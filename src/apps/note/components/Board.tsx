import React from 'react';
import NotePad from './Pad';
import styled from 'styled-components';
import { media } from '@shared/styles/Mixin';

interface BoardProps {
  notes: NoteItem[];
  handleDelete: DeleteNote;
  handleUpdate: UpdateNote;
}

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Board({ notes, handleDelete, handleUpdate }: BoardProps) {
  return (
    <Ul>
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
    </Ul>
  );
}

export default Board;
