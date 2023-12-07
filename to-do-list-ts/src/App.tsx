import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NewTask from './NewTask';

function App() {
  interface Task {
    title: string;
    desc: string;
    active: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  function addToTasks(newTask: Task) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  }

  function removeTask(index: number) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  }

  return (
    <Router>
      <>
        <h1>2Do</h1>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} removeTask={removeTask} />} />
          <Route path="/newtask" element={<NewTask addToTasks={addToTasks} />} />
        </Routes>
      </>
    </Router>
  )
}


export default App
export interface Task {
  title: string;
  desc: string;
  active: boolean;
}
