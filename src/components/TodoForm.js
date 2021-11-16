import React, { useState } from 'react';
import Modal from 'react-modal'
import {useDispatch} from 'react-redux'
import { addTodos } from '../redux/todos/todoAction';

function TodoForm() {
  

  const [input, setInput] = useState('');     //geting an input 
  

  const handleChange = e => {
    setInput(e.target.value);            
  };

const dispatch= useDispatch();

const executeAdd = ()=>{
  if(!input){
    return
  }
  dispatch(addTodos({
    text:input,
    isCompleted:false
  }))
  setInput('')
}

  return (
      <>
      <div className='todo-form'>
      <input
      placeholder='Add a todo'
      value={input}
      onChange={handleChange}
      name='text'
      className='todo-input'
    />
    <button onClick={executeAdd} className='todo-button'>
      Add todo
    </button>
    </div>
  </>
      )
}


export default TodoForm;