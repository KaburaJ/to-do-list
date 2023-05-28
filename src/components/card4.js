import React from 'react';
import Card from './card';

function Card4({ tasks, handleTaskCompletion, handleTaskDeletion }){
    return(
     <div className='card4'>
        IF I HAVE TIME
        <br></br>
        <ul>
            {tasks.map((task, index) => (
              <Card
              key={index}
              task={task}
              handleTaskCompletion={() => handleTaskCompletion(task.id)}
              handleTaskDeletion={handleTaskDeletion}
            //   onClick={() => handleTaskCompletion(task.id, task.date)}
            />
            ))}
        </ul>
     </div>
    )
}


export default Card4;