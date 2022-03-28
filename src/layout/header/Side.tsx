import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';
import { colorAll } from '@shared/styles/Variables';

interface SideProps {
  handleToggle: HandleToggle;
}

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 98;
`;

const Section = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  height: 100vh;
  padding: 50px 30px;
  background-color: ${colorAll.yellow};
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  z-index: 99;
`;

function Side({ handleToggle }: SideProps) {
  return (
    <>
      <Back onClick={handleToggle} className="back" />
      <Section className="side">
        <Nav />
        <Logo />
      </Section>
    </>
  );
}

export default Side;
