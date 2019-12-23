import { createSelector } from "reselect";

export const getTasks = (state) => {
  return state.tasks;
} 

export const getVisibilityFilter = (state) => {
  return state.visibilityFilter;
} 

export const getCountTasks = createSelector(getTasks, getVisibilityFilter, (tasks, visibilityFilter)=>{

  if(visibilityFilter === "SHOW_ACTIVE"){
    return tasks.filter(t => !t.completed).length;
  } else if(visibilityFilter === "SHOW_COMPLETED"){
    return tasks.filter(t => t.completed).length;
  } else {
    return tasks.length;
  }
}); 