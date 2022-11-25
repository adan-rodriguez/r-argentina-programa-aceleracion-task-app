import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.title.trim()) {
      task.title = task.title.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task-app">
      <TaskForm addTask={addTask} />
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            // description={task.description}
            completed={task.completed}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
