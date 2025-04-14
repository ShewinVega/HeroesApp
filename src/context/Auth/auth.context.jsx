import { createContext, useContext } from "react";


export const AuthContext = createContext();


export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error(`AuthContext must be used within the AuthContextProvider`);
  }

  return context;
}
