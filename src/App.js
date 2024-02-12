// src/App.js
import './App.css'
// src/App.js
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import FilterTasks from './components/FilterTasks';

const App = () => {
  // Initialize state with an empty array or tasks from local storage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return storedTasks;
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), ...task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Task Tracker</h1>
        <AddTask onAdd={addTask} />
        <FilterTasks filter={filter} onFilterChange={setFilter} />
        <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} />
      </div>
    </DndProvider>
  );
};

export default App;
