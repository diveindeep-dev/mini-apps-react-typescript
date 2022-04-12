import { createContext, ReactNode, useState } from 'react';

const initial = {
  display: '0',
  setDisplay: (n: string) => {},
  canConcat: false,
  setCanConcat: (b: boolean) => {},
};

export const Context = createContext(initial);

const Provider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState<string>(initial.display);
  const [canConcat, setCanConcat] = useState<boolean>(initial.canConcat);

  return (
    <Context.Provider value={{ display, setDisplay, canConcat, setCanConcat }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
