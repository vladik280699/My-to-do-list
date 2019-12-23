import {createStore} from "redux";
import {taskReducer} from './reducers/task-reducer';
import {initialState} from './initial-state';

export const store = createStore(taskReducer, initialState);