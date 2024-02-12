// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, date, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(id)}>
      <h3>{text}</h3>
      <p>{date}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Task;
