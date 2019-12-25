import React from 'react';
import './Task.scss';

const Task = ({id, text, completed, deleteTask, toggleStatusTask}) => {

    return (
        <div onClick={()=>{toggleStatusTask(id, completed);}} className={`task`}>
            <span className={`task__text ${completed ? "completed" : ""}`}>{text}</span>
            <button className="task__btn" onClick={()=>{deleteTask(id)}}>x</button>
        </div>
    );
};

export default Task;