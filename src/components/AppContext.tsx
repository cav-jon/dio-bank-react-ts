import { createContext, useState, useEffect } from "react"
import { createLocalStorage, getAllLocalStorage } from "../services/Storage"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    title: string,
    setTitle: (title:string) => void
  }

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const storage = getAllLocalStorage()
  
  useEffect(()=>{
    if(storage){
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
      createLocalStorage()
    }  
  })
  
  const [title, setTitle] = useState<string>('')
  const user = 'Jon'
  
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, title, setTitle }}>
      {children}
    </AppContext.Provider>
  )
}

