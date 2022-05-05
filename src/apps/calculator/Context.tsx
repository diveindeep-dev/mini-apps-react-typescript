import { createContext, ReactNode, useState } from 'react';

const initial = {
  display: '0',
  setDisplay: (n: string) => {},
  canConcat: false,
  setCanConcat: (b: boolean) => {},
  storedNum: 0,
  setStoredNum: (n: number) => {},
  operator: '',
  setOperator: (o: string) => {},
  canCalculate: true,
  setCanCalculate: (b: boolean) => {},
  calculate: (a: number, b: number) => {},
  equal: { isClicked: false, num: 0 },
  setEqual: (e: { isClicked: boolean; num: number }) => {},
};

export const Context = createContext(initial);

const Provider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState<string>(initial.display);
  const [canConcat, setCanConcat] = useState<boolean>(initial.canConcat);
  const [storedNum, setStoredNum] = useState<number>(initial.storedNum);
  const [operator, setOperator] = useState<string>(initial.operator);
  const [equal, setEqual] = useState(initial.equal);
  const [canCalculate, setCanCalculate] = useState<boolean>(
    initial.canCalculate,
  );

  const calculate = (a: number, b: number) => {
    setCanConcat(false);
    switch (operator) {
      case '＋':
        setDisplay(`${a + b}`);
        break;
      case '－':
        setDisplay(`${a - b}`);
        break;
      case '⨯':
        setDisplay(`${a * b}`);
        break;
      case '÷':
        setDisplay(`${a / b}`);
        break;
      default:
        break;
    }
    setCanCalculate(false);
  };

  return (
    <Context.Provider
      value={{
        display,
        setDisplay,
        canConcat,
        setCanConcat,
        storedNum,
        setStoredNum,
        operator,
        setOperator,
        canCalculate,
        setCanCalculate,
        calculate,
        equal,
        setEqual,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
