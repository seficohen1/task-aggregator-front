import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedAdmin = ({children}) => {
  const { user } = useContext(AuthContext)
  
  return (
    user.role === 'admin' ?
      children : 
      <Navigate to='/dashboard' />
  );
};

export default ProtectedAdmin;
