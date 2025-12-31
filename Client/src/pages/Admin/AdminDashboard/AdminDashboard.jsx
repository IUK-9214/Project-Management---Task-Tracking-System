import { useEffect, useState } from "react";
import ProgressChart from "./ProgressChart";
import StatsCard from "./StatsCard";
import api from "../../../api/axios";
 // adjust path if needed

function AdminDashboard() {

  const [projectsCount, setProjectsCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);
  const [todoCount, setTodoCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const fetchDashboardData = async () => {
    try {
      // Fetch projects
      const projectRes = await api.get("/project");
      const projects = projectRes.data.project || projectRes.data;
      setProjectsCount(projects.length);

      // Fetch tasks
      const taskRes = await api.get("/task");
      const tasks = taskRes.data.task || taskRes.data;
      setTasksCount(tasks.length);

      // Count task statuses
      const todoTasks = tasks.filter(
        (task) => task.taskStatus === "To Do"
      );

      const completedTasks = tasks.filter(
        (task) => task.taskStatus === "Completed"
      );

      setTodoCount(todoTasks.length);
      setCompletedCount(completedTasks.length);

    } catch (error) {
      console.error("Dashboard data error:", error.message);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [projectsCount,tasksCount,todoCount,completedCount]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Projects" value={projectsCount} />
        <StatsCard title="Total Tasks" value={tasksCount} />
        <StatsCard title="To Do" value={todoCount} />
        <StatsCard title="Completed" value={completedCount} />
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
          Task Progress
        </h2>
        <ProgressChart />
      </div>
    </div>
  );
}

export default AdminDashboard;
