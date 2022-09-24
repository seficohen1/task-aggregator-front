// TaskRouter.get("/dashboard/tasks", getAllTasks);
// TaskRouter.get("/dashboard/tasks/:taskId", getTask);
// TaskRouter.post("/dashboard/tasks", createTask);
// TaskRouter.patch("/dashboard/tasks/:taskId", updateTask);
// TaskRouter.delete("/dashboard/tasks/:taskId", deleteTask);

// Routes
// getAllTasks -> GET http://localhost:4001/dashboard/tasks
// getTask -> GET http://localhost:4001/tasks/:taskId
// createTask -> POST http://localhost:4001/tasks
// updateTask -> PATCH http://localhost:4001/:taskId
// deleteTask -> DELETEhttp://localhost:4001/:taskId

import { useState, useEffect,useCallback } from "react";

export const useFetch = (url) => {
  const [tasks, setTasks] = useState([])  
  const getAllTask = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data.results)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTask()    
  },[])
  return tasks  
};

// export const useGetAllTasks = (url) => {
//   const getAllTasks = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const tasksDb = data.results
//     //   setTasksDb(data)
//       console.log(tasksDb);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllTasks()
//   },[])
// };

export const useCreateTask = (url) => {
  const createTask = async () => {
    try {
      const response = await fetch(url , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 7, str: 'Some string: &=&'})
      })
      const data = await response.json();
      const tasksDb = data.results
    //   setTasksDb(data)
      console.log(tasksDb);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createTask()
  },[])
};




