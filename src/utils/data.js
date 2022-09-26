import { fetchAll } from "../api/api";


const isChangedUser = (user, data) => {
  if (user.firstName !== data.firstName || user.lastName !== data.lastName) {
    console.log('Updated user in form field, unsubmitted');
    return true;
  } else {
    console.log('Assigned user not updated in form')
    return false;
  }
}

const checkForUserInDb = (data, setState) => { 
  const urlPath = `users/${data.firstName}/${data.lastName}`;
  fetchAll(urlPath, setState)
}







const dataHelpers = {
  isChangedUser,
  checkForUserInDb
}




export { dataHelpers }