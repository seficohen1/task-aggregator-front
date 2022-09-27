import { fetchAll } from "../api/api";


const isChangedUser = (data, user) => {
  if (user.firstName !== data.firstName || user.lastName !== data.lastName) {
    console.log('Updated user in form field, unsubmitted');
    return true;
  } else {
    console.log('Assigned user not updated in form')
    return false;s
  }
}



const createUpdatedTask = (data, newUser) => {
  let updatedTask = {
    title: data.title,
    description: data.description,
    status: data.status,
    dueDate: data.dueDate,    
  }
  let newUserId;
  if (newUser) newUserId = newUser.userByName[0]._id || null;
  if (newUserId) updatedTask.user = newUserId;
  return updatedTask;
}



const dataHelpers = {
  isChangedUser,
  createUpdatedTask,
}




export default dataHelpers ;