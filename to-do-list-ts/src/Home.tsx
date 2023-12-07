import { NavLink } from "react-router-dom";
import { Task } from './App';

import { useState } from "react";

const Home = ({ tasks, removeTask }: {
    tasks: Task[],
    removeTask: (index: number) => void
}) => {
    const [taskList, setTaskList] = useState<Task[]>(tasks);

    const handleCheckboxChange = (index: number) => {
        const updatedTasks = [...taskList];
        updatedTasks[index].active = !updatedTasks[index].active;
        setTaskList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <>
            <div className="card">
                <NavLink to="/newtask">
                    <button>
                        New Task  ✏️
                    </button>
                </NavLink>
            </div>
            <div className="container">
                {taskList.map((task, index) => (
                    <div key={index} className="cell">
                        <div className="head">
                            <input
                                type="checkbox"
                                checked={!task.active}
                                onChange={() => handleCheckboxChange(index)}
                                style={{ margin: "0 0.3em" }}
                            />
                            <h3>{task.title}</h3>
                        </div>
                        <p>{task.desc}</p>
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home