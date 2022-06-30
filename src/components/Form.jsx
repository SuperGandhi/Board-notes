import React, {useState} from 'react'
import "../styles/Form.css"
import {v4 as uuidv4} from 'uuid'

const Form = (props) => {

  const [input , setInput ]= useState('');


  // each event "e" it's different 
  const driveChange =e=>{
    setInput(e.target.value);
    // console.log(e.target.value)
  };

  const driveSend  = e => {
    // the function preventDefault use to don't charge again all the app,
    // when we send the form 
    e.preventDefault();

    const taskNew ={
      id: uuidv4(),
      text: input,
      complete: false,  
    }
    
    props.onSubmit(taskNew)
  };
  
  return (
    <form className="tasks-form"
      // event listener
      onSubmit={driveSend}
    >
        <input 
            className="tasks-input" 
            type="text"
            placeholder="Write a task"
            name='text'
            // event listener
            onChange={driveChange}
        />
        <button className='task-button'>
            Add
        </button>
    </form>
  )
}

export default Form