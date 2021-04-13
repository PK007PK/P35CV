import React, { createContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [pl, setIsPl] = useState(true);
  const changeLanguage = () => setIsPl((prevValue) => !prevValue);
  const [print, setIsPrint] = useState(false);
  const changePrint = () => setIsPrint((prevValue) => !prevValue);
  const killPrint = () => setIsPrint(false);

  return (
    <AppContext.Provider
      value={{ pl, changeLanguage, print, changePrint, killPrint }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
