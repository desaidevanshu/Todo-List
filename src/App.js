import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import TaskForm from './components/Taskform.js';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch('/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    setNotFound(filteredTasks.length === 0);
  };
  const clearSearch = () => {
    setSearchQuery('');
    setNotFound(false);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className='app-title'>Todo List</h1>
      <TaskForm addTask={addTask} />
      <input
        className='search-input'
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {notFound ? (
        <h3 className="not-found">No tasks found.</h3>
      ) : (
        <TaskList
          tasks={filteredTasks}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      )}
      <button className="clear-search-btn" onClick={clearSearch}>Clear Search</button>
    </div>
  );
};

export default App;