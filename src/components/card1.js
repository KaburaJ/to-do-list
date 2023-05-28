import React from 'react';
import Card from './card';
import Calenda from './calendar';

function Card1({ tasks, handleTaskCompletion, handleTaskDeletion }) {
  return (
    <div className='card1'>
      MUST DO
      <br></br>
      <ul>
        {tasks.map((task, index) => (
          <Card
            key={index}
            task={task}
            handleTaskCompletion={() => handleTaskCompletion(task.id)}
            handleTaskDeletion={handleTaskDeletion}
            // onClick={() => handleTaskCompletion(task.id, task.date)} // Add onClick handler
          />
        ))}
      </ul>
    </div>
  );
}

export default Card1;
