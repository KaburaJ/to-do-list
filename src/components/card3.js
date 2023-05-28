import React from 'react';
import Card from './card';

function Card3({ tasks, handleTaskCompletion, handleTaskDeletion }){
    return(
     <div className='card3'>
        COULD DO
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


export default Card3;
