import React, { useState } from 'react';

function Input({ onAddTask }) {
  const [task, setTask] = useState('');
  const [selectedOption, setSelectedOption] = useState('must do');

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      description: task,
      completed: false
    };
    onAddTask(newTask, selectedOption);
    setTask('');
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
        <option value="must do">Must Do</option>
        <option value="should do">Should Do</option>
        <option value="could do">Could Do</option>
        <option value="if I have time">If I have time</option>
      </select>
      <input
        id="taskInput"
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button type="submit">I did this!</button>
    </form>
  );
}

export default Input;
