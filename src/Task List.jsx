import React, { useState } from "react";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChangeInput = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, { text: newTask, done: false }]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };
  const taskDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h1> Task List</h1>

      <div>
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={handleChangeInput}
        />
        <button className="add-task-button" onClick={addTask}>
          Add to Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={task.done ? "text done" : "text"}>
              {task.text}
            </span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              ❌
            </button>
            <button className="done-button" onClick={() => taskDone(index)}>
              ✅
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Tasklist;
