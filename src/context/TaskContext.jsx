import React, { useState, useEffect } from 'react'

export const TaskContext = React.createContext({});

const TaskContextProvider = ({ children }) => {

  const localStorageToken = JSON.parse(localStorage.getItem("token")) || [];

  const [task, setTask] = useState([]);
  const [token, setToken] = useState(localStorageToken);
  
 useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    console.log('token: ', token)
  }, [token]); 

    return (
    <TaskContext.Provider value={{task, setTask, token, setToken}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider;