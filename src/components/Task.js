import { FaTrash,FaCheck} from 'react-icons/fa'
function Task({ task, onDelete ,onToggel }) {
 

  return (
    <div className={`task ${task.reminder ?'reminder':''}`}  >

      <h3>{task.text}
      <FaCheck className={`${task.reminder?'compelete':'notcompelet'}`} onClick={()=>onToggel(task.id)}/>
      </h3>
      <p> { task.day}      <FaTrash style={{color:'rgb(168, 170, 172)' , cursor:'pointer',direction: 'rtl'}} onClick={()=>onDelete(task.id)} />
</p>
    </div>
  )
}

export default Task
