import React from 'react';
import {store} from '../../store/store';
import {deleteTask, toggleStatusTask} from '../../store/action-creators';
import './Task.scss';

const Task = ({id, text, completed}) => {
  const handleDeleteTask = () => {
    store.dispatch(deleteTask(id))
  }
  const handleToggleStatusTask = () => {
    store.dispatch(toggleStatusTask(id, completed));
  }
  return(<div className="task">
      <span key={id} onClick={handleToggleStatusTask} className={`task__text ${completed? "completed": ""}`}>{text}</span><button className="task__btn" onClick={handleDeleteTask}>x</button>
    </div>);
};

export default Task;