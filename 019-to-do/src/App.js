import React, { useState } from 'react';
import './App.css';

import AddTask from './components/AddTask';
import Task from './components/Task';
import Footer from './components/Footer';

function App() {

  const [ allTasks , setAllTasks ] = useState([]);

  function addNewTask(newTask) {

    const id = allTasks.length + 1 + Math.floor(Math.random() * 100000);

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

  function handleEditTask(id) {
    const editedTask = prompt("Digite a tarefa: ");

    setAllTasks((prevAllTasks) => {
      return prevAllTasks.map((task) => {
        if(task.id === id) {
          task.task = editedTask;
        }

        return task;
      })
    });
  }

  function handleDeleteTask(id) {
    setAllTasks((prevAllTasks) => {
      return prevAllTasks.filter((task) => {
        return task.id !== id;
      })

    });
  }

  function clearAll() {
    setAllTasks([]);
  }


  const allTasksElements = allTasks.map((task) => {
    return <Task key={task.task} task={task}
    handleCheboxChange={handleCheboxChange}
    handleEditTask={handleEditTask}
    handleDeleteTask={handleDeleteTask} />
  });
  
  let pendingTasks = 0;
  allTasks.forEach((task) => {
    if(!task.isFinished) {
      pendingTasks += 1;
    }
  });
  
  return (
    <div className="app">
      <div className="todo-app">
        <h1 className="title">Todo App</h1>
        <AddTask addNewTask={addNewTask}/>
        {allTasksElements}
        <Footer pendingTasks={pendingTasks} clearAll={clearAll}/>
      </div>
    </div>
  );
  }

export default App;
