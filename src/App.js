import './App.css'
import Header from "./components/Header";
import List from './components/List';
import { useState , useEffect } from 'react';
import AddToDO from './components/AddToDO';
import Buttons from './components/Buttons';

function App() {
  const [Lists ,setLists]=useState([])

useEffect(()=>{
  const getData =async()=>{
    const getTasks=await fetshdata()
    setLists(getTasks)
  }
  getData()
},[])

  // fetch data from json file
const fetshdata=async()=>{
  const res=await fetch('http://localhost:5000/lists')
  const data=await res.json()
  return data
}
// fetch data to put function
const fetshTask2=async(id)=>{
  const res=await fetch(`http://localhost:5000/lists/${id}`)
  const data=await res.json()
  return data
}

//delete Task
const deleteTask=async(id)=>{
  await fetch(`http://localhost:5000/lists/${id}`,
  {
    method:'DELETE'
  })
  setLists(Lists.filter((todo)=>todo.id !==id))
 }
   //toggel  Reminder
   const ReminderData=async(id)=>{
    const taskToggel=await fetshTask2(id)
    const updateData={
      ...taskToggel,
      reminder:!taskToggel.reminder
    }
    const res=await fetch(`http://localhost:5000/lists/${id}`,
    {
      method:'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(updateData),
    })
    const PutData=await res.json()


      setLists(
        Lists.map((task)=>
        task.id ===id ?{...task,
        reminder:PutData.reminder}:task)
        
      )
     
   }

  //Add Task
  const AddTask= async(task)=>{
    const res=await fetch(`http://localhost:5000/lists`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(task),
    })
    const NewData= await res.json()
    setLists([...Lists,NewData])

  // const id=Math.floor(Math.random()*1000)+1
  // const NewTask={id,...task}
  // setLists([...Lists,NewTask])

  }
  //show Add Task Form
  const [ShowTask,setShowTask]=useState(false)
  return (
    
      
      <div className='container' >
      <Header/>
      
      <Buttons color='#B689B0' text={ShowTask?'Close':"Add"} addbtn={()=>setShowTask(!ShowTask)}/>
{
      ShowTask?<AddToDO onAdd={AddTask}/>:Lists.length > 0 ?(<List  tasks={Lists} onDelete={deleteTask} onToggel={ReminderData}/>):('No Data To Display')}
       
<img src=''/>
      </div>
    
  );
}

export default App;
