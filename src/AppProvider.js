import React, { createContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [pl, setIsPl] = useState(true);
  const changeLanguage = () => setIsPl((prevValue) => !prevValue);
  const [print, setIsPrint] = useState(false);
  const changePrint = () => setIsPrint((prevValue) => !prevValue);

  return (
    <AppContext.Provider value={{ pl, changeLanguage, print, changePrint}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
