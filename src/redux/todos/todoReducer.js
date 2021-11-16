import {
    ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO } from './todoTypes';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: return {
            ...state,
            todos: [ ...state.todos, action.payload ]
        }

        case COMPLETE_TODO: 
            state.todos[action.index] = action.payload  
            return {
                ...state
            }

        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter((item, i) => i !== action.payload) 
        }

        case EDIT_TODO:{
            const updatedState = {...state}
            updatedState.todos[action.index].text = action.payload.text   //changing the text of selected todo with the help of index
            return updatedState
        }
            
        default: return state
    }
};

export default reducer;