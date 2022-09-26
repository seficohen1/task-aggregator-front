import React, { useState } from 'react'

export const TaskContext = React.createContext({});

const TaskContextProvider = ({ children }) => {

  const [task, setTask] = useState([]);
 
    return (
    <TaskContext.Provider value={{task, setTask}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider;