import { createContext, ReactNode, useState } from 'react';

const initial = {
  display: '0',
  setDisplay: (n: string) => {},
};

export const Context = createContext(initial);

const Provider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState<string>(initial.display);

  return (
    <Context.Provider value={{ display, setDisplay }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
