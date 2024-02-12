// src/components/FilterTasks.js
import React from 'react';

const FilterTasks = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label>
        Filter Tasks:{' '}
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  );
};

export default FilterTasks;
