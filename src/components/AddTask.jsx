// src/components/AddTask.js
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, date: new Date().toLocaleString(), completed: false });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
