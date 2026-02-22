import { createContext, useState } from "react"



export const authContaxt = createContext();


export default function AuthContaxtProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("tkn"));
  const [userId, setUserId] = useState(() => localStorage.getItem("userId"));
  const [userInfo, setUserInfo] = useState(() => localStorage.getItem("userInfo"));


  const handelLogin = (tkn) => {
    setToken(tkn);
    localStorage.setItem("tkn", tkn);
  };

  const handelLogOut = () => {
    localStorage.removeItem("tkn");
    setToken(null);
  };

  const handelSetUserId = (id) => {
    setUserId(id)
    localStorage.setItem("userId", id);
  }
  const handelSetUserInfo = (user) => {
    setUserInfo(user);
    localStorage.setItem("userInfo", user);
  }

  return (
    <authContaxt.Provider value={{ token, userId, userInfo, handelLogin, handelLogOut, handelSetUserId,handelSetUserInfo }}>

      {children}

    </authContaxt.Provider>
  )
}
