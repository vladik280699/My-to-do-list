import React from 'react';
import './Task.scss';

const Task = ({id, text, completed, deleteTask, toggleStatusTask}) => {
  const handleDeleteTask = () => {
    deleteTask(id)
  }
  const handleToggleStatusTask = () => {
    toggleStatusTask(id, completed);
  }
  return(<div className="task">
      <span key={id} onClick={handleToggleStatusTask} className={`task__text ${completed? "completed": ""}`}>{text}</span><button className="task__btn" onClick={handleDeleteTask}>x</button>
    </div>);
};

export default Task;