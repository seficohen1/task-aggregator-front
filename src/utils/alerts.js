import { green } from '@nextui-org/react';
import { styles } from './index'



const updatedTaskConfirmAlert = {
  title: 'Are you sure?',
  text: `You won't be able to undo this.`,
  icon: 'warning',
  iconColor: '#99CDEB',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },
  showCancelButton: true,
  confirmButtonColor: '#4848E0',
  cancelButtonColor: '#CC1E1E',
  confirmButtonText: 'Yes, save the task!'
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


const alerts = {
  updatedTaskConfirmAlert, 
  updatedTaskSuccess
}



export default alerts;