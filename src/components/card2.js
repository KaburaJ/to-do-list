import React from 'react';
import Card from './card';

function Card2({ tasks, handleTaskCompletion, handleTaskDeletion }){
    return(
     <div className='card2'>
        SHOULD DO
        <br></br>
        <ul>
            {tasks.map((task, index) => (
                 <Card
                 key={index}
                 task={task}
                 handleTaskCompletion={() => handleTaskCompletion(task.id)}
                 handleTaskDeletion={handleTaskDeletion}
                //  onClick={() => handleTaskCompletion(task.id, task.date)}
               />
            ))}
        </ul>
     </div>
    )
}


export default Card2;