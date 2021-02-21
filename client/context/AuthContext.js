import { createContext } from 'react';


const AuthContext = createContext({
  session: {},
  login: () => null,
  logout: () => null,
  setReloadUser: () => null
})

export default AuthContext;