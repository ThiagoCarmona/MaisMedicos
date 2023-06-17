import { useEffect, useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }: {children: JSX.Element}) => {
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const email = localStorage.getItem('email')
    if(email) {
      setEmail(email)
    }
  }, [])

  const saveEmail = (email: string) => {
    localStorage.setItem('email', email)
    setEmail(email)
  }

  return (
    <UserContext.Provider value={{email, saveEmail}}>
      {children}
    </UserContext.Provider>
  )
}