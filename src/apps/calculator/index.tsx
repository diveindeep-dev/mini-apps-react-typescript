import React from 'react';
import ContextProvider from './Context';
import Display from './components/Display';
import Number from './components/button/Number';
import BasicOperation from './components/button/BasicOperation';
import FunctionKey from './components/button/Function';
import styled from 'styled-components';
import { fontAll } from '@shared/styles/Variables';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
`;

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 2.2rem;
  font-family: ${fontAll.open};
  color: #ffffff;
  background-color: #000000;

  h1 {
    padding: 30px 20px;
    text-align: center;
    font-size: 2rem;
  }
`;

function CalculatorIndex() {
  return (
    <ContextProvider>
      <Calculator>
        <h1>CALULATOR</h1>
        <Display />
        <Wrap>
          <div>
            <FunctionKey func={'AC'} />
            <FunctionKey func={'+/-'} />
            <FunctionKey func={'%'} />
            <BasicOperation operation={'÷'} />
          </div>
          <div>
            <Number number={7} />
            <Number number={8} />
            <Number number={9} />
            <BasicOperation operation={'⨯'} />
          </div>
          <div>
            <Number number={4} />
            <Number number={5} />
            <Number number={6} />
            <BasicOperation operation={'－'} />
          </div>
          <div>
            <Number number={1} />
            <Number number={2} />
            <Number number={3} />
            <BasicOperation operation={'＋'} />
          </div>
          <div>
            <Number number={0} />
            <FunctionKey func={'.'} />
            <BasicOperation operation={'='} />
          </div>
        </Wrap>
      </Calculator>
    </ContextProvider>
  );
}

export default CalculatorIndex;
