import { useEffect, useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }: {children: JSX.Element}) => {
  const [email, setEmail] = useState<string>('')
  const [uf, setUf] = useState<string>('')
  const [municipio, setMunicipio] = useState<string>('')

  useEffect(() => {
    const email = localStorage.getItem('email')
    const uf = localStorage.getItem('uf')
    const municipio = localStorage.getItem('municipio')

    if(email) setEmail(email)
    if(uf) setUf(uf)
    if(municipio) setMunicipio(municipio)

  }, [])

  const saveEmail = (email: string) => {
    localStorage.setItem('email', email)
    setEmail(email)
  }

  const saveUf = (uf: string) => {
    localStorage.setItem('uf', uf)
    setUf(uf)
  }

  const saveMunicipio = (municipio: string) => {
    localStorage.setItem('municipio', municipio)
    setMunicipio(municipio)
  }

  return (
    <UserContext.Provider value={{email, saveEmail, uf, saveUf, municipio, saveMunicipio}}>
      {children}
    </UserContext.Provider>
  )
}