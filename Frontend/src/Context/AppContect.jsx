import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [isSeller, setisSeller] = useState(false);
const [showUserlogin, setshowUserlogin] = useState(false);
  const value = {
    navigate,
    user,
    setuser,
    setisSeller,
    isSeller,
    showUserlogin,
    setshowUserlogin,
  };

  // Fix: Make sure return and JSX are on the same line or use parentheses
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
