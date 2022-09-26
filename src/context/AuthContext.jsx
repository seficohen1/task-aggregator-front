import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const localStorageUser = JSON.parse(localStorage.getItem("user")) || [];
const localStorageToken = JSON.parse(localStorage.getItem("token")) || [];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorageUser);

  const [token, setToken] = useState(localStorageToken);
  
 useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
  }, [token, user]); 

    console.log('token: ', token)
    console.log('user: ', user)
  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
