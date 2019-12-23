import React from 'react';
import './TasksList.scss'
import TaskContainer from '../Task/TaskContainer';

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
    { filteredTasks.map(t=>(<TaskContainer id={t.id} text={t.text} completed={t.completed}/>)) }
    </div>);
};

export default TasksList;