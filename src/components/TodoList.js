import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  
  return (
    <>
      <h1>To do list</h1>
      <TodoForm  />
      <Todo />
    </>
  );
}

export default TodoList;
