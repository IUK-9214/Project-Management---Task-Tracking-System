import { useState, useEffect } from "react";
import api from "../../../api/axios";
import UserTasksCard from "./UserTaskCard";

function UserTasksList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/task");
      setTasks(res.data.task || res.data); 
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error?.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // run only once

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <UserTasksCard
          key={task._id}
          id={task._id}
          project={task.taskProject}
          title={task.taskTitle}
          description={task.taskDesc}
          status={task.taskStatus}
          assignedUsers={task.taskAssign}
        />
      ))}
    </div>
  );
}

export default UserTasksList;
