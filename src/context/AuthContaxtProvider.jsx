import { createContext, useState } from "react"



export const authContaxt = createContext();


export default function AuthContaxtProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("tkn"));

  const handelLogin = (tkn) => {

    console.log("tkn", token);

    setToken(tkn);
    localStorage.setItem("tkn", tkn);
  };

  const handelLogOut = () => {
    localStorage.removeItem("tkn");
    setToken(null);
  };

  return (
    <authContaxt.Provider value={{ token, handelLogin, handelLogOut }}>

      {children}

    </authContaxt.Provider>
  )
}
