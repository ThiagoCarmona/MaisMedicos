import {createContext} from 'react'

export type UserContextType = {
  email: string;
  uf: string;
  municipio: string;
  saveEmail: (email: string) => void;
  saveUf: (uf: string) => void;
  saveMunicipio: (municipio: string) => void;
}

export const UserContext = createContext<UserContextType>(null!)