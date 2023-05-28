import React from "react";

const todoList = [
  {
    id: 1,
    date: "2023-05-26",
    task: "Finish project proposal",
    status: "Incomplete",
  },
  { 
    id: 2, 
    date: "2023-05-27", 
    task: "Buy groceries", 
    status: "Incomplete" 
},
  { 
    id: 3, 
    date: "2023-05-28", 
    task: "Call mom", 
    status: "Complete" },
  {
    id: 4,
    date: "2023-05-29",
    task: "Schedule dentist appointment",
    status: "Incomplete",
  },
  {
    id: 5,
    date: "2023-05-29",
    task: "Pay utility bills",
    status: "Incomplete",
  },
];

function Todo() {
  return (
    
<div className="todo">
<h1>To-Do List
<style>
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
</style>
</h1>
    {console.log({...todoList.id})}
    </div>
  )
  
}


export default Todo;
