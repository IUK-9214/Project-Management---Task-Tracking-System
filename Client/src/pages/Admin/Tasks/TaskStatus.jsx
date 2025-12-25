

// src/components/tasks/TaskStatus.jsx
function TaskStatus({ status }) {
  const statusColors = {
    "To Do": "bg-yellow-200 text-yellow-800",
    "In Progress": "bg-blue-200 text-blue-800",
    "Completed": "bg-green-200 text-green-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
    >
      {status}
    </span>
  );
}

export default TaskStatus;
