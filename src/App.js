import React, { useState } from 'react';
import "./App.css";
import Calenda from "./components/calendar";
import Todo from "./components/todo";
import Input from "./components/input";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card4 from "./components/card4";
import image1 from "./images/pink1-removebg-preview.png";
import image2 from "./images/pink1-removebg-preview.png";
import image3 from "./images/pink1-removebg-preview.png";
import image4 from "./images/pink1-removebg-preview.png";

function App() {
  const [mustDoTasks, setMustDoTasks] = useState([]);
  const [shouldDoTasks, setShouldDoTasks] = useState([]);
  const [couldDoTasks, setCouldDoTasks] = useState([]);
  const [ifIHaveTimeTasks, setIfIHaveTimeTasks] = useState([]);
  const [selectedTaskDate, setSelectedTaskDate] = useState();


  const addTask = (task, category) => {
    switch (category) {
      case "must do":
        setMustDoTasks(prevTasks => [...prevTasks, task]);
        break;
      case "should do":
        setShouldDoTasks(prevTasks => [...prevTasks, task]);
        break;
      case "could do":
        setCouldDoTasks(prevTasks => [...prevTasks, task]);
        break;
      case "if I have time":
        setIfIHaveTimeTasks(prevTasks => [...prevTasks, task]);
        break;
      default:
        break;
    }

  };

  const handleTaskCompletion = (taskId, taskDate) => {
    const updatedMustDoTasks = mustDoTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed, date: selectedTaskDate} : task
    );
    const updatedShouldDoTasks = shouldDoTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed, date: selectedTaskDate} : task
    );
    const updatedCouldDoTasks = couldDoTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed, date: selectedTaskDate } : task
    );
    const updatedIfIHaveTimeTasks = ifIHaveTimeTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed, date: selectedTaskDate } : task
    );

    setMustDoTasks(updatedMustDoTasks);
    setShouldDoTasks(updatedShouldDoTasks);
    setCouldDoTasks(updatedCouldDoTasks);
    setIfIHaveTimeTasks(updatedIfIHaveTimeTasks);
    setSelectedTaskDate(taskDate);
  };

  const handleTaskDeletion = (taskId) => {
    const updatedMustDoTasks = mustDoTasks.filter((task) => task.id !== taskId);
    const updatedShouldDoTasks = shouldDoTasks.filter((task) => task.id !== taskId);
    const updatedCouldDoTasks = couldDoTasks.filter((task) => task.id !== taskId);
    const updatedIfIHaveTimeTasks = ifIHaveTimeTasks.filter((task) => task.id !== taskId);

    setMustDoTasks(updatedMustDoTasks);
    setShouldDoTasks(updatedShouldDoTasks);
    setCouldDoTasks(updatedCouldDoTasks);
    setIfIHaveTimeTasks(updatedIfIHaveTimeTasks);
  };

  return (
    <div className="main-container">
      <div className="image">
        <img src={image1} className="img1"></img>
        <Todo />
        <img src={image2} className="img2"></img>
      </div>

      <div className="butterfly">
        <img src={image3} className="img3"></img>
        <Calenda />
        {/* <p>Selected Task Date: {selectedTaskDate ? selectedTaskDate.toDateString() : ''}</p> */}
        <img src={image4} className="img4"></img>
      </div>
      <Input onAddTask={addTask} />

      <div className="cards">
        {/* <Card1 tasks={mustDoTasks} />
        <Card2 tasks={shouldDoTasks} />
        <Card3 tasks={couldDoTasks} />
        <Card4 tasks={ifIHaveTimeTasks} /> */}
        <Card1
          tasks={mustDoTasks}
          handleTaskCompletion={(taskId, taskDate) => handleTaskCompletion(taskId, taskDate)}
          handleTaskDeletion={handleTaskDeletion}
          // selectedTaskDate={selectedTaskDate}        
          />
        <Card2
          tasks={shouldDoTasks}
          handleTaskCompletion={(taskId, taskDate) => handleTaskCompletion(taskId, taskDate)}
          handleTaskDeletion={handleTaskDeletion}
          // selectedTaskDate={selectedTaskDate}
        />
        <Card3
          tasks={couldDoTasks}
          handleTaskCompletion={(taskId, taskDate) => handleTaskCompletion(taskId, taskDate)}
          handleTaskDeletion={handleTaskDeletion}
          // selectedTaskDate={selectedTaskDate}
        />
        <Card4
          tasks={ifIHaveTimeTasks}
          handleTaskCompletion={(taskId, taskDate) => handleTaskCompletion(taskId, taskDate)}
          handleTaskDeletion={handleTaskDeletion}
          // selectedTaskDate={selectedTaskDate}
        />



      </div>
    </div>
  );
}
export default App;