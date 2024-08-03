import React, { useState } from 'react';

const Task = ({ task, updateTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      timestamp: new Date().toISOString()
    };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
        {/* To handle edit button and show the status of completion of tasks*/}
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        
        <div className='task-item'>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
          <button id="b1" onClick={() => setIsEditing(true)}>Edit</button>
          <button id="b1" onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
