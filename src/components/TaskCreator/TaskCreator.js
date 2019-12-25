import React, { useState } from 'react';
import './TaskCreator.scss';

const TaskCreator = ({createTask}) => {

  let [textTask, setTextTask] = useState("");

  const typeText = (e) => {
      setTextTask(e.currentTarget.value);
  }

  const handleCreateTask = (e) => {
    e.preventDefault();
    if(textTask){
      const id = new Date().getTime();
      createTask(id, textTask);
      setTextTask("");
    }
  }
        return (
            <form className="form">
                <input className="form__input" placeholder="add a new task" value={textTask} onChange={typeText}/>
                <button className="form__button" type="submit" onClick={handleCreateTask}>add</button>
            </form>
        );
};

export default TaskCreator;