import { combineReducers } from "redux";
import todoReducer from './todos/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;