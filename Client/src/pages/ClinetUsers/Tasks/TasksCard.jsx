import { Link } from "react-router-dom";
import TaskStatus from "./TaskStatus";
import api from "../../../api/axios";

function TasksCard({ id, project, title, description, status, assignedUsers }) {

  const handleDelete = async () => {
    try {
      await api.delete(`/task/${id}`);
    } catch (error) {
      console.error(
        "Error deleting task:",
        error?.response?.data?.message
      );
    }
  };

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-indigo-500/20 hover:scale-[1.01] transition-all duration-300">

      {/* Project */}
      <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
        {project}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mt-2 leading-snug">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-[2px] bg-indigo-500/30 my-4 rounded-full" />

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">
        {description || "No description provided."}
      </p>

      {/* Assigned Users */}
      {assignedUsers && (
        <div className="flex gap-2 mt-5 flex-wrap">
          {assignedUsers.split(",").map((user, index) => (
            <span
              key={index}
              className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/20"
            >
              {user.trim()}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <TaskStatus status={status} />

        <div className="flex gap-2">
          

          
        </div>

      </div>

    </div>
  );
}

export default TasksCard;