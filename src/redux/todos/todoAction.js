import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from "./todoTypes";


export const addTodos = (data) => {
    return  {
            type: ADD_TODO,
            payload: data
    }
}

export const completeTodo = (index, data) => {
    return {
            type: COMPLETE_TODO,
            payload: data,
            index: index
    }
}

export const editTodo = (index,data) =>{
    return {
      type: EDIT_TODO,
      payload:data,
      index:index
    }
  }

  
export const deleteTodo = (index) => {
    return {
            type: DELETE_TODO,
            payload: index
    }
}

