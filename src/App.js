  
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {store, persistor} from './redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <div className='todo-app'>
      <TodoList />
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;