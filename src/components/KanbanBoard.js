// src/components/KanbanBoard.js

import React, { useState } from 'react';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div>
      <div>
        <div>
          {tasks.map((task, index) => (
            <div key={index}>{task}</div>
          ))}
        </div>
      </div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default KanbanBoard;
