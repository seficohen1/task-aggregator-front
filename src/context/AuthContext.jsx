import React, {createContext, useState, useEffect} from "react";
import axios from 'axios'



const AuthContext = createContext()

// const currentUser = localStorage.getItem('user')

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('http://localhost:4001/dashboard/users').then(data => setUser(data.data.results[5]))

  }, [])

  
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;