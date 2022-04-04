import React, { ChangeEvent, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BsPencilSquare, BsCheckCircle, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';
import { flexCenter } from '@shared/styles/Mixin';
import { colorAll } from '@shared/styles/Variables';

interface PadProps {
  note: NoteItem;
  handleDelete: DeleteNote;
  handleUpdate: UpdateNote;
}

const Textarea = styled.textarea`
  resize: vertical;
  width: 100%;
  min-height: 200px;
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: 'Times New Roman';
`;

const NoteText = styled.div`
  padding: 0 1rem 2rem;
  p {
    word-break: break-all;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  height: 4rem;

  button {
    ${flexCenter}
    padding: 0.5rem;
    font-size: 1.5rem;
    color: ${colorAll.grey};
    &:hover {
      color: ${colorAll.blueLight};
    }
  }
`;

const Body = styled.div`
  width: 100%;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const RedVLine = styled.div`
  width: 40px;
  border-right: 1px solid red;
`;

const Li = styled.li`
  display: flex;
  min-height: 250px;
  background: repeating-linear-gradient(
    #d3d3d3,
    #d3d3d3 1px,
    #f8f0bf 0,
    #f8f0bf 2rem
  );
`;

function Pad({ note, handleDelete, handleUpdate }: PadProps) {
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [text, setText] = useState<string>(note.text);

  useEffect(() => {
    setText(note.text);
  }, [note]);

  const handleToggle: HandleToggle = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    handleUpdate({ id: note.id, text: e.target.value });
  };

  return (
    <Li>
      <RedVLine />
      <Body>
        <ButtonSection>
          <button onClick={handleToggle}>
            {editMode ? <BsCheckCircle /> : <BsPencilSquare />}
          </button>
          <button onClick={() => handleDelete(note.id)}>
            <BsTrash />
          </button>
        </ButtonSection>
        <NoteText>
          {editMode ? (
            <Textarea value={text} onChange={handleChange} />
          ) : (
            <div onClick={handleToggle}>
              <ReactMarkdown>{note.text}</ReactMarkdown>
            </div>
          )}
        </NoteText>
      </Body>
    </Li>
  );
}

export default Pad;
