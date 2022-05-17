import React from 'react'
import "../styles/Tasks.css"
import { AiFillCloseSquare } from "react-icons/ai";

const Tasks = ({text}) => {
  return (
    <div className="tasks-container">
        <div className="tasks-text">
            {text}
        </div>
        <div className="tasks-container-icons">
            <AiFillCloseSquare className='tasks-icon'/>
        </div>
    </div>
  )
}

export default Tasks

