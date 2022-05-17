import React,{useState} from 'react'
import Form from './Form'
import "../styles/ListTasks.css"
import Tasks from './Tasks'


const ListTasks = () => {

    const [tasks,setTasks]= useState([]);
    
    const addTask = task =>{
        console.log(task);
        
        if(task.text.trim()){
            task.text = task.text.trim(); 
            const tasksUpdated =[task, ...tasks];
            setTasks(tasksUpdated)
        }
    }

  return (
    <>
        <Form onSubmit={addTask}/>
        <div className='tasks-list-container'>       
            {
                // rendering list components
                tasks.map((task) =>     
                    <Tasks
                    key={task.id}
                    id= {task.id}
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