import React from 'react'
import "../styles/Tasks.css"
import { AiFillCloseSquare } from "react-icons/ai";

const Tasks = ({id, text, completed, completedTask,deleteTask}) => {
  return (
    <div className={completed ? 'tasks-container completed' : 'tasks-container'}>
        <div 
        className="tasks-text"
        onClick={()=> completedTask(id)}
        >
            {text}
        </div>
        <div 
        className="tasks-container-icons"
        onClick={()=> deleteTask(id)}
        >
            <AiFillCloseSquare className='tasks-icon'/>
        </div>
    </div>
  )
}

export default Tasks

