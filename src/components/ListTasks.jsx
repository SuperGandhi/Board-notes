import React,{useState} from 'react'
import Form from './Form'
import "../styles/ListTasks.css"
import Tasks from './Tasks'


const ListTasks = () => {

    const [tasks,setTasks]= useState([]);
    
    // You can add ";" to finish of arrow function
    const addTask = task =>{
        console.log(task);
        
        if(task.text.trim()){
            task.text = task.text.trim(); 
            const tasksUpdated =[task, ...tasks];
            setTasks(tasksUpdated)
        }
    };

    const deleteTask = id =>{
        const tasksUpdate = tasks.filter(tasks => tasks.id !== id);
        setTasks(tasksUpdate)
    };

    const completeTask = id => {
        const tasksCurrent = tasks.map(
            task =>{
                if (task.id === id){
                    task.complete = !task.complete;
                }
                return task;
            }
        );
        setTasks(tasksCurrent);
    };

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
                    completedTask= {completeTask}
                    deleteTask={deleteTask}
                    />
                )
            }
        </div>
    </>
  )
}

export default ListTasks