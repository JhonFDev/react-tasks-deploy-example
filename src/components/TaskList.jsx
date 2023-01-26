import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {

  const {tasks} = useContext(TaskContext)


  if (tasks.length === 0) {
    return <h1 className="text-2xl font-bold text-center text-white mb-3"> no hay taeras aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {/* <p>Lista de Tareas</p> */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
