import React from 'react';
import Task from '../Task/Task';

const Tasks = ({tasks}) => {

  return(<div>
      {tasks.map(t=>(<Task id={t.id} text={t.text} completed={t.completed}/>))}
    </div>);
};

export default Tasks;