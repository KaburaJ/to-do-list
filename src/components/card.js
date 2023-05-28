import React from 'react';

function Card({ task, handleTaskCompletion, handleTaskDeletion }) {
  const { id, description, completed } = task;

  const handleCompletion = () => {
    handleTaskCompletion(id);
  };

  const handleDeletion = () => {
    handleTaskDeletion(id);
  };

  return (
    <li className="card-item">
      <input type="checkbox" checked={completed} onChange={handleCompletion} />
      <span className={`task-description ${completed ? 'completed' : ''}`}>
        {description}
      </span>
      <button className="delete-button" onClick={handleDeletion}>
        Delete
      </button>
    </li>
  );
}

export default Card;
