import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.title.trim()) {
      const newTask = task;
      newTask.title = task.title.trim();
      const updatedTasks = [newTask, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      const taskToUpdate = task;
      if (task.id === id) {
        taskToUpdate.completed = !taskToUpdate.completed;
      }
      return taskToUpdate;
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
}

export default TaskApp;
