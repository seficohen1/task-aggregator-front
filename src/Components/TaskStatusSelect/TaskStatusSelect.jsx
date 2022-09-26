import { useState, useEffect } from 'react'
import { styles } from '../../utils/index'
import { updateTask } from '../../api/api'
import { useForm } from "react-hook-form";




const TaskStatusSelect = (props) => {
  const { dbId } = props;
  const { register } = useForm();
  const [currentStatus, setCurrentStatus] = useState({ status: 'none' })

  const dropdownBackgroundColor = styles.setStatusDropdownColors(currentStatus.status)

  useEffect(() => {
    setCurrentStatus({ status: props.status })
  }, [])

  function handleChange (e) {    
    setCurrentStatus({ status: e.target.value })
    const body = {
      status: e.target.value
    }
    updateTask(dbId, body)
  }


  return (
    <select {...register('status')} className='task__select' style={dropdownBackgroundColor} value={currentStatus.status} onChange={handleChange} >
      <option className='task__select--option' value="none">Status</option>
      <option className='task__select--option' value="complete">Complete</option>
      <option className='task__select--option' value="pending">Pending</option>
      <option className='task__select--option' value="in progress">In Progress</option>
      <option className='task__select--option' value="cancelled">Cancelled</option>
    </select> 
  )
  
  
}


export default TaskStatusSelect;