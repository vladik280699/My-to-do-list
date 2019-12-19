import React from 'react';
import Task from '../Task/Task';
import './TasksList.scss'

const TasksList = ({tasks, visibilityFilter}) => {
  let filteredTasks = tasks;
  if(visibilityFilter === "SHOW_ACTIVE"){
    filteredTasks = tasks.filter(t => !t.completed);
  } else if(visibilityFilter === "SHOW_COMPLETED"){
    filteredTasks = tasks.filter(t => t.completed);
  } else {
    filteredTasks = tasks;
  }
  return(<div className="tasks-list"> 
    { filteredTasks.map(t=>(<Task id={t.id} text={t.text} completed={t.completed}/>)) }
    </div>);
};

export default TasksList;