import React, { useState } from 'react';
import './App.css';

import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {

  const [ allTasks , setAllTasks ] = useState([]);

  function addNewTask(newTask) {

    const id = allTasks.length + 1;

    setAllTasks((prevAllTasks) => {
      return [...prevAllTasks, {
        id,
        ...newTask
      }]
    });
  }

  function handleCheboxChange(id) {
    setAllTasks((prevAllTasks) => {
      return prevAllTasks.map((task) => {
        if(task.id === id) {
          task.isFinished = !task.isFinished;
        }
        return task;
      })
    });
  }

  const allTasksElements = allTasks.map((task) => {
    return <Task key={task.task} task={task} handleCheboxChange={handleCheboxChange} />
  });
  
  return (
    <div className="app">
      <div className="todo-app">
        <h1 className="title">Todo App</h1>
        <AddTask addNewTask={addNewTask}/>
        {allTasksElements}
      </div>
    </div>
  );
  }

export default App;
