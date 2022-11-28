import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: input,
      completed: false,
    };

    addTask(newTask);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              id="title"
              required
              maxLength="50"
              placeholder="Add a task..."
              onChange={handleChange}
            />
          </label>
        </li>
        <li>
          <button type="submit">Add Task</button>
        </li>
      </ul>
    </form>
  );
}

export default TaskForm;
