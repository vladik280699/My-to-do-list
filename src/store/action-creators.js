import {CREATE_TASK, DELETE_TASK, TOGGLE_STATUS_TASK, SET_VISIBILITY_FILTER} from './actions';

export const createTask = (id, text) => ({
  type: CREATE_TASK,
  id,
  text
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id
});

export const toggleStatusTask = (id, completed) => ({
  type: TOGGLE_STATUS_TASK,
  completed,
  id 
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter  
});