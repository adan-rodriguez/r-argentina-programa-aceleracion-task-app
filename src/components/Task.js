import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/Task.css";

const Task = ({ id, title, completed, deleteTask, completedTask }) => {
  return (
    <div className={completed ? "task completed" : "task"}>
      <p onClick={() => completedTask(id)}>{id}</p>
      <p>{title}</p>
      <div onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="icon-delete" />
      </div>
    </div>
  );
};

export default Task;
