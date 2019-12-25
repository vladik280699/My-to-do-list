import React from 'react';
import './TasksList.scss'
import TaskContainer from '../Task/TaskContainer';

const TasksList = ({filteredTasks}) => {

  return(<div className="tasks-list"> 
    { filteredTasks.map(t=>(<TaskContainer key={t.id}  id={t.id} text={t.text} completed={t.completed}/>)) }
    </div>);
};

export default TasksList;