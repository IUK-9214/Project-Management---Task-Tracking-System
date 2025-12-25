// src/components/tasks/TaskList.jsx




import TasksCard from "./TasksCard";

// Dummy tasks for UI
const dummyTasks = [
  {
    id: 1,
    title: "Design Dashboard",
    description: "Create wireframes for dashboard UI",
    status: "To Do",
    assignedUsers: ["Ali", "Sara"],
  },
  {
    id: 2,
    title: "Setup Backend",
    description: "Create REST API endpoints",
    status: "In Progress",
    assignedUsers: ["Ali"],
  },
  {
    id: 3,
    title: "Testing",
    description: "Unit tests for components",
    status: "Completed",
    assignedUsers: ["Sara", "Ali"],
  },
];

function TasksList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyTasks.map((task) => (
        <TasksCard
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          assignedUsers={task.assignedUsers}
        />
      ))}
    </div>
  );
}

export default TasksList;
