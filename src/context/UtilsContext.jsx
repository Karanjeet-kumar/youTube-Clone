import { useState, useContext, createContext, Children } from "react";

const UtilsContext = createContext();

export const UtilsContextProvider = ({ children }) => {
  const [isSidebar, setSidebar] = useState(false);
  const [isMobileShow, setMobileShow] = useState(false);

  return (
    <UtilsContext.Provider
      value={{ isSidebar, setSidebar, isMobileShow, setMobileShow }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtils = () => {
  const utilsContext = useContext(UtilsContext);
  if (!utilsContext) return NULL;
  return utilsContext;
};
