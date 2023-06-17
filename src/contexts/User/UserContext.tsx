import {createContext} from 'react'

export type UserContextType = {
  email: string;
  saveEmail: (email: string) => void;
}

export const UserContext = createContext<UserContextType>(null!)