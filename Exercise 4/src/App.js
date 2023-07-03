import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        priority: "Low",
        date: new Date().toLocaleDateString(),
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // rest
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filterCompletedTasks = () => {
    return tasks.filter((task) => !task.completed);
  };

  const renderTasks = (taskList) => {
    return taskList.map((task) => (
      <div key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
        <span>({task.priority})</span>
        <span>{task.date} </span>
        <button
          className="bg-blue-500 hover:bg-white-600 text-black py-2 px-4 mt-4 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    ));
  };

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    borderRadius: "10px",
    padding: "10px 10px",
    marginLeft: "10px",
  };

  return (
    <div className="container bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-2xl font-bold text-blue-800">ToDo List App</h1>
        </div>
      </header>

      <div align="center">
        <p></p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <Button variant="primary" onClick={addTask} style={buttonStyle}>
          Add Task
        </Button>
      </div>
      <main className="container mx-auto mt-8 px-8">
        <div className="bg-white p-4 shadow-md rounded">
          <h2>All Tasks</h2>
          {renderTasks(tasks)}
        </div>
        <div>
          <p></p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <p></p>
          <h2>Active Tasks</h2>
          {renderTasks(filterCompletedTasks())}
        </div>
      </main>
      <div>
        <p></p>
        <p>@tailwindcss to-do-list</p>
      </div>
    </div>
  );
}

export default TodoListApp;
