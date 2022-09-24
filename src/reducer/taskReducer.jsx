import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


// Delete taskDb when backend works
// import { taskDb } from "../../db/taskDb";

// const tasks = useContext(TaskContext)
export const taskReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
        const newTask = [...state, action.payload]
        return newTask        
    }


    // DELETE_TASK and UPDATE_TASK comes from card component
    if (action.type === "DELETE_TASK"){
        return state.filter((task) => task.id !== action.payload.id);
    }

    // TODO: "UPDATE_TASK" pending
    // if (action.type === "UPDATE_TASK"){

    // }

}