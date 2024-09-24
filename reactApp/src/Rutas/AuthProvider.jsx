import { createContext, useState } from "react";


const AuthContext = createContext ();

const AuthProvider = ({children}) => {
  console.log(children)
    const [auth,setAuth]=useState(false)
    const login = ()=> setAuth(true)
    const logout = ()=> setAuth(false)

  return (
    <div>
      <AuthContext.Provider value={{auth,login,logout}}>
        {children}
      </AuthContext.Provider>


    </div>
  )
}
export {AuthContext}
export default AuthProvider