import { fetchAll } from "../api/api";




const checkForUser = (data, user, setState) => {
 if (user.firstName !== data.firstName || user.lastName !== data.lastName) {
  const urlPath = `users/${data.firstName}/${data.lastName}`;
  fetchAll(urlPath, setState)
  return true;
 } else {
  return false;
 }
}







const dataHelpers = {
  checkForUser
}




export { dataHelpers }