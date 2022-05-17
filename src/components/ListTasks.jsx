import React,{useState} from 'react'
import Form from './Form'
import "../styles/ListTasks.css"


const ListTasks = () => {
    const [tasks,setTasks]= useState([]);


  return (
    <>
        <Form/>
        
        <div className='tasks-list-container'>       
            {
                // rendering list components
                tasks.map((task) =>     
                    <Task
                    text={task.text}
                    completed={task.completed}
                    />
                )
            }
        </div>
    </>
  )
}

export default ListTasks