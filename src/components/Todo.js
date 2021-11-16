import React, { useState } from 'react';
// import TodoForm from './TodoForm';
import { BiTrash } from 'react-icons/bi';
import { TiEdit } from 'react-icons/ti';
import Modal from 'react-modal';  
import {IoMdDoneAll} from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, completeTodo, editTodo  } from "../redux/todos/todoAction";


const Todo = () => {

  const [listIndex, setListIndex] = useState(0)  //for editing
  const [isShowModal, setIsShowModal] = useState(false)
  

  const { todos } = useSelector(state => state.todo)
  const dispatch = useDispatch();

  const onComplete = (index) => {
      todos[index].isCompleted = !todos[index].isCompleted 
      dispatch(completeTodo(index, todos[index]))
  }

  const onDelete = (index) => {
      dispatch(deleteTodo(index));
  }
 

  const onClickEdit = (index) => {
    setListIndex(index)
    setIsShowModal(true)
  }

  const handleClose = () => {
    setIsShowModal(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  return(
    <div>
      {
         todos.map((item, index) => (
          <div
            className={item.isCompleted ? 'todo-row complete' : 'todo-row'}
            key={index}
          >
            
           {item.text} 
      
           {/* {console.log(...todos)} */}
            
            <div className='icons'>
              <IoMdDoneAll
                onClick={() => onComplete(index)}
                className='done-icon'
              />
               <TiEdit
                onClick={() => onClickEdit(index)}
                className='edit-icon'
              />
              <BiTrash
                onClick={() => onDelete(index)}
                className='delete-icon'
              />
            </div>
         
          </div>
        ))
      }
         <Modal
              isOpen={isShowModal}
              onRequestClose={handleClose}
              style={customStyles} 
            >
                <input
                className ='edit-input'
                value={todos[listIndex]?.text}     //particular index's text will be shown in input textfield if there are any
                onChange={(e)=>{
                  dispatch(editTodo(listIndex,{text:e.target.value}))
                }}
                />
              <button className ='update-btn' onClick={handleClose}>update</button>
            
            </Modal>
      </div>
  )
};

export default Todo;

