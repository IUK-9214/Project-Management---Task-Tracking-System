import TaskStatus from "./TaskStatus";

function TasksCard({ id, title, description, status, assignedUsers }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      
      {/* Task Title */}
      <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>

      {/* Task Description */}
      <p className="text-gray-500 mt-2">{description}</p>

      {/* Assigned Users */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {assignedUsers &&
          assignedUsers
            .split(",")
            .map((user, index) => (
              <span
                key={index}
                className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-sm"
              >
                {user.trim()}
              </span>
            ))}
      </div>

      {/* Status Badge */}
      <div className="mt-4">
        <TaskStatus status={status} />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
          Edit
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TasksCard;
