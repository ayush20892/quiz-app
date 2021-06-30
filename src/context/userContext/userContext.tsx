import { createContext, useContext, useEffect, useReducer } from "react"
import { initialStateUser, userReducer } from "../../reducer/userReducer"
import { userProviderType } from "./userContextType"


const UserContext = createContext({} as userProviderType)

export const UserProvider = ({children}: any)  => {
  const [userState, userDispatch] = useReducer(userReducer, initialStateUser)

  return(
    <UserContext.Provider value={{userState, userDispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}