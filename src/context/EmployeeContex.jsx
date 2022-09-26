import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getAllUsers } from "../api/api";

export const EmployeeContext = createContext([]);

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllUsers("http://localhost:4001/dashboard/users", setEmployees);
  }, [isLoaded]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, setIsLoaded }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
