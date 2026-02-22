import { createContext, useState } from "react"



export const userInfoContaxt = createContext();


export default function UserInfoContaxtProvider({ children }) {
  const [userInfo, setUserInfo] = useState(() => localStorage.getItem("userInfo"));


  const handelSetUserInfo = (user) => {
    setUserInfo(user);
    localStorage.setItem("userInfo", user);
  }

  return (
    <userInfoContaxt.Provider value={{ userInfo, handelSetUserInfo }}>

      {children}

    </userInfoContaxt.Provider>
  )
}
