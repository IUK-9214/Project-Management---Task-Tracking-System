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
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">

      {/* Project (Context Label) */}
      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {project}
      </span>

      {/* Title (Primary Focus) */}
      <h3 className="text-xl font-bold text-indigo-600 mt-1 leading-tight">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-10 h-0.5 bg-indigo-100 my-3 rounded" />

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-grow">
        {description || "No description provided."}
      </p>

      {/* Assigned Users */}
      {assignedUsers && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {assignedUsers.split(",").map((user, index) => (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium"
            >
              {user.trim()}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <TaskStatus status={status} />

        <div className="flex gap-2">
          <Link
            to={`/admindashboard/admintasks/editTask/${id}`}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded text-sm hover:bg-indigo-700 transition"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm hover:bg-gray-300 transition"
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}

export default TasksCard;
