import React from 'react'
import "../styles/Form.css"

const Form = (props) => {
  return (
    <form className="tasks-form">
        <input 
            className="tasks-input" 
            type="text"
            placeholder="Write a task"
            name='text'
        />
        <button className='task-button'>
            Add
        </button>
    </form>
  )
}

export default Form