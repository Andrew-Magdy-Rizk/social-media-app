import { createContext, useState } from "react"



export const userContaxt = createContext();


export default function UserContaxtProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem("user"));


  return (
    <userContaxt.Provider value={{ user }}>

      {children}

    </userContaxt.Provider>
  )
}
