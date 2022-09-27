

const confirmAlert = {
  title: 'Are you sure?',
  text: `You won't be able to undo this.`,
  icon: 'warning',
  iconColor: '#99CDEB',
  showCancelButton: true,
  confirmButtonColor: '#4848E0',
  cancelButtonColor: '#CC1E1E',
  timer: false,
  confirmButtonText: `Yes, I'm sure!`
}

const warningCreateUser = {
  title: 'User does not exist',
  text: `Create the user before assigning a task`,
  icon: 'error',
  iconColor: 'red',  
}

const updatedTaskSuccess = {
  title: 'Well done!',
  text: `The task has been updated`,
  icon: 'success',
  iconColor: '#99CDEB',
  toast: true,
  timer: 3000,
  showConfirmButton: false,
}

const taskCreated = {
  title: 'Well done!',
  text: `The task has been created`,
  icon: 'success',
  iconColor: '#99CDEB',
  toast: true,
  timer: 5000,
  showConfirmButton: false,
}

const taskDeleted = {
  title: 'Well done!',
  text: `The task has been deleted`,
  icon: 'success',
  iconColor: '#99CDEB',
  toast: true,
  timer: 3000,
  showConfirmButton: false,
}


const alerts = {
  confirmAlert, 
  updatedTaskSuccess,
  warningCreateUser,
  taskDeleted,
  taskCreated
}



export default alerts;