import React from 'react';
import {store, deleteTask, toggleStatusTask} from '../../store/store';
import './Task.scss';

const Task = ({id, text, completed}) => {
  const handleDeleteTask = () => {
    store.dispatch(deleteTask(id))
  }
  const handleToggleStatusTask = () => {
    store.dispatch(toggleStatusTask(id, completed));
  }
  return(<div>
      <span key={id} onClick={handleToggleStatusTask} className={completed? 'completed': ""}>{text}</span><button onClick={handleDeleteTask}>x</button>
    </div>);
};

export default Task;