import React from 'react'
import { useState } from 'react'
// import { Button, message } from 'antd';
import '../App.css'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function AddToDO( {onAdd}) {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    const[showmessage,setShowMessage]=useState(false)
    const [open, setOpen] =useState(true);




    const onSubmitData=(e)=>{
        e.preventDefault()
        if(!text||!day){
            alert('Please Add Task and date')
            
        }
        else{
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
      } 
    }
    
      const timer1=()=>{setShowMessage(true)
        setTimeout(function() {
          setShowMessage(false)
             }, 800)}
  return (
    <form className='add-form'  onSubmit={onSubmitData}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' 
            placeholder='Add Task' 
            value={text}
            onChange={(e)=>setText(e.target.value)}/>

        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Time' 
            value={day}
            onChange={(e)=>setDay(e.target.value)}/>
            
        </div>
        {/* <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
                         checked={reminder}
 
             value={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            
        </div> */}
        <input type='submit' value='Add New Task' className='btn btn-block' onClick={timer1
         } 
         />
        {
                                                    showmessage ? <div >
   <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert   >
         Added Task
        </Alert>
      </Collapse>
      
    </Box>                                                    </div> 

                                                        : null
                                                }
    </form>
  )
}

export default AddToDO
