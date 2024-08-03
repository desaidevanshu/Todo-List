import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, toggleTaskCompletion }) => {
  /*To display the task on the homepage*/
    return (
    
    <div className="show">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;