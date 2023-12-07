import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Task } from './App';


const NewTask = ({ addToTasks }: { addToTasks: (task: Task) => void }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            title,
            desc: description,
            active: true,
        };
        addToTasks(newTask);
        setTitle("");
        setDescription("");
    };

    return (
        <>
            <h2>Add a new task</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <input
                    type="text"
                    placeholder="Task Name*"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="title"
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="description"
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <NavLink to="/">
                <button onClick={() => {
                    // Add logic to go back to the home page if successful
                }} className="back-btn">Back</button>
            </NavLink>
        </>
    );
}

export default NewTask;